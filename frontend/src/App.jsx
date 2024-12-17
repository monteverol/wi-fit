import React from 'react';
import './App.css'
import wifit_icon from './assets/Wi-FiT-icon.png';

function App() {
  return (
    <div className="bg-primaryBg h-screen w-screen flex flex-col justify-between p-8 gap-8">
      {/* UPPER */}
      <div className="w-full flex flex-row justify-between gap-8">
        {/* LEFT */}
        <div className="w-[80%] flex flex-col justify-between">
          {/* DATE */}
          <div className="w-full flex flex-row gap-8 justify-between">
            {/* ICON */}
            <div className="bg-secondaryBg py-4 px-8 rounded-2xl flex flex-row justify-between gap-8 items-center">
              <img src={wifit_icon} alt="Wi-FiT icon" />
              <h6 className="text-textDark font-bold text-7xl">Wi-FiT</h6>
            </div>
            {/* DATE */}

          </div>
          {/* GREET */}

        </div>
        {/* RIGHT */}
        <div className="w-[20%]">

        </div>
      </div>
      {/* LOWER */}

    </div>
  )
}

export default App
