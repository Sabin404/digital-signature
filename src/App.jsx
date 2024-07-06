import { useState, useRef, useEffect } from "react";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";
import Input from "./Components/Input";
import Button from "./Components/Button";

function App() {
  const [bgcolor, setBgcolor] = useState('black');
  // console.log(bgcolor);
  const [pencolor, setPencolor] = useState('white')
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
    console.log(sigCanvas);
  }

  const downloadSignature = () => {
    if (sigCanvas.current.isEmpty()) {
      alert('Please Signature :) ')
    } else {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'my-signature.png';
      link.href = dataURL;
      link.click();
      const image = document.getElementsByClassName('image');
      const img = document.createElement('img')
      img.src = dataURL;
      img.classList.add("realimage");
      image[0].appendChild(img);
      image[0].style.display = 'block';
      // localStorage.setItem('SignatureImage', dataURL)
      // console.log(dataURL);
    }
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
      <Button Clear="Clear" Download="Download" clearDraw={clearDraw} download={downloadSignature} />

      <div className="image text-center bg-black  p-4 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-white mb-2">Your Signatures:</p>
      </div>

    </>
  );
}

export default App;
