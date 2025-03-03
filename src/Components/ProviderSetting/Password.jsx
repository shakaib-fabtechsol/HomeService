import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../../Components/MUI/Loader";


const Password = () => {
  const [loading, setLoading] = useState(false);
    const [publishValue, setPublishValue] = useState(1);
    const [publishLoading, setPublishLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_id: "",
    current_password: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("id");
    setFormData((prevState) => ({ ...prevState, 
    id: userId }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      return;
    }
   
    if (formData.password !== formData.confirm_password) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const response = await axios.post(
        "http://216.37.42.152:8004/api/UpdatePassword",
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

    setPublishLoading(true)

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No token found. Please log in.",
      });
      setPublishLoading(false)
      return;
    }

    try {
      const response = await axios.get(
        `http://216.37.42.152:8004/api/SettingPublish/${userId}`,
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
       {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
            <p className="text-lg font-semibold text-[#181D27]">Password</p>
            <p className="text-[#535862] text-sm">
              Update your account password.
            </p>
          </div>
          <div>
            {/* Current Password */}
            <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <label htmlFor="current_password" className="font-semibold">
                  Current Password
                </label>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-6">
                <input
                  type="password"
                  id="current_password"
                  name="current_password"
                  value={formData.current_password}
                  onChange={handleChange}
                  className="myinput focus-none w-full"
                />
              </div>
            </div>

            {/* New Password */}
            <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <label htmlFor="password" className="font-semibold">
                  New Password
                </label>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="myinput focus-none w-full"
                />
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <label htmlFor="confirm_password" className="font-semibold">
                  Confirm New Password
                </label>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-6">
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="myinput focus-none w-full"
                />
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
  );
};

export default Password;
