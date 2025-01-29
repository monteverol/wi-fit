import React from 'react';
import { CgController } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { IoScale } from "react-icons/io5";

const SettingsNavigation = ({ selectedOption, setSelectedOption }) => {
    const options = ["Connect ESP32 Device", "Account Details", "BMI Records"];

    return(
        <div className="w-full p-8 drop-shadow-md flex flex-col gap-8 rounded-3xl bg-white border-4 border-border">
            <div 
                className="flex flex-row items-center gap-4 cursor-pointer"
                onClick={() => setSelectedOption(options[0])}
            >
                <CgController size={30} color={selectedOption == options[0] ? 'var(--icon-dark)' : 'var(--icon)'} />
                <h1 className={`${selectedOption == options[0] ? 'text-textDark' : 'text-textLight'} text-xl font-bold`}> {options[0]} </h1>
            </div>
            <div 
                className="flex flex-row items-center gap-4 cursor-pointer"
                onClick={() => setSelectedOption(options[1])}
            >
                <FaUser size={30} color={selectedOption == options[1] ? 'var(--icon-dark)' : 'var(--icon)'} />
                <h1 className={`${selectedOption == options[1] ? 'text-textDark' : 'text-textLight'} text-xl font-bold`}> {options[1]} </h1>
            </div>
            <div 
                className="flex flex-row items-center gap-4 cursor-pointer"
                onClick={() => setSelectedOption(options[2])}
            >
                <IoScale size={30} color={selectedOption == options[2] ? 'var(--icon-dark)' : 'var(--icon)'} />
                <h1 className={`${selectedOption == options[2] ? 'text-textDark' : 'text-textLight'} text-xl font-bold`}> {options[2]} </h1>
            </div>
        </div>
    );
}

export default SettingsNavigation;