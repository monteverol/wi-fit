import React from 'react';

const DetectedMicrocontroller = ({ name }) => {
    return(
        <div className="w-full flex flex-row justify-between items-center border-b-4 border-border p-4">
            <h3 className="font-bold text-xl text-text"> {name} </h3>
            <button
                className="transition duration-200 w-40 py-2 font-bold text-xl text-connect border-connect border-4 rounded-full hover:bg-connect hover:text-white drop-shadow-md"
            >
                Connect
            </button>
        </div>
    );
}

export default DetectedMicrocontroller;