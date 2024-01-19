import { useState } from 'react'
import styles from './App.module.css'
import Buttons from './components/Buttons';
import Display from './components/Display';
function App() {
  const [expression, setExpression] = useState("")

  const clickButton=(e)=>{

    let key = e.target.childNodes[0].data;
    if(key==='=')
    {
      let result = eval(expression);
      setExpression(result);
    }
    else if(key=='C')
    {
      setExpression("");
    }
    else
    setExpression(expression+key);
  }
  return (
    <div className={styles.calculator}>
      <Display expression={expression}></Display>

     <Buttons clickButton={clickButton}></Buttons>
    </div>
  );
}

export default App
