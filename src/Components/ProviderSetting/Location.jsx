import React, { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Location = () => {
    function valueLabelFormat(value) {
        return `${value} Miles`;
    }

    function calculateValue(value) {
        return value; 
    }

    const [serviceType, setServiceType] = useState("location");

    const [value2, setValue2] = React.useState(10);

    const handleChange2 = (event, newValue) => {
        if (typeof newValue === "number") {
            setValue2(newValue);
        }
    };
    return (
        <div>
            <div>
                <div class="lg:max-w-[65%] xl:max-w-[45%]">
                    <div className="flex flex-wrap gap-4 items-center mb-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="serviceType"
                                className="form-radio"
                                checked={serviceType === "location"}
                                onChange={() => setServiceType("location")}
                            />
                            <span className="ms-3">Service Locations</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="serviceType"
                                className="form-radio"
                                checked={serviceType === "radius"}
                                onChange={() => setServiceType("radius")}
                            />
                            <span className="ms-3">Service Radius</span>
                        </label>
                    </div>
                    {/* Service Locations Section */}
                    {serviceType === "location" && (
                        <div className="ser-location">
                            <div class="mb-6 ">
                                <label
                                    htmlFor="bloc"
                                    class="block text-sm font-medium mb-2"
                                >
                                    Business Location
                                </label>
                                <div class="flex items-center border py-2 rounded-lg px-3 ">
                                    <img src={location} alt="" className="max-w-20px me-2" />
                                    <input
                                        id="bloc"
                                        type="text"
                                        placeholder="Enter your business address."
                                        class="w-full py-2 focus-none"
                                    />
                                    <FaPencilAlt />
                                </div>
                            </div>
                            <div class="mb-4">
                                <div className="flex flex-wrap justify-between">
                                    <label
                                        htmlFor="sloc"
                                        class="block text-sm font-medium my-2"
                                    >
                                        Enter Service Locations
                                    </label>
                                    <div className="flex my-2 items-center">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="bulk"
                                            className="me-2 focus-none focus:outline-none"
                                        />
                                        <label
                                            htmlFor="bulk"
                                            className="block text-sm font-semibold"
                                        >
                                            Add locations in bulk
                                        </label>
                                    </div>
                                </div>
                                <div class="flex items-center  mb-2">
                                    <textarea
                                        id="sloc"
                                        rows="4"
                                        placeholder="Locations can be cities, postal codes, countries, etc. Enter one location per line."
                                        class="w-full border focus-none rounded-lg px-3 py-2"
                                    ></textarea>
                                </div>
                                <p class="text-sm myblack text-end">0 / 1000</p>
                            </div>
                            <div class="mb-6 border rounded-lg px-3 text-sm font-medium flex items-center">
                                <label class="" htmlFor="restrict">
                                    <img src={location} alt="" className="max-w-20px me-2" />
                                </label>
                                <input
                                    type="text"
                                    id="restrict"
                                    class="w-full focus-none rounded-lg px-3 py-4"
                                    placeholder="Restrict locations within a country (optional)"
                                />
                            </div>
                            <div className="border rounded-lg py-3">
                                <div className="px-3 py-1 flex items-center justify-between">
                                    <p className="myblack">location 01</p>
                                    <Link to="#">
                                        <img src={close} alt="" />
                                    </Link>
                                </div>
                                <div className="px-3 py-1 flex items-center justify-between">
                                    <p className="myblack">location 02</p>
                                    <Link to="#">
                                        <img src={close} alt="" />
                                    </Link>
                                </div>
                                <div className="px-3 py-1 flex items-center justify-between">
                                    <p className="myblack">location 03</p>
                                    <Link to="#">
                                        <img src={close} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Service Radius Section */}
                    {serviceType === "radius" && (
                        <div className="ser-radius">
                            <div class="mb-6 ">
                                <label
                                    htmlFor="bloc"
                                    class="block text-sm font-medium mb-2"
                                >
                                    Enter Service Locations
                                </label>
                                <div class="flex items-center border py-2 rounded-lg px-3 ">
                                    <img src={location} alt="" className="max-w-20px me-2" />
                                    <input
                                        id="bloc"
                                        type="text"
                                        placeholder="Enter your State and Zip code service address."
                                        class="w-full py-2 focus-none"
                                    />
                                    <FaPencilAlt />
                                </div>
                            </div>
                            <div class=" ">
                                <label htmlFor="" class="block text-sm font-medium mb-2">
                                    Coverage from Service Location
                                </label>
                                <div className="flex justify-between">
                                    <p className="text-sm">0 Miles</p>
                                    <p className="text-sm">60 Miles</p>
                                </div>
                            </div>
                            <Box>
                                <Slider
                                    value={value2}
                                    min={0}
                                    step={1}
                                    max={60}
                                    scale={calculateValue}
                                    getAriaValueText={valueLabelFormat}
                                    valueLabelFormat={valueLabelFormat}
                                    onChange={handleChange2}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                        </div>
                    )}
                </div>
                <div className="col-span-12 mt-4">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509827!2d144.96305781531895!3d-37.816279442021675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b3f94355567!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1674678878475!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="flex justify-end mt-12">
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
    )
}

export default Location