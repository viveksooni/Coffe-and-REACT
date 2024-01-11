import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("olive");
  const [hColor, setHColor] = useState('white');
  return (
    <div
      className="h-screen w-full duration-1000"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center top-52 inset-x-0 px-2 duration-1000" style={{color:hColor, fontFamily:"cursive", fontSize:"30px"}}>Hi, This is Bg Color Changer</div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            type="button"
            className='className="outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => {setBgColor("red");
            setHColor("white")}}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            type="button"
            className='className="outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => {setBgColor("white");
          setHColor("black")}}
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            type="button"
            className='className="outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => {setBgColor("black");
            setHColor("white")}}
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            type="button"
            className='className="outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => {setBgColor("pink");
            setHColor("white")}}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            type="button"
            className='className="outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => {setBgColor("yellow");
            setHColor("black")}}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            type="button"
            className='className="outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => {setBgColor("purple");
            setHColor("white")}}
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            type="button"
            className='className="outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => {setBgColor("blue");
            setHColor("white")}}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
