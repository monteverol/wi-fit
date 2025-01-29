import React from 'react';
import WelcomeContainer from '../../components/welcomeContainer';
import DateContainer from '../../components/dateContainer';
import CalibrateExerciseContainer from '../../components/calibrateExerciseContainer';

const Home = ({ username }) => {
    return (
        <div className="h-full w-full grid grid-flow-row grid-rows-5 gap-8">
            <div className="w-full h-full grid grid-flow-col grid-cols-4 gap-8">
                <WelcomeContainer username={username} />
                <DateContainer />
            </div>
            <div className="w-full h-full row-span-4 pt-8 grid grid-flow-col grid-cols-4 gap-8">
                <CalibrateExerciseContainer />
            </div>
        </div>
    );
}

export default Home;
