import React, { useState } from 'react';
import Logo from '../../components/logo';
import Navigation from '../../components/navigation';
import MicroController from '../../components/microController';
import Workout from './workout';
import Settings from './settings';
import Home from './home';

const Wrapper = () => {
    const [activePage, setActivePage] = useState('Home');

    const renderContent = () => {
        switch (activePage) {
            case 'Workout':
                return <Workout />;
            case 'Settings':
                return <Settings />;
            default:
                return <Home userName="Shand" />;
        }
    };

    return (
        <div className="h-screen w-screen bg-primaryBg grid grid-flow-col grid-rows-6 gap-4 p-8">
            {/* HEAD */}
            <div className="w-full h-full flex flex-row justify-between items-center">
                <Logo />
                <Navigation activePage={activePage} setActivePage={setActivePage} />
                {activePage == "Settings" ? null : <MicroController status={true} />}
            </div>
            {/* BODY */}
            <div className="row-span-5 rounded-3xl p-4">
                
                {renderContent()}
            
            </div>
        </div>
    );
}

export default Wrapper;
