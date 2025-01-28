import React from 'react';
import { getWeekDays } from '../../utils/dateUtils';
import { IoScale } from "react-icons/io5";

const Home = ({ userName }) => {
    return (
        <div className="h-full w-full grid grid-flow-row grid-rows-5 gap-8">
            <div className="w-full h-full grid grid-flow-col grid-cols-4 gap-8">
                <div className="w-full h-full p-8 rounded-3xl bg-white drop-shadow-lg flex flex-col justify-between">
                    <h2 className="font-bold text-text text-3xl"> Welcome, {userName}! Start Workout? </h2>
                    <div className="w-full flex flex-row justify-between">
                        <button 
                            className="px-8 py-4 font-bold text-3xl text-text flex flex-row gap-4 items-center justify-between bg-button rounded-full drop-shadow-md"
                        >
                            <IoScale size={30} color="var(--icon)" />
                            BMI
                        </button>
                        <button 
                            className="px-8 py-4 font-bold text-3xl text-text flex flex-row gap-4 items-center justify-between bg-buttonConfirm rounded-full drop-shadow-md"
                        >
                            Continue Workout
                        </button>
                    </div>
                </div>
                <div className="col-span-3 w-full h-full rounded-3xl bg-blue-500"></div>
            </div>
        </div>
    );
}

export default Home;
