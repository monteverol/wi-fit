import React from 'react';
import microcontroller from '../../../assets/microcontroller.png';
import DetectedMicrocontroller from '../../../components/detectedMicrocontroller';
import { FaWifi } from "react-icons/fa6";

const ConnectMicrocontroller = () => {
    return(
        <div className="w-full h-full flex flex-col p-8 gap-8">
            <div className="flex flex-row gap-4 items-center">
                <img src={microcontroller} alt="microcontroller" />
                <h1 className="font-bold text-4xl text-text"> Connect ESP32 Device </h1>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <FaWifi size={40} color="var(--connection)" />
                <h2 className="text-2xl text-connection"> Available Network Devices: </h2>
            </div>
            <div className="h-full w-full border-4 border-border rounded-3xl p-4 flex flex-col gap-4">
                <DetectedMicrocontroller name="ESP 32 - 1 Left" />
                <DetectedMicrocontroller name="ESP 32 - 1 Right" />
            </div>
        </div>
    );
}

export default ConnectMicrocontroller;