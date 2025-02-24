import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({ image, title, price, description, category }) => {
  return (
    <div>
      <Link to="/provider/serviceDetails" className="border block px-3 py-3 rounded-lg">
        <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover" />
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mb-0 text-lg font-extrabold">{price}</p>
        </div>
       
        <div className="flex mt-7">
         
         {category}
        </div>
      </Link>
    </div>
  )
}

export default ServiceBox