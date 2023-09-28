'use client'

import React from 'react';
import Dictaphone from '@/components/Dictaphone';

const Home: React.FC = () => {
    return (
        <div className="flex justify-center mt-10 mb-5 h-screen">
            <Dictaphone />
        </div>
    );
};

export default Home;