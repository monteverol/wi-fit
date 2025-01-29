import React from 'react';
import jogInPlace from '../assets/exercises/jogInPlace.png';
import jumpingJacks from '../assets/exercises/jumpingJacks.png';
import lunges from '../assets/exercises/lunges.png';
import pushUp from '../assets/exercises/pushUp.png';
import squats from '../assets/exercises/squats.png';

const BigExerciseTile = ({ exercise }) => {
    const exerciseIcons = {
        'Jog In Place': jogInPlace,
        'Jumping Jacks': jumpingJacks,
        'Lunges': lunges,
        'Push Up': pushUp,
        'Squats': squats,
    };

    const capitalizeExercise = (exercise) => {
        return exercise
            .split(' ')
            .map(word => word[0].toUpperCase() + word.substr(1))
            .join(' ');
    };

    const formattedExercise = capitalizeExercise(exercise);
    const icon = exerciseIcons[formattedExercise];
    
    return(
        <div className="bg-container px-8 w-full min-h-20 flex flex-row justify-between items-center rounded-2xl drop-shadow-md">
            <h2 className="font-bold text-2xl text-textLight"> {formattedExercise} </h2>
            {icon ? (
                <img src={icon} alt={`${formattedExercise} icon`} className="h-12" />
            ) : (
                <p>Icon not found</p>
            )}
        </div>
    );
}

export default BigExerciseTile;