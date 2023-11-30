import React from 'react'

const Filter = ({title, icon}) => {
  return (
    <div>
        <div className="flex items-center text-white bg-[#ff385c] hover:bg-black hover:text-[#ff385c] hover:font-bold duration-200 ease-out cursor-pointer gap-2 py-1 px-3 sm:px-4 rounded-full text-[13px] sm:text-[14px]"> {/* div for the individual components */}
            {icon}
            {title}
        </div>
    </div>
  )
}

export default Filter