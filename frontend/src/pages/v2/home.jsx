import React from 'react';
import { getWeekDays } from '../../utils/dateUtils';
import WelcomeContainer from '../../components/welcomeContainer';
import DayTile from '../../components/dayTile';

const Home = ({ username }) => {
    const weekdays = getWeekDays();

    return (
        <div className="h-full w-full grid grid-flow-row grid-rows-5 gap-8">
            <div className="w-full h-full grid grid-flow-col grid-cols-4 gap-8">
                <WelcomeContainer username={username} />
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
                        <h2 className="font-bold text-4xl text-textDark"> January </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
