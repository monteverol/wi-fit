import React from 'react';
import DayTile from './dayTile';
import { getWeekDays } from '../utils/dateUtils';

const DateContainer = () => {
    const weekdays = getWeekDays();
    const today = new Date();

    return(
        <div className="col-span-3 w-full h-full rounded-3xl bg-white drop-shadow-lg flex flex-row">
            <div className="w-full h-full flex flex-row gap-4 p-4">
                {
                    weekdays.map((day, index) => (
                        <DayTile
                            key={index}
                            number={day.number}
                            day={day.day}
                            isActive={day.isActive}
                        />
                    ))
                }
            </div>
            <div className="w-80 h-full bg-container flex items-center justify-center rounded-3xl">
                <h2 className="font-bold text-4xl text-textDark"> 
                    {today.toLocaleString('default', { month: 'long' })}
                </h2>
            </div>
        </div>
    );
}

export default DateContainer;