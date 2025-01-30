import React from 'react';
import person_squat from '../assets/exercises/person_squat.png';
import { IoTimerOutline } from "react-icons/io5";
import { FaPlay, FaFire } from "react-icons/fa";

const WorkoutDisplay = () => {
    return(
        <div className="relative col-span-3 h-full w-full rounded-3xl p-4 bg-white drop-shadow-lg">
            {/* IMAGE */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden vignette">
                <img src={person_squat} alt="person squatting" className="w-full rounded-3xl" />
            </div>

            {/* REPITIONS */}
            <div className="absolute top-8 right-8 px-8 py-4 flex flex-col justify-between items-center rounded-2xl bg-white bg-opacity-80 drop-shadow-md gap-2">
                <h2 className="font-bold text-2xl text-textLight"> Repitions: </h2>
                <h2 className="font-bold text-4xl text-textDark"> 5 / 9 </h2>
            </div>

            {/* TIMER */}
            <div className="w-40 absolute top-8 left-8 p-4 flex flex-row items-center justify-between rounded-2xl bg-white bg-opacity-80 drop-shadow-md">
                <IoTimerOutline size={40} color="var(--timer)" />
                <h2 className="font-bold text-4xl text-timer"> 4:22 </h2>
            </div>

            {/* CALORIES */}
            <div className="w-40 absolute top-28 left-8 p-4 flex flex-row items-center justify-between rounded-2xl bg-white bg-opacity-80 drop-shadow-md">
                <FaFire size={40} color="var(--fire)" />
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-4xl text-textStreak"> 124 </h2>
                    <h3 className="font-bold text-xl text-textLight"> kcal </h3>
                </div>
            </div>

            {/* PLAY */}
            <div className="absolute bottom-8 left-8 flex items-center justify-center p-4 bg-[#DAF0C8] rounded-full cursor-pointer">
                <div className="flex items-center justify-center p-6 bg-white drop-shadow-md rounded-full">
                    <FaPlay size={40} color="var(--confirm)" />
                </div>
            </div>
        </div>
    );
}

export default WorkoutDisplay;