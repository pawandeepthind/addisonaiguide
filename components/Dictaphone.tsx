'use client'

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className='m-10 flex flex-col h-full w-full overflow-x-hidden'>
            <p>Listening: {listening ? 'on' : 'off'}</p>
            <textarea className="ml-0 mb-5 text-xl text-slate-800 rounded" value={transcript}></textarea>
            <div className='flex justify-end'>
                <button className="mr-10 flex items-center justify-center bg-indigo-500 hover:bg-indigo-700 hover:sha rounded-xl text-white font-bold px-4 py-2 flex-shrink-0" onClick={SpeechRecognition.startListening}>Start</button>
                <button className="mr-10 flex items-center justify-center bg-indigo-500 hover:bg-indigo-700 hover:sha rounded-xl text-white font-bold px-4 py-2 flex-shrink-0" onClick={SpeechRecognition.stopListening}>Stop</button>
                <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-700 hover:sha rounded-xl text-white font-bold px-4 py-2 flex-shrink-0" onClick={resetTranscript}>Reset</button>
            </div>
        </div>
    );
};
export default Dictaphone;