import React from 'react';
import { FaWifi } from "react-icons/fa6";
import ConnectedMicrocontroller from './connectedMicrocontroller';

const ConnectedMicroControllerContainer = ({ connectedMicrocontroller }) => {
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center">
                <FaWifi size={40} color="var(--connect)" />
                <h2 className="text-2xl text-connect font-bold"> Connected Device: </h2>
            </div>
            <div className="h-auto w-full border-4 border-border rounded-3xl p-4 flex flex-col gap-4">
                {
                    connectedMicrocontroller[0].map((item) => (
                        <ConnectedMicrocontroller key={item.id} name={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default ConnectedMicroControllerContainer;