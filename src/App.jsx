import { useState } from "react";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";
import Input from "./Components/Input";

function App() {
  const [bgcolor, setBgcolor] = useState('black');
  // console.log(bgcolor);
  const[pencolor,setPencolor]=useState('white')

  const backgroundcolor=(e)=>{
    setBgcolor(e.target.value);
  }

  const drawcolor=(e)=>{
    setPencolor(e.target.value)
  }
  return (
    <>
      <h1 className="font-bold m-9 p-4 border-b-2 text-center text-green-300  border-green-300">
        Sign here
      </h1>
      <Input backgroundcolor={backgroundcolor} drawcolor={drawcolor}/>
      <div
        style={{ width: 600, height: 300 , backgroundColor:`${bgcolor}`}}
        className="border-2 rounded-xlr" 
      >
        <SignatureCanvas
          penColor={pencolor}
          canvasProps={{ width: 600, height: 300 }}
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
