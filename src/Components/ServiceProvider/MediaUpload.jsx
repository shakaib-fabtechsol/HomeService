import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import upload from "../../assets/img/upload.png";
import { useParams } from "react-router-dom";
import fileicon from "../../assets/img/fileicon.png";
import Loader from "../../Components/MUI/Loader";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const MediaUpload = ({ serviceId, setValue }) => {
  const { dealid } = useParams();
  const id = localStorage.getItem("id");
  const [loading, setLoading] = useState(false);
  const [publishValue, setPublishValue] = useState(1);
  const [publishLoading, setPublishLoading] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [file, setFile] = useState(null);

  const [filePreview, setFilePreview] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  console.log("preview", filePreview);
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      console.log("File selected:", uploadedFile);
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile));
      setShowPreview(false);
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      console.log("File dropped:", uploadedFile);
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile));
      setShowPreview(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFilePreview(null);
    setShowPreview(false);
    document.getElementById("image").value = "";
  };

  const handleShowPreview = () => {
    setShowPreview(true);
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
        .then(async (response) => {
          const BasicInfo = response?.data?.deal?.[0];

          if (BasicInfo?.image) {
            try {
              const imagePath = BasicInfo?.image;
              const imageUrl = `https://homeservice.thefabulousshow.com/uploads/${imagePath}`;
              setFilePreview(imageUrl);
              setShowPreview(true);
              setIsApiLoaded(true);
              setLoading(false);
            } catch (error) {
              console.error("Error fetching or converting image:", error);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching deal data:", error);
          if (error.response?.status === 401) {
            console.error("Unauthorized. Redirecting to login...");
          }
        });
    }
  }, [dealid]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({ icon: "error", title: "No token found. Please log in." });
      setLoading(false);
      return;
    }

    if (
      file &&
      !["image/svg+xml", "image/png", "image/jpeg"].includes(file.type)
    ) {
      Swal.fire({
        icon: "error",
        title: "Invalid file type",
        text: "Only SVG, PNG, and JPG are allowed.",
      });
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("id", serviceId);
    if (file) {
      console.log("File being uploaded:", file);
      formData.append("image", file);
      formData.append("image_name", file.name); // Add the file name to the form data
    }

    try {
      const response = await fetch(
        "https://homeservice.thefabulousshow.com/api/UpdateMediaUpload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            // Do not set Content-Type header here, browser will handle it
          },
          body: formData,
        }
      );

      const result = await response.json();
      console.log("Response:", result);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Media saved successfully.",
        }).then(() => {
          if (typeof setValue === "function") {
            setValue(3);
          }
        });
        handleRemoveFile(); // Reset file input
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: result.message || "Failed to update media.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while updating media. Please try again.",
      });
      console.error("Error during media upload:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("📦 MediaUpload Received Service ID:", serviceId);
  }, [serviceId]);

  const handlePublish = async () => {
    setPublishLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.get(
        `https://homeservice.thefabulousshow.com/api/DealPublish/${dealid}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Deal published successfully!");
    } catch (error) {
      toast.error("Error publishing the deal.");
    } finally {
      setPublishLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="Flatr"
          defaultValue={serviceId ? `${serviceId}` : "0"} // ✅ Using defaultValue instead of value
          className="focus-none border hidden"
          readOnly
        />
        <div
          className="upload-box border  mt-5 rounded-lg p-4 text-center cursor-pointer"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("image").click()}
        >
          <div className="upload-placeholder flex flex-col items-center justify-center h-[250px]">
            <img
              src={upload}
              alt="upload"
              className="w-[50px] mx-auto flex justify-center mb-4"
            />
            <p className="text-gray-500">
              <strong>
                {file
                  ? "File Uploaded Successfully"
                  : "Click to upload or drag and drop"}
              </strong>
            </p>
            <p className="text-sm text-gray-400">
              SVG, PNG, or JPG (max. 800×400px)
            </p>
            <input
              type="file"
              id="image"
              accept=".svg, .png, .jpg"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {file && (
          <div className="file-actions mt-4 flex items-center justify-between border rounded-lg p-2">
            <div className="flex items-center">
              <img src={fileicon} alt="fileicon" className="w-[20px]" />
              <p className="file-name text-sm font-medium ml-2">{file.name}</p>
              <p
                className="text-[#0F91D2] ml-8 cursor-pointer"
                onClick={handleShowPreview}
              >
                Show Preview
              </p>
            </div>
            <div className="flex px-4">
              <p className="file-size text-xs mr-2 text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <button
                type="button"
                className="text-red-500 font-bold text-xs"
                onClick={handleRemoveFile}
              >
                ✖
              </button>
            </div>
          </div>
        )}

        {showPreview && filePreview && (
          <div className="image-preview mt-4">
            <img
              src={filePreview}
              alt="Preview"
              className="rounded-lg border h-[300px] w-[300px]"
            />
          </div>
        )}

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
            {loading ? "Saving..." : "Save & Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MediaUpload;
