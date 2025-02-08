import React from "react";
import { useState } from "react";
import SettingsPreview from "../MUI/SettingsPreview";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Autocomplete,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const BusinessProfile = () => {
   const userId= localStorage.getItem("id");
    console.log("userID",userId);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_id: userId,
    business_name: "",
    business_logo: null,
    location: "",
    about: "",
    business_primary_category: "",
    business_secondary_categories: "",
    website: "",
  });


  const handlereset = () => {
    setFormData({
        business_name: "",
        business_logo: null,
        location: "",
        about: "",
        business_primary_category: "",
        business_secondary_categories: "",
        website: "",
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; 
    const token = localStorage.getItem("token");
    console.log("token:", token);

    if (!token) {
      toast.error("No token found. Please log in.");
      return;
    }

    setLoading(true); // Start loading state

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const response = await axios.post(
        "https://homeservice.thefabulousshow.com/api/BusinessProfile",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );

      console.log("Success:", response.data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false); // Stop loading state
    }
  };
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
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      business_logo: e.target.files[0],
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
                      name="business_name"
                      value={formData.business_name} // Controlled Input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          business_name: e.target.value,
                        })
                      }
                      placeholder="Enter business name"
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
                  <div className="md:col-span-2" onChange={handleFileChange}>
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
                        value={formData.location}
                        onChange={handleChange}
                        name="location"
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
                    <label className="text-sm font-semibold" htmlFor="about">
                      About
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      rows={5}
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      name="about"
                      id="about"
                      value={formData.about} // Controlled Input
                      onChange={(e) =>
                        setFormData({ ...formData, about: e.target.value })
                      }
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
                      name="business_primary_category"
                      value={formData.business_primary_category}
                      onChange={handleChange}
                      id="PrimaryCat"
                    >
                      <option value="" hidden>
                        Select an option
                      </option>
                      {Businesscategories.length > 0 ? (
                        Businesscategories.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))
                      ) : (
                        <option disabled>No categories available</option>
                      )}
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
                    <Autocomplete
                      multiple
                      id="tags-outlined"
                      options={Businesscategories || []} // ✅ Ensure it's always an array
                      value={formData.business_secondary_categories || []} // ✅ Prevent "some is not a function" error
                      onChange={(event, newValue) => {
                        setFormData((prevState) => ({
                          ...prevState,
                          business_secondary_categories: newValue || [], // ✅ Ensure always an array
                        }));
                      }}
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
                      name="website"
                      id="Website"
                      value={formData.website} // Controlled Input
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      placeholder="Enter your website URL"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handlereset}
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
        </form>
      </div>
    </>
  );
};

export default BusinessProfile;
