import React from 'react';

const DetectedMicrocontroller = ({ name }) => {
    return(
        <div className="w-full flex flex-row justify-between items-center border-b-4 border-border p-4">
            <h3 className="font-bold text-2xl text-text"> {name} </h3>
            <button
                className="px-8 py-2 font-bold text-2xl text-connection border-connection border-4 rounded-full"
            >
                Connect
            </button>
        </div>
    );
}

export default DetectedMicrocontroller;