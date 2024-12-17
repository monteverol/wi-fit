import React from 'react';

const DayTile = ({ number, day, isActive }) => {
    return (
        <div className={`${isActive ? 'bg-buttonDark' : 'bg-secondaryBg'} cursor-pointer flex flex-col items-center justify-between 2xl:w-32 xl:w-28 lg:w-24 md:w-20 sm:w-16 py-4 gap-4 rounded-3xl drop-shadow-lg`}>
            <h2 className={`${isActive ? 'text-textLight' : 'text-textDark'} font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl`}>{number}</h2>
            <h2 className={`${isActive ? 'text-textLight' : 'text-textDark'} 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg`}>{day}</h2>
        </div>
    );
}

export default DayTile;