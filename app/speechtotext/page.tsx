"use client"

import 'regenerator-runtime/runtime'
import React from 'react';
import Dictaphone from '@/components/Dictaphone';

const Home: React.FC = () => {
    return (
        <div className='flex justify-center'>
            <Dictaphone />
        </div>
    );
};

export default Home;