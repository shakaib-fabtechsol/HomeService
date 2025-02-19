import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({ image, title, price, description, tags }) => {
    return (
        <div>
            <Link to="/provider/serviceDetails" className="border block px-3 py-3 rounded-lg">
                <img src={image} alt={title} className="rounded-lg w-[100%] h-[50%] " />
                <div className="flex justify-between items-center mt-5">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="mb-0 text-lg font-extrabold">{price}</p>
                </div>
                <p className="text-sm text-[#535862] mt-3">{description}</p>
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
            </Link>
        </div>
    )
}

export default ServiceBox