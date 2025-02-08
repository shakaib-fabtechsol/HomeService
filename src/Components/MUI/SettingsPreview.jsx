// import React, { useState } from "react";
// import upload from "../../assets/img/upload.png";
// import fileicon from "../../assets/img/fileicon.png";

// export default function SettingsPreview({ onFileSelect, fieldName }) {
//   const [file, setFile] = useState(null);
//   const [filePreview, setFilePreview] = useState(null);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile) {
//       setFile(uploadedFile);
//       setFilePreview(URL.createObjectURL(uploadedFile));
//       setShowPreview(false);
//       onFileSelect(uploadedFile, fieldName); // Pass selected file to parent
//     }
//   };

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     const uploadedFile = e.dataTransfer.files[0];
//     if (uploadedFile) {
//       setFile(uploadedFile);
//       setFilePreview(URL.createObjectURL(uploadedFile));
//       setShowPreview(false);
//       onFileSelect(e, fieldName);
//     }
//   };


//   const handleRemoveFile = () => {
//     setFile(null);
//     setFilePreview(null);
//     setShowPreview(false);
//     onFileSelect(null, fieldName); // Clear file from parent state
//   };

//   return (
//     <div className="file-upload-container">
//       {/* Upload Box */}
//       <div
//         className="upload-box w-full border border-solid border-[#cdcdcd] rounded-lg p-4 text-center cursor-pointer"
//         onDrop={handleFileDrop}
//         onDragOver={(e) => e.preventDefault()}
//         onClick={() => document.getElementById(`fileInput-${fieldName}`).click()}
//       >
//         {file ? (
//           <div className="upload-placeholder flex flex-col items-center justify-center min-h-[180px]">
//             <img src={upload} alt="upload" className="w-[50px] mb-4" />
//             <p className="text-gray-500">
//               <strong>File Uploaded Successfully</strong>
//             </p>
//             <p className="text-gray-500">
//               <strong>Click to upload</strong> or drag and drop to change image
//             </p>
//             <p className="text-sm text-gray-400">SVG, PNG, or JPG (max. 800×400px)</p>
//           </div>
//         ) : (
//           <div className="upload-placeholder flex flex-col items-center justify-center min-h-[180px]">
//             <img src={upload} alt="upload" className="w-[50px] mb-4" />
//             <p className="text-gray-500">
//               <strong>Click to upload</strong> or drag and drop
//             </p>
//             <p className="text-sm text-gray-400">SVG, PNG, or JPG (max. 800×400px)</p>
//           </div>
//         )}
//         <input
//           type="file"
//           id={`fileInput-${fieldName}`}
//           accept=".svg, .png, .jpg"
//           className="hidden"
//           onChange={handleFileChange}
//         />
//       </div>

//       {/* File Details and Actions */}
//       {file && (
//         <div className="file-actions mt-4">
//           <div className="file-info flex items-center justify-between border rounded-lg p-2">
//             <div className="flex items-center">
//               <img src={fileicon} alt="fileicon" className="w-[20px]" />
//               <div className="file-details ml-2">
//                 <p className="file-name text-sm font-medium">{file.name}</p>
//               </div>
//               <p
//                 className="show-preview text-[#0F91D2] mt-2 ms-8 cursor-pointer"
//                 onClick={() => setShowPreview(true)}
//               >
//                 Show Preview
//               </p>
//             </div>
//             <div className="flex px-4">
//               <p className="file-size text-xs me-2 text-gray-500">
//                 {(file.size / 1024 / 1024).toFixed(2)} MB
//               </p>
//               <button
//                 className="remove-file text-red-500 font-bold text-xs"
//                 onClick={handleRemoveFile}
//               >
//                 ✖
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Image Preview */}
//       {showPreview && filePreview && (
//         <div className="image-preview mt-4">
//           <img src={filePreview} alt="Preview" className="rounded-lg border border-gray-200 w-[200px]" />
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useState } from "react";
import upload from "../../assets/img/upload.png";
import fileicon from "../../assets/img/fileicon.png";

export default function SettingsPreview({ onFileSelect, fieldName }) {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  // Handle file drop from drag-and-drop
  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile)); // Set the preview image
      setShowPreview(true); // Show preview
      // Pass the file back to the parent component
      onFileSelect(e, fieldName);
    }
  };

  // Handle file selection via file input
  const handleFileClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".jpg,.png,.svg";
    fileInput.onchange = (e) => handleFileSelect(e);
    fileInput.click();
  };

  // Handle the file change (from file input)
  const handleFileSelect = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile)); // Set the preview image
      setShowPreview(true); // Show preview
      onFileSelect(e, fieldName); // Pass the file back to the parent
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFilePreview(null);
    setShowPreview(false);
  };

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
        {file ? (
          <div className="upload-placeholder flex flex-col items-center justify-center min-h-[180px]">
            <img src={upload} alt="upload" className="w-[50px] mb-4" />
            <p className="text-gray-500">
              <strong>File Uploaded Successfully</strong>
            </p>
            <p className="text-gray-500">
              <strong>Click to upload</strong> or drag and drop to change image
            </p>
            <p className="text-sm text-gray-400">SVG, PNG, or JPG (max. 800×400px)</p>
          </div>
        ) : (
          <div className="upload-placeholder flex flex-col items-center justify-center min-h-[180px]">
            <img src={upload} alt="upload" className="w-[50px] mb-4" />
            <p className="text-gray-500">
              <strong>Click to upload</strong> or drag and drop
            </p>
            <p className="text-sm text-gray-400">SVG, PNG, or JPG (max. 800×400px)</p>
          </div>
        )}
      </div>

      {file && (
        <div className="file-actions mt-4">
          <div className="file-info flex items-center justify-between border rounded-lg p-2">
            <div className="flex items-center">
              <img src={fileicon} alt="fileicon" className="w-[20px]" />
              <div className="file-details ml-2">
                <p className="file-name text-sm font-medium">{file.name}</p>
              </div>
              <p
                className="show-preview text-[#0F91D2] mt-2 ms-8 cursor-pointer"
                onClick={handleShowPreview}
              >
                Show Preview
              </p>
            </div>
            <div className="flex px-4">
              <p className="file-size text-xs me-2 text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
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
        <div className="image-preview mt-4">
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

