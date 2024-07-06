import React from 'react'

const Input = ({backgroundcolor,drawcolor}) => {
  
  return (
    <div>
      <div className="flex items-center gap-4 mb-4  relative ">
        <div className="flex items-center gap-2">
          <span>Bg-Color</span>
          <input
            type="color" onChange={backgroundcolor}
            className="w-8 h-8 p-0 border-none rounded-md shadow-sm cursor-pointer"
          />
        </div>
        <div className=" right-5 absolute flex items-center gap-2">
          <span>Pen-Color</span>
          <input
            type="color" defaultValue="#ffffff" onChange={drawcolor}
            className="w-8 h-8 p-0 border-none rounded-md shadow-sm cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Input
