import React from 'react';
import person_squat from '../../assets/exercises/person_squat.png';

const Workout = () => {
    return (
        <div className="h-full w-full grid grid-flow-col grid-cols-4 gap-8">
            <div className="relative col-span-3 h-full w-full rounded-3xl p-8 bg-white drop-shadow-lg">
                {/* IMAGE */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden vignette">
                    <img src={person_squat} alt="person squatting" className="w-full rounded-3xl" />
                </div>

                {/* REPITIONS */}
                <div className="absolute top-12 right-12 px-8 py-4 flex flex-col justify-between items-center rounded-2xl bg-white bg-opacity-80 drop-shadow-md gap-2">
                    <h2 className="font-bold text-2xl text-textLight"> Repitions: </h2>
                    <h2 className="font-bold text-4xl text-textDark"> 5 / 9 </h2>
                </div>
            </div>
        </div>
    );
}

export default Workout;
