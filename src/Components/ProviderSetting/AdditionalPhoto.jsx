import React from "react";
import SettingsPreview from "../MUI/SettingsPreview";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import profileImg from "../../assets/img/service3.png";
import Loader from "../../Components/MUI/Loader";
import PreviewVideo from "../MUI/PreviewVideo";
import Swal from "sweetalert2";

const AdditionalPhoto = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");
  const [loading, setLoading] = useState(false);
   const [publishValue, setPublishValue] = useState(1);
   const [publishLoading, setPublishLoading] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [formData, setFormData] = useState({
    user_id: userId,
    technician_photo: null,
    vehicle_photo: null,
    facility_photo: null,
    project_photo: null,
  });

  const handleFileChange = (e, fieldName) => {
    const uploadedFile = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: uploadedFile,
    }));
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
          const imagePath = BasicInfo[0]?.vehicle_photo;
          const imageUrl = imagePath
            ? `https://backend.homeprodeals.com/uploads/${imagePath}`
            : "/default.png";
          const imagePath2 = BasicInfo[0]?.facility_photo;
          const imageUrl2 = imagePath
            ? `https://backend.homeprodeals.com/uploads/${imagePath2}`
            : "/default.png";
          const imagePath4 = BasicInfo[0]?.project_photo;
          const imageUrl4 = imagePath
            ? `https://backend.homeprodeals.com/uploads/${imagePath4}`
            : "/default.png";
          const imagePath3 = BasicInfo[0]?.technician_photo;
          const imageUrl3 = imagePath
            ? `https://backend.homeprodeals.com/uploads/${imagePath3}`
            : "/default.png";

          setFormData({
            user_id: BasicInfo[0]?.user_id || "",
            technician_photo: imageUrl3,
            project_photo: imageUrl4,
            facility_photo: imageUrl2,
            vehicle_photo: imageUrl,
            about_video: BasicInfo[0].about_video,
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

    setLoading(true);

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          data.append(key, value);
        }
      });

      const response = await axios.post(
        "https://backend.homeprodeals.com/api/AdditionalPhotos",
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
      setLoading(false);
    }
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
                  Additional Info
                </p>
                <p className="text-[#535862] text-sm">
                  Upload optional additional info.
                </p>
              </div>
              <div className="py-8 border-b">
                <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <p className="text-sm font-semibold text-[#414651]">
                      Upload About Us Video
                    </p>
                    <p className="text-[#535862] text-sm">
                      Optional info which will be publicly displayed.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <PreviewVideo
                      onFileSelect={handleFileChange}
                      fieldName="about_video"
                      existingImage={formData.about_video || profileImg}
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 border-b">
                <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <p className="text-sm font-semibold text-[#414651]">
                      Upload Technician Photos
                    </p>
                    <p className="text-[#535862] text-sm">
                      Optional info which will be publicly displayed.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <SettingsPreview
                      onFileSelect={handleFileChange}
                      fieldName="technician_photo"
                      existingImage={formData.technician_photo || profileImg}
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 border-b">
                <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <p className="text-sm font-semibold text-[#414651]">
                      Upload Vehicle Photos
                    </p>
                    <p className="text-[#535862] text-sm">
                      Optional info which will be publicly displayed.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <SettingsPreview
                      onFileSelect={handleFileChange}
                      fieldName="vehicle_photo"
                      existingImage={formData.vehicle_photo || profileImg}
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 border-b">
                <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <p className="text-sm font-semibold text-[#414651]">
                      Upload Facility Photos
                    </p>
                    <p className="text-[#535862] text-sm">
                      Optional info which will be publicly displayed.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <SettingsPreview
                      onFileSelect={handleFileChange}
                      fieldName="facility_photo"
                      existingImage={formData.facility_photo || profileImg}
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 border-b">
                <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <p className="text-sm font-semibold text-[#414651]">
                      Upload Project Photos
                    </p>
                    <p className="text-[#535862] text-sm">
                      Optional info which will be publicly displayed.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <SettingsPreview
                      onFileSelect={handleFileChange}
                      fieldName="project_photo"
                      existingImage={formData.project_photo || profileImg}
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
          </form>
        </div>
      )}
    </>
  );
};

export default AdditionalPhoto;
