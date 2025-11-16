import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
