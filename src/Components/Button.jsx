import React, { useState } from 'react'

const Button = ({Clear,Download,clearDraw,download,preview,showPreview,dataURL}) => {
  const [showmodel,setShowmodel]=useState(false);
  const handleClick=()=>{
    showPreview();
    setShowmodel(true);
  }

  const closeModal=()=>{
    setShowmodel(false)
  }
  return (
    <div>
      <div className='flex justify-center items-center gap-32 m-4'>
        <div className="  text-lg">
          <button onClick={clearDraw}>{Clear}</button>
        </div>
        <div  className="   text-lg">
          <button onClick={handleClick}>{preview}</button>
        </div>
        <div  className=" text-lg">
          <button onClick={download}>{Download}</button>
        </div>

        {showmodel && dataURL && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Signature Preview</h2>
            <div className="image-container">
              <img src={dataURL} alt="Signature Preview" className="signature-image" />
            </div>
            <div className="modal-actions">
              <button onClick={closeModal}>Close</button>
              <button onClick={download}>Download</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Button

