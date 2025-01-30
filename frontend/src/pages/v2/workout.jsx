import React from 'react';
import WorkoutDisplay from '../../components/workoutDisplay';
import BigExerciseTile from '../../components/bigExerciseTile';
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { FaStop } from "react-icons/fa";

const Workout = () => {
    return (
        <div className="h-full w-full grid grid-flow-col grid-cols-4 gap-4">
            <WorkoutDisplay />
            <div className="grid grid-flow-row grid-rows-4 h-full w-full gap-4">
                <div className="row-span-3 w-full h-full bg-white rounded-3xl drop-shadow-lg p-4">
                    <h3 className="font-bold text-text text-xl"> Next Exercises: </h3>
                    <div className="flex flex-col gap-4 mt-4">
                        <BigExerciseTile exercise="push up" />
                        <BigExerciseTile exercise="jog in place" />
                        <BigExerciseTile exercise="squats" />
                    </div>
                </div>
                <div className="h-full w-full flex flex-row justify-between items-end gap-4">
                    <div className="w-48 bg-container p-4 rounded-2xl flex flex-row items-center justify-between gap-4 drop-shadow-md cursor-pointer">
                        <h2 className="font-bold text-text text-2xl text-right"> Next workout </h2>
                        <TbPlayerSkipForwardFilled size={40} color="var(--icon)" />
                    </div>
                    <div className="w-48 bg-container p-4 rounded-2xl flex flex-row items-center justify-between gap-4 drop-shadow-md cursor-pointer">
                        <h2 className="font-bold text-text text-2xl text-right"> End Session </h2>
                        <FaStop size={40} color="var(--icon)" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workout;
