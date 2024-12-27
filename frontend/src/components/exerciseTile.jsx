import React from 'react';
import jogInPlace from '../assets/exercises/jogInPlace.png';
import jumpingJacks from '../assets/exercises/jumpingJacks.png';
import lunges from '../assets/exercises/lunges.png';
import pushUp from '../assets/exercises/pushUp.png';
import squats from '../assets/exercises/squats.png';

const ExerciseTile = ({ exercise, width }) => {
    // Map exercise names to their corresponding image imports
    const exerciseIcons = {
        'Jog In Place': jogInPlace,
        'Jumping Jacks': jumpingJacks,
        'Lunges': lunges,
        'Push Up': pushUp,
        'Squats': squats,
    };

    // Capitalize the exercise name to match keys in the map
    const capitalizeExercise = (exercise) => {
        return exercise
            .split(' ')
            .map(word => word[0].toUpperCase() + word.substr(1))
            .join(' ');
    };

    const formattedExercise = capitalizeExercise(exercise);
    const icon = exerciseIcons[formattedExercise]; // Retrieve the correct image

    const widthSize = `w-[${width}%]`;

    return (
        <div className={`${widthSize} h-40 flex flex-row justify-between items-center bg-tileBg py-4 2xl:px-16 lg:px-8 sm:px-4 rounded-2xl`}>
            <h2 className="font-bold 2xl:text-4xl lg:text-2xl sm:text-xl text-textDark">{formattedExercise}</h2>
            {icon ? (
                <img src={icon} alt={`${formattedExercise} icon`} />
            ) : (
                <p>Icon not found</p>
            )}
        </div>
    );
};

export default ExerciseTile;