import React from 'react';
import microcontroller from '../assets/microcontroller.png';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export const MicroController = ({ status, hide }) => {
    return(
        <div className={`${hide ? 'invisible' : 'visible'} px-4 py-2 rounded-3xl drop-shadow-lg bg-white flex flex-row gap-4 w-60`}>
            <h3 className="font-bold text-xl text-text">ESP32's Status</h3>
            <MicroControllerIcon status={status} />
        </div>
    );
}

const MicroControllerIcon = ({ status }) => {
    return(
        <div className="relative flex flex-row items-center gap-4">
            <img src={microcontroller} alt="Microcontroller icon" className="w-[60%]" />
            {
                status ?
                <FaCheckCircle size={20} color="#60BB68" className="absolute bottom-2 right-6 translate-x-1/2 translate-y-1/2" /> : 
                <FaCircleXmark size={20} color="#ff0028" className="absolute bottom-2 right-6 translate-x-1/2 translate-y-1/2" />
            }
        </div>
    );
}

export default MicroController;