import React from 'react'

const Button = ({Clear,Download,clearDraw,download}) => {
  return (
    <div>
      <div className="relative">
        <div className="absolute left-0 top-5 text-lg">
          <button onClick={clearDraw}>{Clear}</button>
        </div>
        <div  className="absolute  right-0 top-5 text-lg">
          <button onClick={download}>{Download}</button>
        </div>
        
      </div>
    </div>
  )
}

export default Button

