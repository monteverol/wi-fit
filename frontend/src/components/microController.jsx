import React from 'react';
import microcontroller from '../assets/microcontroller.png';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export const MicroController = ({ status }) => {
    return(
        <div className="px-8 py-4 rounded-3xl drop-shadow-lg bg-white flex flex-row gap-4 w-60">
            <h3 className="font-bold text-2xl text-text">ESP32's Status</h3>
            <MicroControllerIcon status={status} />
        </div>
    );
}

const MicroControllerIcon = ({ status }) => {
    return(
        <div className="relative flex flex-row items-center gap-4">
            <img src={microcontroller} alt="Microcontroller icon" className="w-[80%]" />
            {
                status ?
                <FaCheckCircle size={30} color="#60BB68" className="absolute bottom-4 right-2 translate-x-1/2 translate-y-1/2" /> : 
                <FaCircleXmark size={30} color="#ff0028" className="absolute bottom-4 right-2 translate-x-1/2 translate-y-1/2" />
            }
        </div>
    );
}

export default MicroController;