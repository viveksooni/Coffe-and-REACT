import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Heading from "./components/Heading";
import Details from "./components/Details";
import Clock from "./components/Clock"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading />
      <Details />
      <Clock/>
    </>
  );
}

export default App;
