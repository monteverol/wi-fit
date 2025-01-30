import React, { useState } from 'react';
import microcontroller from '../../../assets/microcontroller.png';
import AvailableMicroControllerContainer from '../../../components/availableMCContainer';
import ConnectedMicroControllerContainer from '../../../components/connectedMCContainer';

const ConnectMicrocontroller = () => {
    const connected = ["ESP32 1 - Left", "ESP32 2 - Right"]
    const available = ["ESP32 1 - Left", "ESP32 2 - Right"]

    const [availableMicrocontroller, setAvailableMicrocontroller] = useState([...available]);
    const [connectedMicrocontroller, setConnectedMicrocontroller] = useState([...connected]);

    return(
        <div className="w-full h-full flex flex-col p-8 gap-8 overflow-y-scroll">
            <div className="flex flex-row gap-4 items-center">
                <img src={microcontroller} alt="microcontroller" className="h-[60%]" />
                <h1 className="font-bold text-2xl text-text"> Connect ESP32 Device </h1>
            </div>
            <ConnectedMicroControllerContainer 
                connectedMicrocontroller={connectedMicrocontroller} 
            />
            <AvailableMicroControllerContainer 
                availableMicrocontroller={availableMicrocontroller} 
            />
        </div>
    );
}

export default ConnectMicrocontroller;