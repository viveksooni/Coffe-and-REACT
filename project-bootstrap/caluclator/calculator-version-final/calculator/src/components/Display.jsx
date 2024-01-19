import React from 'react';
import styles from '../App.module.css'
function Display({expression})
{
    return (
      <>
        <input
          type="text"
          placeholder="Enter values"
          className={styles.inputDisplay}
          value={expression}
          readOnly
        />
      </>
    );
}

export default Display;