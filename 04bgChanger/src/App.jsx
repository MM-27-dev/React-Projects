import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  // function changeColor(color){
  //   return setColor(color)
  // }

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center items-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg text-black"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Test1
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg text-black"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Test2
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg text-black"
            onClick={()=> setColor("orange")}
            style={{backgroundColor: "orange"}}
          >
            Test2
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
