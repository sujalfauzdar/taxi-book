import React from 'react';

function Hero() {
    return (
        <div className='rounded-badge grid grid-cols-1 md:grid-cols-2 bg-black bg-cover max-w-800'>
            <div className="flex flex-col justify-center items-center text-center space-y-6">
            <h2 className="text-8xl font-extrabold bg-gradient-to-r from-red-100 via-red-600 to-red-900 text-transparent bg-clip-text" style={{ fontFamily: 'Montserrat, sans-serif' }}>
  Welcome to DriveGo
</h2>
<h2 className="text-2xl font-bold bg-gradient-to-r from-red-200 via-red-400 to-red-600 text-transparent bg-clip-text">
  Rent a car in town
</h2>
<button className="mt-6 px-6 py-3 text-lg font-bold text-black bg-red-800 rounded-lg shadow-lg 
                    border border-red-400 hover:bg-red-400 hover:shadow-red-500/50 
                    hover:scale-105 transition-all duration-300 animate-blink">
                    Explore Cars 
                </button>

            </div>
            <div>
            <img 
                src="/hero.jpg" 
                alt="hero"
                width={500}
                height={400} 
                className="w-[600px] h-auto object-cover rounded-xl shadow-lg hover:scale-90 transition-transform duration-300 ml-40"
/>

            </div>
        </div>
    );
};

export default Hero;