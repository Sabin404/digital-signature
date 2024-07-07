import React from 'react';

const Input = ({ backgroundcolor, drawcolor }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-4 relative">
      <div className="flex items-center gap-2">
        <span className=" md:inline">Bg-Color</span> 
        <input
          type="color"
          onChange={backgroundcolor}
          className="w-8 h-8 p-0 border-none rounded-md shadow-sm cursor-pointer"
        />
      </div>
      <div className="md:absolute right-0  flex items-center gap-2">
        <span className=" md:inline">Pen-Color</span> 
        <input
          type="color"
          defaultValue="#ffffff"
          onChange={drawcolor}
          className="w-8 h-8 p-0 border-none rounded-md shadow-sm cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Input;
