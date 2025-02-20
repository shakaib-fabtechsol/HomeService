import React, { useState, useEffect } from "react";
import upload from "../../assets/img/upload.png";
import fileicon from "../../assets/img/fileicon.png";

export default function SettingsPreview({
  onFileSelect,
  fieldName,
  existingImage,
}) {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(existingImage);
  const [showPreview, setShowPreview] = useState(false);
 
  useEffect(() => {
    if (existingImage) {
      setFilePreview(existingImage);
      setShowPreview(true);
    }
  }, [existingImage]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      handleFile(uploadedFile);
    }
  };
 
  const handleFileClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".jpg,.png,.svg,.mp4,.mov,.avi";
    fileInput.onchange = (e) => handleFileSelect(e);
    fileInput.click();
  };

  const handleFileSelect = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      handleFile(uploadedFile);
    }
  };

  // Handle file (image or video)
  const handleFile = (uploadedFile) => {
    setFile(uploadedFile);
    setFilePreview(URL.createObjectURL(uploadedFile)); // Set the preview URL
    setShowPreview(true); // Show preview
    onFileSelect({ target: { files: [uploadedFile] } }, fieldName); // Pass the file back to the parent
  };

  // Handle file removal
  const handleRemoveFile = () => {
    setFile(null);
    setFilePreview(null);
    setShowPreview(false);
    onFileSelect({ target: { files: [] } }, fieldName); // Pass an empty array to indicate file removal
  };

  // Handle showing preview
  const handleShowPreview = () => {
    setShowPreview(true);
  };

  return (
    <div
      className="file-upload-container"
      onDrop={handleFileDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div
        className="upload-box w-full border border-solid border-1 border-[#cdcdcd] rounded-lg p-4 text-center cursor-pointer"
        onClick={handleFileClick}
      >
        {file || existingImage ? (
          <div className="upload-placeholder flex flex-col items-center justify-center min-h-[180px]">
            <img src={upload} alt="upload" className="w-[50px] mb-4" />
            <p className="text-gray-500">
              <strong>File Uploaded Successfully</strong>
            </p>
            <p className="text-gray-500">
              <strong>Click to upload</strong> or drag and drop to change file
            </p>
            <p className="text-sm text-gray-400">
              SVG, PNG, JPG, MP4, MOV, or AVI (max. 800×400px)
            </p>
          </div>
        ) : (
          <div className="upload-placeholder flex flex-col items-center justify-center min-h-[180px]">
            <img src={upload} alt="upload" className="w-[50px] mb-4" />
            <p className="text-gray-500">
              <strong>Click to upload</strong> or drag and drop
            </p>
            <p className="text-sm text-gray-400">
              SVG, PNG, JPG, MP4, MOV, or AVI (max. 800×400px)
            </p>
          </div>
        )}
      </div>

      {(file || existingImage) && (
        <div className="file-actions mt-4">
          <div className="file-info flex items-center justify-between border rounded-lg p-2">
            <div className="flex items-center">
              <img src={fileicon} alt="fileicon" className="w-[20px]" />
              <div className="file-details ml-2">
                <p className="file-name text-sm font-medium">
                  {file ? file.name : "Existing File"}
                </p>
              </div>
              <p
                className="show-preview text-[#0F91D2] mt-2 ms-8 cursor-pointer"
                onClick={handleShowPreview}
              >
                Show Preview
              </p>
            </div>
            <div className="flex px-4">
              {file && (
                <p className="file-size text-xs me-2 text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              )}
              <button
                className="remove-file text-red-500 font-bold text-xs"
                onClick={handleRemoveFile}
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      )}

{showPreview && filePreview && (
  <div className="file-preview mt-4">
    <img
      src={filePreview}
      alt="Preview"
      className="rounded-lg border border-gray-200 w-[200px]"
    />
  </div>
)}
    </div>
  );
}