import React from 'react';
import Logo from '../components/logo';
import DayTile from '../components/dayTile';
import { getWeekDays } from '../utils/dateUtils';

function Dashboard() {
  const today = new Date();
  const weekDays = getWeekDays();

  return (
    <div className="bg-primaryBg h-screen w-screen flex flex-col justify-between p-16 gap-16">
      {/* UPPER */}
      <div className="w-full flex flex-row justify-between gap-8">
        {/* LEFT */}
        <div className="w-[80%] flex flex-col justify-between gap-16">
          {/* DATE */}
          <div className="w-full flex flex-row gap-16">
            {/* ICON */}
            <div className="w-auto bg-tertiaryBg rounded-3xl flex flex-row items-center gap-8">
              <Logo />
              <h3 className="mr-8 font-bold text-4xl">
                {today.toLocaleString('default', { month: 'long' })}
              </h3>
            </div>
            {/* DATE */}
            <div className="w-auto flex flex-row gap-8">
              {weekDays.map((day, index) => (
                <DayTile
                  key={index}
                  number={day.number}
                  day={day.day}
                  isActive={day.isActive}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-textDark font-bold text-6xl">Hello, γυμναζόμενος! Today's workout is ready, start?</h1>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-[20%]"></div>
      </div>

      {/* LOWER */}
      
    </div>
  );
}

export default Dashboard;