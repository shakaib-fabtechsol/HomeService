import React from 'react'
import SettingsPreview from '../MUI/SettingsPreview'
import { FaPlus } from 'react-icons/fa6'
import {
    Autocomplete,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography,
} from "@mui/material";

const BusinessProfile = () => {

  const Businesscategories = [
    "Plumbing",
    "Sewer & Septic",
    "Electrical",
    "HVAC / Heating & Cooling",
    "Insulation",
    "Concrete",
    "Bricklayer",
    "Windows & Doors",
    "Flooring",
    "Garage Doors",
    "Concrete Floor Coatings",
    "Mini Barns",
    "Pole Barns",
    "Roofing",
    "Gutters",
    "Siding",
    "Exterior Trim",
    "Landscaping",
    "Hardscapes",
    "Outdoor Living",
    "Pool & Spa",
    "Fence and Gates",
    "Handyman Services",
    "Security",
    "Home Inspections",
    "Structural Engineer",
    "Foundation Repair",
    "Waterproofing",
    "Crawlspace Repair",
    "Mold Testing",
    "Mold Restoration",
    "Water & Fire Restoration Service",
    "Hazardous Waste Removal",
    "Interior Design",
    "Kitchen",
    "Bath",
    "Interior Decorating",
    "Window and Door Coverings",
    "Window Tinting",
    "Interior Trim",
    "Cleaning Service",
    "Organizing",
    "Painting",
    "Drywall",
    "Wall Coverings",
    "Chimney Sweep",
    "Excavation",
    "Grading",
    "Blacktop & Sealcoating",
    "Lighting",
    "Moving",
    "Storage Containers",
    "Piano Movers",
    "Realtor",
    "Home Network & Computer",
    "Computer Repair",
    "Appliance Repair",
    "Nursing",
    "Drain Services",
    "Veterinary Service",
  ];
    return (
        <div>
            <div>
                <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
                    <p className="text-lg font-semibold text-[#181D27]">
                        Business Profile
                    </p>
                    <p className="text-[#535862] text-sm">
                        update your business details.
                    </p>
                </div>
                <div>
                    <div className="py-8 border-b">
                        <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                            <div>
                                <label className="text-sm font-semibold" htmlFor="bname">
                                    Business name*
                                </label>
                            </div>
                            <div className="sm:col-span-2">
                                <input
                                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                    type="text"
                                    name="bname"
                                    id="bname"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-8 border-b">
                        <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                            <div>
                                <p className="text-sm font-semibold text-[#414651]">
                                    Your Logo
                                </p>
                                <p className="text-[#535862] text-sm">
                                    This will be displayed on your profile.
                                </p>
                            </div>
                            <div className="md:col-span-2">
                                <SettingsPreview />
                            </div>
                        </div>
                    </div>
                    <div className="py-8 border-b">
                        <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                            <div>
                                <label className="text-sm font-semibold" htmlFor="location">
                                    Location
                                </label>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="border flex items-center border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D]">
                                    <input
                                        className="w-full focus:outline-none"
                                        type="text"
                                        name="location"
                                        id="location"
                                    />
                                    <label
                                        className="bg-[#FAFAFA] rounded-[4px]"
                                        htmlFor="location"
                                    >
                                        <FaPlus />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 border-b">
                        <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                            <div>
                                <label className="text-sm font-semibold" htmlFor="About">
                                    About
                                </label>
                            </div>
                            <div className="sm:col-span-2">
                                <textarea
                                    rows={5}
                                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                    name="About"
                                    id="About"
                                    placeholder="Write here.."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-8 border-b">
                        <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                            <div>
                                <label
                                    className="text-sm font-semibold"
                                    htmlFor="PrimaryCat"
                                >
                                    Primary Business Category*
                                </label>
                            </div>
                            <div className="sm:col-span-2">
                                <select
                                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                    name="PrimaryCat"
                                    id="PrimaryCat"
                                >
                                    <option value="" hidden>
                                        Select an option
                                    </option>
                                    {Businesscategories.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px] mt-4">
                            <div>
                                <label
                                    className="text-sm font-semibold"
                                    htmlFor="SecondaryCat"
                                >
                                    Secondary Business Categories*
                                </label>
                            </div>
                            <div className="sm:col-span-2">
                                {/* <select
                              className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                              name="SecondaryCat"
                              id="SecondaryCat"
                            >
                              <option value="" hidden>
                                Select an option
                              </option>
                              {Businesscategories.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select> */}
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={Businesscategories}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "8px",
                                            border: "1px solid #D5D7DA",
                                            outline: "none",
                                            paddingTop: "3px",
                                            paddingBottom: "3px",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                    }}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField {...params} placeholder="Select" />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                            <div>
                                <label className="text-sm font-semibold" htmlFor="Website">
                                    Website
                                </label>
                            </div>
                            <div className="sm:col-span-2">
                                <input
                                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                    type="text"
                                    name="Website"
                                    id="Website"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="reset"
                            className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                        >
                            {" "}
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessProfile