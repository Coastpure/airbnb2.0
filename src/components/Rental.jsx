import React from 'react'

const Rental = ({title, image, price}) => {
  return (
    <div className='relative'>
      <div className="grad absolute w-full h-full"></div>
        <div className="flex">
          <div className=""></div>
            <img src = {image} alt="" 
                className='object-cover rounded-[1.3rem]'/>
            <div className="absolute text-white font-bold bottom-0">{title}</div>
        </div>
    </div>
  )
}

export default Rental