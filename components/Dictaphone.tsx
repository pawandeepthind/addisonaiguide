'use client'

import 'regenerator-runtime/runtime'
import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
    const [pressed, setPressed] = React.useState(false);
    const [questions, setQuestions] = React.useState<
        Array<{
            question: string
        }>>([]);

    const {
        finalTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    useEffect(() => {
        if (finalTranscript !== '') {
            setQuestions((currQuestions) => [...currQuestions, { question: finalTranscript }]);
        }
    }, [finalTranscript]);

    if (!browserSupportsSpeechRecognition) {
        return (
            <div>
            </div>
        );
    }

    const handleMouseDown = (event: any) => {

        // Mouse button was pressed on the button
        console.log('test');
        setPressed(true);
        SpeechRecognition.startListening();
    };

    const handleMouseUp = () => {
        // Mouse button was released
        setPressed(false);
        SpeechRecognition.stopListening();
    };

    return (
        <div className='grid grid-rows-2' suppressHydrationWarning={true}>
            <button
                type="button"
                className="w-40 h-40 rounded-full bg-blue-500 text-white hover:bg-blue-600 active:bg-green-500 transition-colors focus:outline-none"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onKeyDown={handleMouseDown}
                onKeyUp={handleMouseUp}
                autoFocus>
                <svg className="w-35 h-35 mx-auto my-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M5 4a1 1 0 00-1 1v8a1 1 0 001 1h4l3 3v-3h2a1 1 0 001-1V5a1 1 0 00-1-1H6a1 1 0 00-1 1z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <div id="questions">
                <div>
                    {questions.map((q) => (<li>{q.question}</li>))}
                </div>
            </div>
        </div>
    );
};
export default Dictaphone;