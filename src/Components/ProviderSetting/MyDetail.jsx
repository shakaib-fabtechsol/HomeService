import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import SettingsPreview from "../MUI/SettingsPreview";
import profileImg from "../../assets/img/service3.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {  toast } from "react-toastify";

const MyDetail = () => {
  const [isSelectsalespEnabled, setIsSelectsalespEnabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false); 
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    personal_image: null,
    sales_referred: "No",
    sales_representative: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlereset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      personal_image: null,
      sales_referred: "No",
      sales_representative: "",
    });
  };
  
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      personal_image: e.target.files[0],
    }));
  };

  const handleRefferChange = (event) => {
    const selectedValue = event.target.value;
    setIsSelectsalespEnabled(selectedValue === "Yes");
    setFormData((prevState) => ({
      ...prevState,
      sales_referred: selectedValue,
      sales_representative:
        selectedValue === "No" ? "" : prevState.sales_representative,
    }));
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData((prevState) => ({
      ...prevState,
      sales_representative: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions
  
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
        "https://homeservice.thefabulousshow.com/api/MyDetails",
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

  const options = [
    { value: "1", label: "John Doe", avatar: profileImg },
    { value: "2", label: "Jane Smith", avatar: profileImg },
    { value: "3", label: "Chris Evans", avatar: profileImg },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
            <p className="text-lg font-semibold text-[#181D27]">
              Personal Profile
            </p>
            <p className="text-[#535862] text-sm">
              update your personal profile details.
            </p>
          </div>
          <div className="max-w-[1000px]">
            <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
              <div>
                <label className="text-sm font-semibold" htmlFor="fname">
                  Full Name
                </label>
              </div>
              <div className="sm:col-span-2">
              <input
              className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
              <div>
                <label className="text-sm font-semibold" htmlFor="Email">
                  Email address
                </label>
              </div>
              <div className="sm:col-span-2">
              <input
               className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
              <div>
                <label className="text-sm font-semibold" htmlFor="Phone">
                  Phone Number
                </label>
              </div>
              <div className="sm:col-span-2">
              <input
             className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-2 py-8 border-b">
              <div>
                <p className="text-sm font-semibold text-[#414651]">
                  Personal Profile Photo
                </p>
                <p className="text-[#535862] text-sm">
                  This will be displayed on your profile.
                </p>
              </div>
              <div className="md:col-span-2 " onChange={handleFileChange}>
                <SettingsPreview />
              </div>
            </div>
            <div className="py-8 flex flex-col gap-4">
              <div className="grid sm:grid-cols-3 gap-2">
                <div>
                  <label className="text-sm font-semibold" htmlFor="reffer">
                    Were you referred by a Sales Representative?
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <select
                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                    name="reffer"
                    id="reffer"
                    value={formData.sales_referred}
                    onChange={handleRefferChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-2">
                <div>
                  <label
                    className="text-sm font-semibold"
                    htmlFor="selectsalesp"
                  >
                    Select Sales Representative
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <Select
                    labelId="selectsalesp"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    disabled={!isSelectsalespEnabled}
                    renderValue={(selected) => {
                      const selectedOption = options.find(
                        (option) => option.value === selected
                      );
                      return (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={selectedOption?.avatar}
                            alt="img"
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              marginRight: "8px",
                            }}
                          />
                          {selectedOption?.label}
                        </div>
                      );
                    }}
                    sx={{
                      border: "1px solid #D5D7DA !important",
                      borderRadius: "8px",
                      boxShadow: "0px 1px 2px 0px #0A0D120D",
                      outline: "none",
                      width: "100%",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #D5D7DA",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#D5D7DA !important",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        <img
                          className="me-2 size-8 rounded-full object-cover"
                          src={option.avatar}
                          alt="img"
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="reset"
              onClick={handlereset}
              className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
            >
              {" "}
              Cancel
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
      </form>
    </div>
  );
};

export default MyDetail;
