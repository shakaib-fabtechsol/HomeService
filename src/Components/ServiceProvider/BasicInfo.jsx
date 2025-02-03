import React, { useState } from "react";

function BasicInfo() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  // Function to handle adding tags
  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue(""); // Clear input field after adding tag
    }
  };

  // Function to remove a tag
  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form action="#">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Title" className="font-semibold">
                Service Title
              </label>
              <input
                type="text"
                id="Title"
                placeholder="Enter service name"
                className="myinput focus-none"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 mt-4">
            <p className="font-semibold">Service Type</p>
            <div className="flex mt-4">
              <div className="flex">
                <input
                  type="checkbox"
                  id="Commercial"
                  name="Commercial"
                  className="myinput me-4"
                />
                <label htmlFor="Commercial">Commercial</label>
              </div>
              <div className="flex ms-8">
                <input
                  type="checkbox"
                  id="Residential"
                  name="Residential"
                  className="myinput me-4"
                />
                <label htmlFor="Residential">Residential</label>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Category" className="font-semibold">
                Service Category
              </label>
              <select
                id="Category"
                className="myselect pe-[30px] focus-none"
              >
                <option value="" hidden>
                  Select a category
                </option>
                {Businesscategories.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* TAGS FIELD */}
          <div className="col-span-12 lg:col-span-7 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Tags" className="font-semibold">
                Search Tags
              </label>
              <div className="border rounded-lg p-2 myinput flex flex-wrap min-h-[40px]">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm flex items-center me-2 mb-2"
                  >
                    {tag}
                    <button
                      type="button"
                      className="ml-2 text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      onClick={() => handleRemoveTag(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  id="Tags"
                  placeholder="Enter tag and press Enter"
                  className="outline-none flex-grow"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleAddTag}
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Description" className="font-semibold">
                Service Description
              </label>
              <textarea
                name="Description"
                id="Description"
                className="myinput focus-none"
                placeholder="Type detail here..."
                rows={6}
              ></textarea>
            </div>
          </div>
          <div className="col-span-12 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Description" className="font-semibold">
                Fine Print{" "}
                <span className="text-[13px] text-[#cdcdcd]">(Optional)</span>
              </label>
              <textarea
                name="Description"
                id="Description"
                className="myinput focus-none"
                placeholder="Type detail here..."
                rows={6}
              ></textarea>
            </div>
          </div>
          <div className="col-span-12 mt-4">
            <div className="flex justify-end">
              <button
                type="reset"
                className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
              >
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
  );
}

export default BasicInfo;
