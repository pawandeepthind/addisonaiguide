'use client';

import ChatMessage from "./ChatMessage";
import React from "react";

export default function ChatBot({ slug, body }: { slug: string, body: string }) {
    const [question, setQuestion] = React.useState('');
    const [chats, setChats] = React.useState<
        Array<{
            isLeftSide: boolean,
            message: string
        }>
    >([]);
    const addChat = (you: boolean, msg: string) => {
        setChats((curChat) => [...curChat, { isLeftSide: you, message: msg }])
    };

    const enterKeyPressed = (event: any) => {
        if (event.keyCode === 13) {
            handleAsk(event);
        }
    }

    function handleAsk(event: any) {
        event.preventDefault();
        if (question.length < 1) {
            return;
        }
        addChat(true, question);
        setQuestion("");
        fetch("/api/openai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question: question,
                content: body
            }),
        }).then(response => response.json())
            .then(function (response) {
                console.log("resp:", response.result);
                addChat(false, response.result);
            })
    }

    return (
        <div className="flex h-screen text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <div className="flex flex-col flex-auto h-full">
                    <div className="flex flex-col flex-auto flex-shrink-0 bg-gray-200 h-full">
                        <div className="flex flex-row items-center h-16 bg-gray-400 w-full px-1">
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="question"
                                        placeholder="Enter your question here?"
                                        value={question}
                                        className="flex w-full border pl-4 h-10"
                                        onChange={(e) => setQuestion(e.target.value)}
                                        onKeyDown={(e) => enterKeyPressed(e)}
                                    />
                                </div>
                            </div>
                            <div className="ml-4">
                                <button
                                    disabled={question.length < 1}
                                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-700 hover:sha rounded-lg text-white px-4 py-2 flex-shrink-0"
                                    onClick={(e) => handleAsk(e)}>
                                    <span>Ask Question</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid grid-cols-14 gap-y-1">
                                    <ChatMessage key={0} isLeftSide={false} message={'Hello! How can I assist you today at the Addison Gallery of American Art?'} />
                                    {chats.map((chat, index) => (
                                        <ChatMessage key={index} isLeftSide={chat.isLeftSide} message={chat.message} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}