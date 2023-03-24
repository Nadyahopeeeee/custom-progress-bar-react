import * as React from 'react';
import { useEffect, useState } from 'react';

const ProgressBarReact = () => {
  const [completed, setCompleted] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (play && completed < 100) {
        setCompleted(completed + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [completed, play]);

  const toggleProgressBar = () => {
    setPlay(!play);
  };

  const containerStyles = {
    height: 20,
    width: '500px',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    marginTop: 20,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#2196f3',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  const btnStyles = {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#4caf50',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <main style={containerStyles}>
      <section style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </section>
      <section>
        <button style={btnStyles} onClick={() => toggleProgressBar()}>
          Start/Stop
        </button>
      </section>
    </main>
  );
};

export default ProgressBarReact;
