import React, { useState } from 'react';

export default function CivilianTrigger() {
  const [status, setStatus] = useState('idle');

  const triggerSOS = () => {
    setStatus('locating');
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Lat:", position.coords.latitude, "Lon:", position.coords.longitude);
          // Here: Send data to your backend via WebSocket
          setStatus('dispatched');
        },
        (error) => {
          console.error("Location error:", error);
          setStatus('error');
        }
      );
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold mb-8 tracking-wider">CIVILIAN PORTAL</h1>
      
      <button 
        onClick={triggerSOS}
        className={`w-64 h-64 rounded-full shadow-2xl text-4xl font-extrabold transition-all duration-300 ${
          status === 'idle' ? 'bg-red-600 hover:bg-red-500 animate-pulse' :
          status === 'locating' ? 'bg-yellow-500' :
          status === 'dispatched' ? 'bg-green-600' : 'bg-gray-600'
        }`}
      >
        {status === 'idle' && 'SOS'}
        {status === 'locating' && 'LOCATING...'}
        {status === 'dispatched' && 'HELP INBOUND'}
        {status === 'error' && 'ERROR'}
      </button>

      <p className="mt-8 text-slate-400 text-center max-w-md">
        Pressing this button will instantly securely transmit your coordinates to the central OmniGuard coordination grid.
      </p>
    </div>
  );
}
