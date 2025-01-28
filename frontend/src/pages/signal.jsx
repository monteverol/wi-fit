import React, { useEffect, useRef, useState } from 'react';

const Signal = () => {
  const [amplitudes, setAmplitudes] = useState([]);
  const canvasRef = useRef(null);

  const fetchAmplitude = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/amplitude');
      const data = await response.json();
      setAmplitudes((prev) => {
        const updated = [...prev, data.amplitude];
        return updated.length > 100 ? updated.slice(1) : updated; // Keep the last 100 points (10 seconds at 100ms intervals)
      });
    } catch (error) {
      console.error('Error fetching amplitude:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchAmplitude, 100);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      ctx.beginPath();

      amplitudes.forEach((amp, index) => {
        const x = (canvas.width / 100) * index; // Scale x-axis for 100 points
        const y = canvas.height / 2 - amp * (canvas.height / 20); // Scale y-axis
        index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });

      ctx.strokeStyle = 'black';
      ctx.lineWidth = 5;
      ctx.stroke();
    }
  }, [amplitudes]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <canvas
        ref={canvasRef}
        width={1000}
        height={300}
        className="bg-white shadow-lg"
      ></canvas>
    </div>
  );
};

export default Signal;