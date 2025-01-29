import React from 'react';
import BigExerciseTile from './bigExerciseTile';

const CalibrateExerciseContainer = () => {
    return(
        <div className="h-full w-full bg-white rounded-3xl drop-shadow-lg flex flex-col gap-4 p-8 overflow-hidden">
            <h4 className="font-bold text-2xl text-textLight"> Calibrate these workouts to unlock in your routine </h4>
            <div className="h-full w-full overflow-y-scroll flex flex-col gap-4">
                <BigExerciseTile exercise="push up" />
                <BigExerciseTile exercise="jog in place" />
                <BigExerciseTile exercise="squats" />
                <BigExerciseTile exercise="jumping jacks" />
                <BigExerciseTile exercise="lunges" />
                <BigExerciseTile exercise="jumping jacks" />
            </div>
        </div>
    );
}

export default CalibrateExerciseContainer;