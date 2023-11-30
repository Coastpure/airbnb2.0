import React from 'react'
import house1 from "../assets/house1.jpg"
import Rental from './Rental'

const Rentals = () => {
  const rentals = [
    {title:"Brazaville, Congo", image: house1, price: "1541"},
    {title:"Brazaville, Congo", image: house1, price: "1541"},
    {title:"Brazaville, Congo", image: house1, price: "1541"},
    {title:"Brazaville, Congo", image: house1, price: "1541"},
    {title:"Brazaville, Congo", image: house1, price: "1541"},
    {title:"Brazaville, Congo", image: house1, price: "1541"},
    {title:"Brazaville, Congo", image: house1, price: "1541"},
    {title:"Brazaville, Congo", image: house1, price: "1541"}
  ]
  return (
    <div className='pt-3'>
      <div className="grid grid-cols-1 gap-4">
        {rentals.map((rental) => (
          <Rental 
            title={rental.title} 
            price={rental.price} 
            image={rental.image} 
          />
        ))}
      </div>
    </div>
  )
}

export default Rentals