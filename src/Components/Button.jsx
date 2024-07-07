import React, { useState } from 'react';

const Button = ({ Clear, Download, clearDraw, download, preview, showPreview, dataURL }) => {
  const [showModel, setShowModel] = useState(false);

  const handleClick = () => {
    showPreview();
    setShowModel(true);
  };

  const closeModal = () => {
    setShowModel(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-32 m-4">
      <div className="text-lg">
        <button onClick={clearDraw}>{Clear}</button>
      </div>
      <div className="text-lg">
        <button onClick={handleClick}>{preview}</button>
      </div>
      <div className="text-lg">
        <button onClick={download}>{Download}</button>
      </div>

      {showModel && dataURL && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="modal-content p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Signature Preview</h2>
            <div className="image-container">
              <img src={dataURL} alt="Signature Preview" className="signature-image" />
            </div>
            <div className="modal-actions mt-4">
              <button className=" text-gray-800 font-bold py-2 px-4 rounded mr-2" onClick={closeModal}>Close</button>
              <button className=" text-white font-bold py-2 px-4 rounded" onClick={download}>Download</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
