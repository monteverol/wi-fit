import React from 'react';

const DayTile = ({ number, day, isActive }) => {
    return (
        <div className={`${isActive ? 'bg-buttonDark' : 'bg-secondaryBg'} cursor-pointer flex flex-col items-center justify-between w-28 py-4 gap-4 rounded-3xl`}>
            <h2 className={`${isActive ? 'text-textLight' : 'text-textDark'} font-bold text-6xl`}>{number}</h2>
            <h2 className={`${isActive ? 'text-textLight' : 'text-textDark'} text-4xl`}>{day}</h2>
        </div>
    );
}

export default DayTile;