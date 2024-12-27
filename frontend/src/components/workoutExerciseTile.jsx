import React from 'react';
import jogInPlace from '../assets/exercises/jogInPlace.png';
import jumpingJacks from '../assets/exercises/jumpingJacks.png';
import lunges from '../assets/exercises/lunges.png';
import pushUp from '../assets/exercises/pushUp.png';
import squats from '../assets/exercises/squats.png';

const WorkoutExerciseTile = ({ exercise }) => {
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

    return(
        <div className="bg-[#B9B9B9] p-4 rounded-xl flex flex-row items-center justify-between w-48">
            <h3 className="font-bold text-xl">{formattedExercise}</h3>
            <img src={icon} alt={`${formattedExercise} icon`} className="h-12" />
        </div>
    );
}

export default WorkoutExerciseTile;