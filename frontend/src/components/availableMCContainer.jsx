import React from 'react';
import { FaWifi } from "react-icons/fa6";
import DetectedMicrocontroller from './detectedMicrocontroller';

const AvailableMicroControllerContainer = ({ availableMicrocontroller }) => {
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center">
                <FaWifi size={40} color="var(--connect)" />
                <h2 className="text-2xl text-connect font-bold"> Available Network Devices: </h2>
            </div>
            <div className="h-auto w-full border-4 border-border rounded-3xl p-4 flex flex-col gap-4">
                {
                    availableMicrocontroller.map((item, index) => (
                        <DetectedMicrocontroller key={index} name={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default AvailableMicroControllerContainer;