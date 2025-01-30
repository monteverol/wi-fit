import React, { useState } from 'react';
import SettingsNavigation from '../../components/settingsNavigation';
import ConnectMicrocontroller from './settings/connectMicrocontroller';

const Settings = () => {
    const [selectedOption, setSelectedOption] = useState("Connect ESP32 Device");

    const renderContent = () => {
        switch (selectedOption) {
            case "Connect ESP32 Device":
                return <ConnectMicrocontroller />;
            case "Account Details":
                return <p className="text-xl text-white font-bold">Manage your account details here.</p>;
            case "BMI Records":
                return <p className="text-xl text-white font-bold">View your BMI records here.</p>;
            default:
                return <p className="text-xl text-white font-bold">Select an option to see details.</p>;
        }
    };

    return (
        <div className="h-full w-full grid grid-flow-col grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="h-full w-full">
                <SettingsNavigation selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>

            {/* Blue Background Content Area */}
            <div className="col-span-3 h-full w-full bg-white border-4 border-border rounded-3xl drop-shadow-md overflow-hidden">
                
                {renderContent()}

            </div>
        </div>
    );
}

export default Settings;