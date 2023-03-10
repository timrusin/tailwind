import { useState } from "react";

function App() {
  const [Bcolor, setBcolor] = useState()
  const clg = (value, color) => {
    console.log(`${value} clicked`)
    setBcolor(color)
  }

  return (
    <div className={`flex text-center m-4 xs:text-sm sm:text-base lg:text-3xl xl:text-5xl ${Bcolor}`}>
        <h1 className="basis-1/2 m-2 order-1 border-2 bg-red-200 hover:bg-yellow-200 ease-in duration-200 border-green-400" onClick={() => clg("Hello","bg-red-600")}>
          Hello world!
        </h1>
        <h1 className="basis-1/3 m-2 order-3 border-2 bg-blue-200 hover:bg-yellow-200 ease-in duration-200 border-green-400" onClick={() => clg("Test", "bg-blue-200")}>
          test
        </h1>
        <h1 className="basis-1/3 m-2 order-2 border-2 bg-purple-200 hover:bg-yellow-200 ease-in duration-200 border-green-400" onClick={() => clg("Birds", "bg-purple-200")}>
          Birds
        </h1>
    </div>
  );
}

export default App;
