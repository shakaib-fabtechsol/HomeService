import React from "react";
import { useState, useEffect } from "react";
import SettingsPreview from "../MUI/SettingsPreview";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import profileImg from "../../assets/img/service3.png";
import Loader from "../../Components/MUI/Loader";
import Swal from "sweetalert2";

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
  const userId = localStorage.getItem("id");
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [publishValue, setPublishValue] = useState(1);
  const [publishLoading, setPublishLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_id: userId,
    business_name: "",
    business_logo: null,
    about: "",
    business_primary_category: "",
    business_secondary_categories: "",
    website: "",
  });

  const handlereset = () => {
    setFormData({
      business_name: "",
      business_logo: "",
      location: "",
      about: "",
      business_primary_category: "",
      business_secondary_categories: "",
      website: "",
    });
  };

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("No token found. Please log in.");
        return;
      }

      try {
        const response = await axios.get(
          `https://backend.homeprodeals.com/api/UserDetails/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const BasicInfo = response?.data?.businessProfile;

        if (BasicInfo) {
          const imagePath = BasicInfo[0]?.business_logo;
          const imageUrl = imagePath
            ? `https://backend.homeprodeals.com/uploads/${imagePath}`
            : "/default.png";

          const secondaryCategories =
            typeof BasicInfo[0]?.business_secondary_categories === "string"
              ? BasicInfo[0]?.business_secondary_categories.split(",")
              : BasicInfo[0]?.business_secondary_categories || [];

          setFormData({
            user_id: BasicInfo[0]?.user_id || "",
            business_name: BasicInfo[0]?.business_name || "",
            business_logo: imageUrl,
            about: BasicInfo[0].about || "",
            business_primary_category:
              BasicInfo[0]?.business_primary_category || "",
            business_secondary_categories: secondaryCategories,
            website: BasicInfo[0]?.website || "",
          });
          setIsApiLoaded(true);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch user details.");
      }
    };

    fetchData();
  }, [userId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const token = localStorage.getItem("token");

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
        "https://backend.homeprodeals.com/api/BusinessProfile",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
  const handleFileChange = (e, fieldName) => {
    const uploadedFile = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: uploadedFile,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    if (publishLoading) return;

    const userId = localStorage.getItem("id");
    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Service ID is required!",
      });
      return;
    }

    setPublishLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No token found. Please log in.",
      });
      setPublishLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://backend.homeprodeals.com/api/SettingPublish/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );


      if (response.status === 200) {
        setFormData((prev) => ({ ...prev, publish: response.data.publish }));
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Setting Publish successfully.",
          confirmButtonColor: "#0F91D2",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: response.data.message || "Failed to update deal.",
          confirmButtonColor: "#D33",
        });
      }
    } catch (error) {
      console.error("Error updating deal:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error updating the deal.",
      });
    } finally {
      setPublishLoading(false);
    }
  };
  return (
    <>
      {loading || !isApiLoaded ? (
        <Loader />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
                <p className="text-lg font-semibold text-[#181D27]">
                  Business Profile
                </p>
                <p className="text-[#535862] text-sm">
                  Update your business details.
                </p>
              </div>
              <div>
                <div className="py-8 border-b">
                  <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                    <div>
                      <label className="text-sm font-semibold" htmlFor="bname">
                        Business name*
                      </label>
                      <p className="text-[#535862] text-sm">
                        This will be publically displayed on your profile.
                      </p>
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
                        Business Logo
                      </p>
                      <p className="text-[#535862] text-sm">
                        This will be publically displayed on your profile.
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <SettingsPreview
                        onFileSelect={handleFileChange}
                        fieldName="business_logo"
                        existingImage={formData.personal_image || profileImg}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-8 border-b"></div>
                <div className="py-8 border-b">
                  <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                    <div>
                      <label className="text-sm font-semibold" htmlFor="about">
                        About
                      </label>
                      <p className="text-[#535862] text-sm">
                        This is quick info customers will see about your
                        business. This will be publicly displayed.
                      </p>
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
                          Array.isArray(Businesscategories) &&
                          Businesscategories?.map((option, index) => (
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
                        options={Businesscategories || []}
                        value={formData?.business_secondary_categories || []} // ✅ Prevent "some is not a function" error
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
                      <label
                        className="text-sm font-semibold"
                        htmlFor="Website"
                      >
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
                <div className="col-span-12 mt-4 flex justify-end gap-4">
                <button
                  type="reset"
                  className="border border-gray-300 rounded-lg w-[150px] py-[10px] font-semibold bg-white"
                >
                  
                  Cancel
                </button>
                <input
                  type="text"
                  id="Flatr"
                  defaultValue={formData?.id ? `${formData?.id}` : "0"}
                  className="focus-none border hidden"
                  readOnly
                />
                <input
                  type="text"
                  id="publish"
                  value={publishValue}
                  className="focus-none border hidden"
                  readOnly
                />
                <button
                  type="button"
                  className={`border rounded-lg w-[150px] py-[10px] text-white font-semibold bg-[#0F91D2] ${
                    publishLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handlePublish}
                  disabled={publishLoading}
                >
                  {publishLoading ? "Publishing..." : "Publish"}
                </button>
              
                <button
                  type="submit"

                  className={`border rounded-lg w-[150px] py-[10px] text-white font-semibold bg-[#0F91D2] ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BusinessProfile;
