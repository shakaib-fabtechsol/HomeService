import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../Components/MUI/Loader";
import { FaPlus } from "react-icons/fa6";
import Swal from "sweetalert2"
import { useParams } from "react-router-dom";


const Payment = () => {
  const { dealid } = useParams();
  const [isApiLoaded, setIsApiLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [publishValue, setPublishValue] = useState(1);
    const [publishLoading, setPublishLoading] = useState(false);
  const userId = localStorage.getItem("id");
  const [formData, setFormData] = useState({
    user_id: "",
    service_title: "",
    bank: "",
    branch_name: "",
    account_number: "",
    bank_routing_number: "",
    location: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("id");
    setFormData((prevState) => ({ ...prevState, user_id: userId }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const response = await axios.post(
        "216.37.42.152/api/AddPaymentDetails",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Password updated successfully!");
    } catch (error) {
      toast.error("Failed to update password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const updateData = async () => {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");

      if (!token) {
        toast.error("No token found. Please log in.");
        return;
      }



      const data = {
        id: id,
      };

      try {
        const response = await axios.post(
          "216.37.42.152/api/AddPaymentDetails",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const BasicInfo = response.data?.payment;

        if (BasicInfo) {
          setFormData({
            id: BasicInfo?.user_id,
            service_title: BasicInfo?.service_title,
            bank: BasicInfo?.bank,
            branch_name: BasicInfo?.branch_name,
            account_number: BasicInfo?.account_number,
            bank_routing_number: BasicInfo?.bank_routing_number,
            location: BasicInfo?.location,
          });
          setIsApiLoaded(true);
          setLoading(false);
        }
      } catch (err) {
        toast.error("An error occurred while fetching data.");
      }
    };

    updateData();
  }, []);

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
        `216.37.42.152/api/SettingPublish/${userId}`,
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
    <div>
      {  userId &&!isApiLoaded ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <p className="text-lg font-semibold text-[#181D27]">
                Payment/Payout Info
              </p>
              <p className="text-[#535862] text-sm">
                update your payment detail
              </p>
            </div>
            <div className="">
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="">
                    <label htmlFor="Title" className="font-semibold">
                      Business Name
                    </label>

                    <p className="text-[#535862] text-sm">
                      This is your legal business name for tax purposes. This
                      will not be publicly displayed on your profile.
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="service_title"
                    placeholder="Muhammad Hussnain"
                    className="myinput focus-none w-full"
                    name="service_title" // ✅ Match the formData key
                    value={formData.service_title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Select Bank*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <select
                    id="bank"
                    name="bank"
                    value={formData.bank} // ✅ Controlled value
                    onChange={handleChange} // ✅ Handle changes
                    className="myinput focus-none w-full"
                  >
                    <option value="" disabled hidden>
                      Select a bank
                    </option>
                    <option value="bank1">Bank 1</option>
                    <option value="bank2">Bank 2</option>
                    <option value="bank3">Bank 3</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Branch Name/Code
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter"
                    name="branch_name"
                    value={formData.branch_name}
                    onChange={handleChange}
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      SSN/TIN
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter"
                    name="branch_name"
                    value={formData.branch_name}
                    onChange={handleChange}
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Account Number*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="account_number" // Match the field name
                    name="account_number" // ✅ Match the formData key
                    value={formData.account_number}
                    onChange={handleChange}
                    placeholder="Enter here..."
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Bank Routing Number*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="bank_routing_number" 
                    name="bank_routing_number" 
                    value={formData.bank_routing_number}
                    onChange={handleChange}
                    placeholder="Enter here..."
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <label className="text-sm font-semibold" htmlFor="location">
                    Mailing Address
                  </label>
                  <p className="text-[#535862] text-sm">
                    This is your legal mailing address.This will not be
                    publically displayed on your profile.
                  </p>
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
        </form>
      )}
    </div>
  );
};

export default Payment;
