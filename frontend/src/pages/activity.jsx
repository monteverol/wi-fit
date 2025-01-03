import React from 'react';
import Logo from '../components/logo';

const Activity = () => {
    return (
        <div className="w-screen h-screen bg-[#A8A8A8] p-8 flex flex-col gap-8">
            <div className="flex flex-row gap-8 w-full items-center">
                <Logo isDark={true} />
                <div className="flex flex-grow flex-row rounded-3xl bg-logoDark h-full">
                    
                </div>
            </div>
        </div>
    );
};

export default Activity;
