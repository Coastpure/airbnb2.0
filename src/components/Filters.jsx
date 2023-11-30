import React from 'react'
import { GoKey } from 'react-icons/go';
import { BsFire, BsCupHot } from 'react-icons/bs';
//import {GiBed } from 'react-icons/gi';
import {PiAlienFill} from 'react-icons/pi';
import {BiSolidTree} from 'react-icons/bi';
import Filter from './Filter';


const Filters = () => {
    const sorting = [
        {title: "New", icon:<GoKey />},
        {title: "Breakfast", icon:<BsCupHot />},
        {title: "Jungle", icon:<BiSolidTree />},
        {title: "Trending", icon:<BsFire />},
        {title: "Alien", icon:<PiAlienFill/>}
    ]
  return (
    <div className=''>      {/* div for all the components combined*/}
        <div className="hidden sm:flex justify-center gap-2 sm:gap-4 mt-4">
            {sorting.map((obj) => (
                <Filter title={obj.title} icon={obj.icon} /> 
            ))}
        </div>
    </div>
  )
}

export default Filters