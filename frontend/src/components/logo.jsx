import React from 'react';
import wifit_icon from '../assets/Wi-FiT-icon.png';

export default function Logo() {
    return(
        <div className="bg-secondaryBg h-full py-4 px-8 rounded-3xl flex flex-row justify-between gap-4 items-center w-max drop-shadow-lg">
            <img src={wifit_icon} alt="Wi-FiT icon" className="2xl:h-[100%] xl:h-[90%] lg:h-[80%] md:h-[70%] sm:h-[60%]" />
            <h6 className="text-textAccent font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl whitespace-nowrap">Wi-FiT</h6>
        </div>
    );
}