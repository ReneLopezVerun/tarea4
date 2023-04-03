import React from 'react';
import styles from './pages.module.css';


const Pages = () => {
  const handleButtonClick = (num: number) => {
    console.log(`Button ${num} clicked!`);
  };

  return (
    <div className={styles.container}>
      {[1, 2, 3, 4].map(num => (
        <button
          key={num}
          className={styles.button}
          onClick={() => handleButtonClick(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pages;
