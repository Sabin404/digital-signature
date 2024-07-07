import { useState, useRef, useEffect } from "react";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";
import Input from "./Components/Input";
import Button from "./Components/Button";

function App() {
  const [bgcolor, setBgcolor] = useState('black');
  // console.log(bgcolor);
  const [pencolor, setPencolor] = useState('white')
  const [signatureURL,setSignatureURL]=useState();
  const sigCanvas = useRef()
  const backgroundcolor = (e) => {
    setBgcolor(e.target.value);
  }

  const drawcolor = (e) => {
    setPencolor(e.target.value)
  }

  const clearDraw = () => {
    sigCanvas.current.clear();
    const imageDiv = document.getElementsByClassName('image');
    imageDiv[0].style.display = 'none';
    // localStorage.clear()
    // imageDiv.remove();
    // console.log(sigCanvas);
  }

  const showPreview = () => {
    if (sigCanvas.current.isEmpty()) {
      alert('Please signature first :)')
    } else {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      const image = document.getElementsByClassName('image');
      setSignatureURL(dataURL);
    }
  }
  const downloadSignature = () => {
    if (!sigCanvas.current || sigCanvas.current.isEmpty()) {
      alert('Please Signature :) ')
      return;
    } else {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'my-signature.png';
      link.href = dataURL;
      link.click();
      // localStorage.setItem('SignatureImage', dataURL)
      // console.log(dataURL);
    }
  }
  return (
    <>
      <h1 className="font-bold m-9 p-4 border-b-2 text-center text-white  border-white-300">
        Sign here
      </h1>
      <Input backgroundcolor={backgroundcolor} drawcolor={drawcolor} />
      <div
        style={{ width: 600, height: 300, backgroundColor: `${bgcolor}` }}
        className="border-2 rounded-3xl my-2  mydiv  "
      >
        <SignatureCanvas ref={sigCanvas}
          penColor={pencolor}
          canvasProps={{ width: 600, height: 300 }}
        />
      <Button Clear="Clear" Download="Download" preview="Preview" showPreview={showPreview} dataURL={signatureURL}
        clearDraw={clearDraw} download={downloadSignature} />

      </div>

    </>
  );
}

export default App;
