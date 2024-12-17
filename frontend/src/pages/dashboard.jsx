import React from 'react';
import Logo from '../components/logo';
import DayTile from '../components/dayTile';
import { getWeekDays } from '../utils/dateUtils';
import running from '../assets/exercises/running.png';
import microcontroller from '../assets/microcontroller.png';
import settings from '../assets/settings.png';
import MicroControllerIcon from '../components/microControllerIcon';

function Dashboard() {
  const today = new Date();
  const weekDays = getWeekDays();

  return (
    <div className="bg-primaryBg h-screen w-screen flex flex-col justify-between p-8 gap-8">
      {/* UPPER */}
      <div className="w-full flex flex-row justify-between gap-16">
        {/* LEFT */}
        <div className="w-[70%] flex flex-col justify-between gap-16">
          {/* DATE */}
          <div className="w-full flex sm:flex-col 2xl:flex-row 2xl:gap-8 xl:gap-6 lg:gap-4 md:gap-2">
            {/* ICON */}
            <div className="bg-tertiaryBg rounded-3xl flex flex-row items-center gap-4 drop-shadow-lg">
              <Logo />
              <div className="w-auto flex items-center justify-center mr-8">
                <h3 className="font-bold 2xl:text-3xl lg:text-5xl sm:text-2xl">
                  {today.toLocaleString('default', { month: 'long' })}
                </h3>
              </div>
            </div>
            {/* DATE */}
            <div className="w-full flex flex-row 2xl:gap-8 xl:gap-6 lg:gap-4 md:gap-2 justify-between">
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
          <div className="flex-row justify-between items-center sm:hidden 2xl:flex">
            <h1 className="text-textDark font-bold text-6xl">Hello, Mark! Today's workout is ready, <span className="text-[#646464]">start</span>?</h1>
            <img src={running} alt="Just a running icon" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-[25%] flex flex-col bg-tertiaryBg rounded-3xl drop-shadow-lg">
          {/* UPPER */}
          <div className="flex flex-row justify-between items-center bg-secondaryBg p-4 rounded-3xl drop-shadow-lg">
              <h3 className="2xl:text-4xl lg:text-3xl sm:text-2xl  font-bold w-[33%]">ESP32's Status</h3>
              <MicroControllerIcon status={false} />
              <div className="p-4 bg-tertiaryBg rounded-2xl cursor-pointer">
                <img src={settings} alt="Settings Icon" />
              </div>
          </div>
          {/* LOWER */}
          <div className="h-full flex items-center justify-center">
            <h3 className="font-bold 2xl:text-4xl lg:text-3xl sm:text-2xl italic text-textAccentLight text-center">Recalibrate Device?</h3>
          </div>
        </div>
      </div>

      {/* LOWER */}
      <div className="flex flex-row gap-8">
          {/* LEFT */}

          {/* RIGHT */}
          
      </div>
    </div>
  );
}

export default Dashboard;