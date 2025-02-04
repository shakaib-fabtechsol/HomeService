import React from 'react'
import { Link } from 'react-router-dom'

const Deals = ({ image, title, price, description, tags }) => {
    return (
        <div>
            <Link to="/customer/serviceDetails" className="border px-3 py-3 block rounded-lg shadow">
                <img src={image} alt={title} className="rounded-lg w-full" />
                <div className="flex justify-between items-center mt-5">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="mb-0 text-2xl font-bold">${price}</p>
                </div>
                <p className="text-sm">{description}</p>
                <div className="flex mt-7">
                    {tags.map((tag, index) => (
                        <p
                            key={index}
                            className={`px-3 py-1 font-semibold text-sm rounded-full me-2 ${tag.type === "primary"
                                    ? "text-[#0F91D2] bg-[#E7F4FB]"
                                    : "text-[#343434] bg-[#EBEBEB]"
                                }`}
                        >
                            {tag.label}
                        </p>
                    ))}
                </div>
                <Link to="/customer/serviceDetails" className="border-2 rounded-lg font-semibold w-full mt-4 flex justify-center px-3 py-3">View Details</Link>
            </Link>
        </div>
    )
}

export default Deals