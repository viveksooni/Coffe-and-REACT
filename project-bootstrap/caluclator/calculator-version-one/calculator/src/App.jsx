import { useState } from 'react'
import styles from './App.module.css'
import Buttons from './components/Buttons';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.calculator}>
      <input
        type="text"
        placeholder="Enter values"
        className={styles.inputDisplay}
      />

     <Buttons></Buttons>
    </div>
  );
}

export default App
