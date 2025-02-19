import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Loader from "../../Components/MUI/Loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BasicInfo({ setServiceId, setValue }) {
  const [tags, setTags] = useState([]);
  const { dealid } = useParams();
  console.log("idddd", dealid);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    service_title: "",
    commercial: 0,
    residential: 0,
    service_category: "",
    search_tags: "",
    service_description: "",
    fine_print: "",
  });

  const Businesscategories = [
    "Plumbing",
    "Electrical",
    "HVAC / Heating & Cooling",
    "Landscaping",
    "Roofing",
    "Painting",
    "Moving",
    "Security",
    "Cleaning Service",
    "Appliance Repair",
  ];

  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();

      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
        setFormData({
          ...formData,
          search_tags: [...tags, inputValue.trim()].join(","),
        });
      }

      setInputValue("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (dealid) {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No authentication token found. Please log in.");
        return;
      }

      axios
        .get(`https://homeservice.thefabulousshow.com/api/Deal/${dealid}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const BasicInfo = response?.data?.deal[0];
          console.log("BasicInfo:", BasicInfo);

          setFormData({
            id: BasicInfo.id || "",
            service_title: BasicInfo.service_title || "",
            commercial: BasicInfo.commercial || 0,
            residential: BasicInfo.residential || 0,
            service_category: BasicInfo.service_category || "",
            search_tags: BasicInfo.search_tags || "",
            service_description: BasicInfo.service_description || "",
            fine_print: BasicInfo.fine_print || "",
          });

          setTags(
            BasicInfo.search_tags ? BasicInfo.search_tags.split(",") : []
          );
        })
        .catch((error) => {
          console.error("Error fetching deal data:", error);
          if (error.response?.status === 401) {
            console.error("Unauthorized. Redirecting to login...");
          }
        });
    }
  }, [dealid]);

  console.log("value", formData?.id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

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
      let response;
      const updatedFormData = { ...formData };

      if (dealid) {
        updatedFormData.id = dealid;
      }
      response = await axios.post(
        "https://homeservice.thefabulousshow.com/api/BasicInfo",
        updatedFormData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(response);

      if (response.status === 200) {
        console.log("Service ID:", response.data.deal.id);
        setServiceId(response.data.deal.id);

        Swal.fire({
          icon: "success",
          title: dealid ? "Updated Successfully!" : "Created Successfully!",
          text: dealid
            ? "Your data has been updated successfully."
            : "Your data has been saved successfully.",
          confirmButtonColor: "#0F91D2",
        }).then(() => {
          setValue(1);
        });

        e.target.reset();
        setTags([]);
      }
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        icon: "error",
        title: dealid ? "Update Failed" : "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-1000">
          <Loader />
        </div>
      )}
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
       
          <form onSubmit={handleSubmit}>
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
                    value={formData.service_title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        service_title: e.target.value,
                      })
                    }
                    className="myinput"
                    required
                  />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 mt-4">
                <p className="font-semibold">Service Type</p>
                <div className="flex mt-4">
                  <label className="flex me-4">
                    <input
                      type="checkbox"
                      id="Commercial"
                      name="Commercial"
                      checked={formData.commercial == 1}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          commercial: e.target.checked ? 1 : 0,
                        })
                      }
                      className="me-2"
                    />
                    Commercial
                  </label>
                  {console.log("formdata", formData.residential)}
                  <label className="flex">
                    <input
                      type="checkbox"
                      id="Residential"
                      name="Residential"
                      checked={formData.residential == 1}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          residential: e.target.checked ? 1 : 0,
                        })
                      }
                      className="me-2"
                    />
                    Residential
                  </label>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Category" className="font-semibold">
                    Service Category
                  </label>
                  <select
                    id="Category"
                    className="myselect"
                    required
                    value={formData.service_category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        service_category: e.target.value,
                      })
                    }
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

              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Tags" className="font-semibold">
                        Search Tags
                      </label>
                      <div className="border rounded-lg p-2 myinput flex flex-wrap min-h-[40px]">
                        {tags.map((tag, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-[#E7F4FB] text-[#0F91D2] px-3 py-2 rounded-full me-2"
                          >
                            {tag}
                            <button
                              type="button"
                              className="ml-2 text-white bg-[#0F91D2] rounded-full w-5 h-5 flex items-center justify-center text-xs"
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
                </div>
              </div>

              <div className="col-span-12 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Description" className="font-semibold">
                    Service Description
                  </label>
                  <textarea
                    id="Description"
                    className="myinput"
                    placeholder="Type details here..."
                    rows={4}
                    required
                    value={formData.service_description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        service_description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="col-span-12 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="FinePrint" className="font-semibold">
                    Fine Print{" "}
                    <span className="text-[13px] text-[#cdcdcd]">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    id="FinePrint"
                    className="myinput"
                    placeholder="Type details here..."
                    rows={4}
                    value={formData.fine_print}
                    onChange={(e) =>
                      setFormData({ ...formData, fine_print: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-span-12 mt-4 flex justify-end">
                <button
                  type="reset"
                  className="border border-gray-300 rounded-lg w-[150px] py-[10px] font-semibold bg-white me-4"
                >
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
    </>
  );
}

export default BasicInfo;
