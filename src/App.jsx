import { useState, useRef, useEffect } from "react";
import "./App.css?v=1.0";
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
      <h1 className="font-bold m-9 p-4  text-center text-white">
      E-Signature
      </h1>
      <Input backgroundcolor={backgroundcolor} drawcolor={drawcolor} />
      <div
  style={{ maxWidth: '500px', height: '300px', backgroundColor: `${bgcolor}` }}
  className="border-2 rounded-3xl my-2 mydiv mx-auto"
>

        <SignatureCanvas ref={sigCanvas}
          penColor={pencolor}
          canvasProps={{ width: 500, height: 300 }}
          style={{ width: 'fit-content', height: 'fit-content' }}
        />
      <Button Clear="Clear" Download="Download" preview="Preview" showPreview={showPreview} dataURL={signatureURL}
        clearDraw={clearDraw} download={downloadSignature} />

      </div>

    </>
  );
}

export default App;
