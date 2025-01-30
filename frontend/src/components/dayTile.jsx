import React from 'react';

const DayTile = ({ number, day, isActive }) => {
    return (
        <div className={`${isActive ? 'bg-dayActive' : 'bg-day'} cursor-pointer flex flex-col items-center justify-center w-28 py-4 gap-4 rounded-3xl drop-shadow-md`}>
            <h2 className={`${isActive ? 'text-white' : 'text-textDark'} font-bold text-4xl`}>{number}</h2>
            <h2 className={`${isActive ? 'text-white' : 'text-textDark'} text-xl`}>{day}</h2>
        </div>
    );
}

export default DayTile;