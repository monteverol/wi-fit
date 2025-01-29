import React, { useState, useEffect } from 'react';
import Logo from '../../components/logo';
import Navigation from '../../components/navigation';
import MicroController from '../../components/microController';
import Workout from './workout';
import Settings from './settings';
import Home from './home';

const Wrapper = () => {
    const [activePage, setActivePage] = useState(() => {
        return localStorage.getItem('activePage') || 'Home';
    });

    useEffect(() => {
        localStorage.setItem('activePage', activePage);
    }, [activePage]);

    const renderContent = () => {
        switch (activePage) {
            case 'Workout':
                return <Workout />;
            case 'Settings':
                return <Settings />;
            default:
                return <Home username="Shand" />;
        }
    };

    return (
        <div className="h-screen w-screen bg-primaryBg grid grid-flow-col grid-rows-6 gap-4 p-8">
            {/* HEAD */}
            <div className="w-full h-full flex flex-row justify-between items-center">
                <Logo />
                <Navigation activePage={activePage} setActivePage={setActivePage} />
                <MicroController status={true} hide={activePage === "Settings"} />
            </div>
            {/* BODY */}
            <div className="row-span-5 rounded-3xl">
                {renderContent()}
            </div>
        </div>
    );
}

export default Wrapper;