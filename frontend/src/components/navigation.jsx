import React from 'react';
import { IoBarbell } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

const Navigation = ({ activePage, setActivePage }) => {
    const pages = ["Workout", "Home", "Settings"];

    const isActive = (page) => {
        return activePage == page
    }

    return(
        <div className="p-4 rounded-full bg-white flex flex-row gap-4 drop-shadow-lg">
            {/* WORKOUT */}
            <div 
                className={`${isActive(pages[0]) ? 'bg-[#DADADA]' : null} px-8 py-4 flex flex-row gap-4 items-center justify-between cursor-pointer rounded-full hover:bg-[#DADADA]`}
                onClick={() => setActivePage(pages[0])}
            >
                <IoBarbell size={40} color="var(--icon)" />
                <h3 className="font-bold text-2xl text-text"> Workout </h3>
            </div>
            {/* HOME */}
            <div 
                className={`${isActive(pages[1]) ? 'bg-[#DADADA]' : null} px-8 py-4 flex flex-row gap-4 items-center justify-between cursor-pointer rounded-full hover:bg-[#DADADA]`}
                onClick={() => setActivePage(pages[1])}
            >
                <GoHomeFill size={40} color="var(--icon)" />
                <h3 className="font-bold text-2xl text-text"> Home </h3>
            </div>
            {/* SETTINGS */}
            <div 
                className={`${isActive(pages[2]) ? 'bg-[#DADADA]' : null} px-8 py-4 flex flex-row gap-4 items-center justify-between cursor-pointer rounded-full hover:bg-[#DADADA]`}
                onClick={() => setActivePage(pages[2])}
            >
                <IoMdSettings size={40} color="var(--icon)" />
                <h3 className="font-bold text-2xl text-text"> Settings </h3>
            </div>
        </div>
    );
}

export default Navigation;