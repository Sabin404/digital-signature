import { useState ,useRef} from "react";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";
import Input from "./Components/Input";
import Button from "./Components/Button";

function App() {
  const [bgcolor, setBgcolor] = useState('black');
  // console.log(bgcolor);
  const [pencolor, setPencolor] = useState('white')
  const sigCanvas=useRef()

  const backgroundcolor = (e) => {
    setBgcolor(e.target.value);
  }

  const drawcolor = (e) => {
    setPencolor(e.target.value)
  }

  const clearDraw=()=>{
    sigCanvas.current.clear();
  }

  const downloadSignature=()=>{
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'my-signature.png';
    link.href = dataURL;
    link.click();
  }
  return (
    <>
      <h1 className="font-bold m-9 p-4 border-b-2 text-center text-green-300  border-green-300">
        Sign here
      </h1>
      <Input backgroundcolor={backgroundcolor} drawcolor={drawcolor} />
      <div
        style={{ width: 600, height: 300, backgroundColor: `${bgcolor}` }}
        className="border-2 rounded-xlr"
      >
        <SignatureCanvas ref={sigCanvas}
          penColor={pencolor}
          canvasProps={{ width: 600, height: 300 }}
        />
      </div>
      <Button Clear="Clear" Download="Download" clearDraw={clearDraw} download={downloadSignature}/>
    </>
  );
}

export default App;
