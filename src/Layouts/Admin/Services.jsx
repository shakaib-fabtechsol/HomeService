import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import { HiPlus } from "react-icons/hi";
import service1 from "../../assets/img/service1.png";

function Services() {
  return (
    <div>
      <div className="md:flex justify-between items-center">
        <div className="flex border rounded-lg items-center px-2">
          <label htmlFor="search"><CiSearch className='me-2 text-xl'/></label>
          <input id='search' type="search" className="py-2 w-full focus-none" placeholder='Search'/>
        </div>
        <Link to="#" className='bg-blue mt-2 lg:mt-0 px-4 rounded-md py-2 text-white flex justify-center items-center'>
          <HiPlus className='text-white text-xl me-1 font-semibold'/>
          <span>Create New</span>
        </Link>
      </div>
      <div className="grid mt-4 grid-cols-3">
        <div className="border px-3 py-3 rounded-lg">
          <img src={service1} alt="" className='rounded-lg'/>
          <div className="flex justify-between items-center mt-5">
            <h2 className="text-lg font-semibold">Service Title</h2>
            <p className="mb-0 text-2xl font-bold">$200</p>
          </div>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis.</p>
          <div className="flex mt-7">
            <p className="px-3 py-1 font-semibold text-sm text-[#0F91D2] bg-[#E7F4FB] rounded-full me-2">Cleaning</p>
            <p className="px-3 py-1 font-semibold text-sm text-[#343434] bg-[#EBEBEB] rounded-full">Residential</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
