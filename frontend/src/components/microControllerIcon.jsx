import React from 'react';
import microcontroller from '../assets/microcontroller.png';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const MicroControllerIcon = ({ status }) => {
    return(
        <div className="relative">
            <img src={microcontroller} alt="Microcontroller icon" />
            {
                status ?
                <FaCheckCircle size={40} color="#60BB68" className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" /> : 
                <FaCircleXmark size={40} color="#ff0028" className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            }
        </div>
    );
}

export default MicroControllerIcon;