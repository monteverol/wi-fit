import React from 'react';
import { FaRegClock } from "react-icons/fa6";
import ExerciseTile from './exerciseTile';
import WorkoutExerciseTile from './workoutExerciseTile';
import { FaPlay } from "react-icons/fa";

const WorkoutTile = ({ description }) => {
    return(
        <div className="bg-[#E4E4E4] w-full flex flex-row rounded-2xl">
            {/* LEFT SIDE */}
            <div className="w-[90%] flex flex-col rounded-2xl bg-tileBg justify-between p-4 gap-4">
                {/* DESCRIPTION AND TIME */}
                <div className="w-[100%] flex flex-row justify-between items-center">
                    <h2 className="text-textAccent text-2xl font-bold">
                        {description}
                    </h2>
                    <div className="flex flex-row gap-8 items-center">
                        <h2 className="text-textAccent text-xl">10:30 Tue, Wed, Thu</h2>
                        <FaRegClock size={40} color="#000000" />
                    </div>
                </div>
                {/* WORKOUTS */}
                <div className="w-full flex flex-row overflow-x-scroll gap-4 items-center">
                    <WorkoutExerciseTile exercise="push up" />
                    <WorkoutExerciseTile exercise="squats" />
                    <WorkoutExerciseTile exercise="jumping jacks" />
                    <WorkoutExerciseTile exercise="lunges" />
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="w-[10%] flex flex-col gap-4 items-center justify-center">
                <div className="px-6 py-2 bg-[#B9B9B9] rounded-xl cursor-pointer">
                    <h3 className="font-bold">...</h3>
                </div>
                <div className="p-4 bg-[#FFFFFF] rounded-xl cursor-pointer">
                    <FaPlay size={26} color="#B9B9B9" />
                </div>
            </div>
        </div>
    );
}

export default WorkoutTile;