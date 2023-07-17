import React from 'react';

const NumberSquares = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex">
      {numbers.map((number) => (
        <div
          key={number}
          className="w-14 h-14 border border-black bg-white flex items-center justify-center rounded mr-1"
        >
          <span className="text-black font-bold text-lg">{number}</span>
        </div>
      ))}
    </div>
  );
};

export default NumberSquares;
