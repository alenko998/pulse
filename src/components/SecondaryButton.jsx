import React from 'react';

const SecondaryButton = ({ text }) => {
  return (
    <button
      type="button"
      className="text-sm font-semibold leading-6 text-blue-500 underline"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
