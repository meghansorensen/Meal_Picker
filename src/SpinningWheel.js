import React, { useState, useEffect } from 'react';
import './SpinningWheel.css'; 

const SpinningWheel = () => {
  const restaurants = [
    'Taco Bell',
    'Subway',
    'Jimmy Johns',
    'El Toro',
    'Jersey Mikes',
    'Hot Head',
    'BD Montgolian BBQ',
    'Condados',
    'Buffalo Wild Wings',
    'Troni Brothers',
    'Pies and Pints',
    'Potbellys',
    'Tokyo Sushi and Grill',
    'Panda Express',
    'Firehouse Subs',
    'Outback Steakhouse',
    'Cheddars',
    'Chick-fil-a',
    'Steak and Shake',
    'Freddys',
    'Hoshi Ramen',
    'Lihns Bistro'
  ];

  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState('');

  const spin = () => {
    setSpinning(true);
    setSelectedRestaurant('');
    
    const spinDuration = 3000; // Total spin time in milliseconds
    const interval = 100; // Time between each item change
    const cycles = spinDuration / interval;
    let count = 0;

    const spinInterval = setInterval(() => {
      setCurrentRestaurant(restaurants[count % restaurants.length]);
      count += 1;
    }, interval);

    setTimeout(() => {
      clearInterval(spinInterval);
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      setSelectedRestaurant(restaurants[randomIndex]);
      setSpinning(false);
    }, spinDuration);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={spin} style={{ padding: '10px 20px', fontSize: '16px' }} disabled={spinning}>
        {spinning ? 'Deciding...' : 'Spin to Decide'}
      </button>
      <div className="spinner-display">
        {spinning ? (
          <div className="current-restaurant">{currentRestaurant}</div>
        ) : (
          selectedRestaurant && <h2 className="winner">Tonight we eat: {selectedRestaurant}</h2>
        )}
      </div>
    </div>
  );
};

export default SpinningWheel;
