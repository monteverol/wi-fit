import React from 'react';
import wifit_icon from '../assets/Wi-FiT-icon.png';

export default function Logo() {
    return(
        <div className="bg-secondaryBg h-full py-4 px-8 rounded-3xl flex flex-row justify-between gap-8 items-center">
            <img src={wifit_icon} alt="Wi-FiT icon" />
            <h6 className="text-textAccent font-bold text-7xl">Wi-FiT</h6>
        </div>
    );
}