import React from 'react';
import wifit_icon from '../assets/Wi-FiT-icon.png';

export default function Logo({ isDark }) {
    return(
        <div className={`${isDark ? 'bg-logoDark' : 'bg-logoLight'} h-full py-4 px-8 rounded-3xl flex flex-row justify-between gap-8 items-center w-max drop-shadow-lg`}>
            <img src={wifit_icon} alt="Wi-FiT icon" className="h-[70%]" />
            <h6 className={`${isDark ? 'text-textLight' : 'text-textAccent'} font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl whitespace-nowrap`}>Wi-FiT</h6>
        </div>
    );
}