import { useState } from "react";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";
function App() {
  const [bgcolor, setBgcolor] = useState('black');
  // console.log(bgcolor);
  const[pencolor,setPencolor]=useState('white')
  return (
    <>
      <h1 className="font-bold m-9 p-4 border-b-2 text-center text-green-300  border-green-300">
        Sign here
      </h1>
      <div className="flex items-center gap-4 mb-4  relative ">
        <div className="flex items-center gap-2">
          <span>Bg-Color</span>
          <input
            type="color" onChange={(e)=>{setBgcolor(e.target.value)}} 
            className="w-8 h-8 p-0 border-none rounded-md shadow-sm cursor-pointer"
          />
        </div>
        <div className=" right-5 absolute flex items-center gap-2">
          <span>Pen-Color</span>
          <input
            type="color" onChange={(e)=>{setPencolor(e.target.value)}}
            className="w-8 h-8 p-0 border-none rounded-md shadow-sm cursor-pointer"
          />
        </div>
      </div>
      <div
        style={{ width: 700, height: 300 , backgroundColor:`${bgcolor}`}}
        className="border-2 rounded-xl"
      >
        <SignatureCanvas
          penColor={pencolor}
          canvasProps={{ width: 700, height: 300 }}
        />
      </div>
      <div className="relative">
        <div className="absolute left-0 top-5 text-lg">
          <button>Clear</button>
        </div>
        <div  className="absolute  right-0 top-5 text-lg">
          <button>Download</button>
        </div>
        
      </div>
    </>
  );
}

export default App;
