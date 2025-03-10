import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState(" ");

  const passwordRef = useRef(null)

  const generatPasswoed = useCallback(()=>{
      let pass = " ";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str+="1234567890";
      if(charAllowed) str+="!@#$%^&*()_+"

      for(let i=1; i<length;i++){
       const char =  Math.floor(Math.random()*str.length+1) //it's like index
       pass += str.charAt(char)
      }
      setpassword(pass)
  },[length,numberAllowed,charAllowed]);

  useEffect(()=>{
    generatPasswoed()
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4)
    // alert("copied password!!")
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3"> Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white placeholder-gray-500"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={100}
              value={length}
              className="curson"
              onChange={(e) => setlength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumbersAllowed((prev) => !prev)}
            />
            <label htmlFor="number">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">CharInput</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
