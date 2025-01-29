import React from 'react';
import { IoScale } from "react-icons/io5";

const WelcomeContainer = ({ username }) => {
    return(
        <div className="w-full h-full p-4 rounded-3xl bg-white drop-shadow-lg flex flex-col justify-between">
            <h2 className="font-bold text-text text-2xl"> Welcome, {username}! Start Workout? </h2>
            <div className="w-full flex flex-row justify-between">
                <button 
                    className="py-2 px-4 font-bold text-lg text-text flex flex-row gap-4 items-center justify-between bg-button rounded-full drop-shadow-md"
                >
                    <IoScale size={30} color="var(--icon)" />
                    BMI
                </button>
                <button 
                    className="py-2 px-4 font-bold text-lg text-text flex flex-row gap-4 items-center justify-between bg-buttonConfirm rounded-full drop-shadow-md"
                >
                    Continue Workout
                </button>
            </div>
        </div>
    );
}

export default WelcomeContainer;