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

    const enterKeyPressed = (event) => {
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
                setQuestion("");
            })
    }

    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <div className="flex flex-col flex-auto h-full p-6">
                    <div className="flex flex-col shadow-2xl flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid grid-cols-12 gap-y-2">
                                    {chats.map((chat, index) => (
                                        <ChatMessage key={index} isLeftSide={chat.isLeftSide} message={chat.message} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center h-16 rounded-xl bg-gray-200 w-full px-2">
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="question"
                                        placeholder="Enter your question here?"
                                        value={question}
                                        className="flex w-full border rounded-xl focus:outline focus:border-cyan-300 pl-4 h-10 shadow-inner"
                                        onChange={(e) => setQuestion(e.target.value)}
                                        onKeyDown={(e) => enterKeyPressed(e)}
                                    />
                                </div>
                            </div>
                            <div className="ml-4">
                                <button
                                    disabled={question.length < 1}
                                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-700 hover:sha rounded-xl text-white font-bold px-4 py-2 flex-shrink-0"
                                    onClick={(e) => handleAsk(e)}>
                                    <span>Ask</span>
                                    <span className="ml-2">
                                        <svg
                                            className="w-4 h-4 transform rotate-45 -mt-px"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}