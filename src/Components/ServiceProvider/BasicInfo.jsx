import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BasicInfo({ setServiceId,setValue  }) { 
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false); // Lazy loading state

  const Businesscategories = [
    "Plumbing", "Electrical", "HVAC / Heating & Cooling", "Landscaping",
    "Roofing", "Painting", "Moving", "Security", "Cleaning Service", "Appliance Repair"
  ];

  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions

    setLoading(true); // Show loading state

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      setLoading(false);
      return;
    }

    const formData = {
      service_title: e.target.Title.value,
      commercial: e.target.Commercial.checked ? 1 : 0,
      residential: e.target.Residential.checked ? 1 : 0,
      service_category: e.target.Category.value,
      search_tags: tags.join(","),
      service_description: e.target.Description.value,
      fine_print: e.target.FinePrint?.value || "",
    };

    try {
      const response = await axios.post(
        "https://homeservice.thefabulousshow.com/api/BasicInfo",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        console.log("Service ID:", response.data.deal.id); // Log the ID to console
        setServiceId(response.data.deal.id);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your data has been saved successfully.",
          confirmButtonColor: "#0F91D2",
      }).then(() => {
          setValue(1); // Switch to Pricing & Packages tab (index 1)
      });
        e.target.reset(); // Reset form fields
        setTags([]); // Clear tags
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Title" className="font-semibold">Service Title</label>
              <input type="text" id="Title" placeholder="Enter service name" className="myinput" required />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 mt-4">
            <p className="font-semibold">Service Type</p>
            <div className="flex mt-4">
              <label className="flex me-4">
                <input type="checkbox" id="Commercial" name="Commercial" className="me-2" />
                Commercial
              </label>
              <label className="flex">
                <input type="checkbox" id="Residential" name="Residential" className="me-2" />
                Residential
              </label>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Category" className="font-semibold">Service Category</label>
              <select id="Category" className="myselect" required>
                <option value="" hidden>Select a category</option>
                {Businesscategories.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Tags" className="font-semibold">Search Tags</label>
              <div className="border rounded-lg p-2 myinput flex flex-wrap min-h-[40px]">
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center bg-[#E7F4FB] text-[#0F91D2] px-3 py-2 rounded-full me-2">
                    {tag}
                    <button type="button" className="ml-2 text-white bg-[#0F91D2] rounded-full w-5 h-5 flex items-center justify-center text-xs" onClick={() => handleRemoveTag(index)}>×</button>
                  </div>
                ))}
                <input type="text" id="Tags" placeholder="Enter tag and press Enter" className="outline-none flex-grow" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleAddTag} />
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Description" className="font-semibold">Service Description</label>
              <textarea id="Description" className="myinput" placeholder="Type details here..." rows={4} required></textarea>
            </div>
          </div>

          <div className="col-span-12 mt-4">
            <div className="flex flex-col">
              <label htmlFor="FinePrint" className="font-semibold">Fine Print <span className="text-[13px] text-[#cdcdcd]">(Optional)</span></label>
              <textarea id="FinePrint" className="myinput" placeholder="Type details here..." rows={4}></textarea>
            </div>
          </div>

          <div className="col-span-12 mt-4 flex justify-end">
            <button type="reset" className="border border-gray-300 rounded-lg w-[150px] py-[10px] font-semibold bg-white me-4">Cancel</button>
            <button type="submit" className={`border rounded-lg w-[150px] py-[10px] text-white font-semibold bg-[#0F91D2] ${loading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BasicInfo;
