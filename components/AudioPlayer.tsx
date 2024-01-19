'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image';

export default async function ArticleAudio({ slug, title, image, body }: { slug: string, title: string, image: string, body: string }) {
    useEffect(() => {
        handleStart();
      }, []);

      
    const handleStart = () => {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(body));
    }

    const handleStop = () => {
        window.speechSynthesis.cancel();
    }

    return (
        <div className='m-5'>
            <h1 className='pb-5 text-3xl text-white-800'>{title}</h1>
            <button
                className="w-full flex items-center justify-center bg-indigo-500 hover:bg-indigo-700 hover:sha rounded-lg text-white text-xl px-4 py-2"
                onClick={(e) => handleStart()}>
                <span>Play Description</span>
            </button>
            <button
                className="w-full flex items-center justify-center bg-red-500 hover:bg-red-700 hover:sha rounded-lg text-white text-xl mt-2 px-4 py-2"
                onClick={(e) => handleStop()}>
                <span>Stop</span>
            </button>
            <Image src={image} layout="responsive" width={500} height={500} className='mb-2 rounded py-5' alt="" />
            <article className="pt-4 text-white"
                dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
}