import React, { useState } from 'react';

const ErrorButtonComponent = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error('I crashed!');
  }

  return (
    <button
      style={{ width: '48px' }}
      onClick={() => {
        setError(true);
      }}
    >
      break things
    </button>
  );
};

export default ErrorButtonComponent;
