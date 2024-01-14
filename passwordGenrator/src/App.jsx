import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [length, setLength] = useState(5);

  const passwordRef = useRef(null);

  const copyClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  const genratePassword = useCallback(() => {
    let pass = "";

    let str = "abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXZY";
    if (characterAllowed) {
      str += "!@#$%^&*()_+~{}|[]<>?:;";
    }
    if (numberAllowed) {
      str += "1234567890";
    }

    for (let i = 0; i < length; i++) {
      let idx = Math.random() * str.length + 1;
      pass += str.charAt(idx);
    }
    setPassword(pass);
  }, [length, characterAllowed, numberAllowed, setPassword]);

  useEffect(() => {
    genratePassword();
  }, [length, characterAllowed, numberAllowed, setPassword]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Genrator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input
          type="text"
          placeholder="password"
          value={password}
          className="outline-none w-full py-1 px-3"
          ref= {passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={copyClipBoard}>
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            value={length}
            min={5}
            max={20}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label>length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1"></div>
        <input
          type="checkbox"
          className="flex items-center gap-x-1"
          defaultChecked={characterAllowed}
          id="characterInput"
          onClick={() => {
            setCharacterAllowed((prev) => !prev);
          }}
        />

        <label>character</label>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="flex items-center gap-x-1"
            onClick={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />

          <label>numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
