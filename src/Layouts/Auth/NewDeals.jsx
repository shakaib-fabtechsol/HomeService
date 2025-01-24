import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function NewDeals() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [selectedRate, setSelectedRate] = useState(""); // State to track selected pricing model

  const handleRateChange = (event) => {
    setSelectedRate(event.target.value); // Update state based on selected radio button
  };
  const [file, setFile] = useState(null); // Stores the uploaded file
  const [filePreview, setFilePreview] = useState(null); // Stores the file preview URL

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile)); // Generate a preview URL
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile)); // Generate a preview URL
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFilePreview(null);
  };

  return (
    <div>
      <div className="flex items-center">
        <Link to="/services">
          <FaArrowLeft className="me-4 text-xl" />
        </Link>
        <h2 className="text-2xl font-semibold">Create New Deal</h2>
      </div>
      <p className="text-[#535862] mt-4 ms-8">
        Create, manage, and organize your deals effortlessly.
      </p>
      <Box sx={{ width: "100%", typography: "body1", marginTop: "20px" }}>
        <Box>
          <Tabs
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              "& .MuiTab-root": {
                color: "#717680",
                fontWeight: "600",
                fontFamily: "inter",
              },
              "& .Mui-selected": {
                color: "#0F91D2 !important",
                borderBottom: "solid 4px #0F91D2",
                fontFamily: "inter",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Basic Info" />
            <Tab label="Pricing & Packages" />
            <Tab label="Media Uploads" />
            <Tab label="Review & Publish" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <form action="#">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-7 mt-4">
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
              <div className="col-span-12 md:col-span-7 mt-4">
                <p className="font-semibold">Service Type</p>
                <div className="flex mt-4">
                  <div className="flex">
                    <input
                      type="radio"
                      id="Commercial"
                      name="type"
                      className="myinput me-4"
                    />
                    <label htmlFor="Commercial">Commercial</label>
                  </div>
                  <div className="flex ms-8">
                    <input
                      type="radio"
                      id="Residential"
                      name="type"
                      className="myinput me-4"
                    />
                    <label htmlFor="Residential">Residential</label>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Category" className="font-semibold">
                    Service Category
                  </label>
                  <select
                    name=""
                    id="Category"
                    className="myselect pe-[30px] focus-none"
                  >
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 4</option>
                  </select>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Tags" className="font-semibold">
                    Search Tags
                  </label>
                  <input
                    type="text"
                    id="Tags"
                    placeholder="Enter Tag"
                    className="myinput focus-none"
                  />
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
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Description" className="font-semibold">
                    Fine Print{" "}
                    <span className="text-[13px] text-[#cdcdcd]">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    name="Description"
                    id="Description"
                    className="myinput focus-none"
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
                    {" "}
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <form>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-10 mt-4">
                <p className="font-semibold">Pricing Model</p>
                <div className="flex justify-between mt-4">
                  <div className="flex">
                    <input
                      type="radio"
                      id="Flat"
                      name="Rate"
                      value="Flat"
                      className="myinput me-4"
                      onChange={handleRateChange}
                      checked={selectedRate === "Flat"}
                    />
                    <label htmlFor="Flat">Flat Rate</label>
                  </div>
                  <div className="flex ms-8">
                    <input
                      type="radio"
                      id="Hourly"
                      name="Rate"
                      value="Hourly"
                      className="myinput me-4"
                      onChange={handleRateChange}
                      checked={selectedRate === "Hourly"}
                    />
                    <label htmlFor="Hourly">Hourly Rate</label>
                  </div>
                  <div className="flex ms-8">
                    <input
                      type="radio"
                      id="Custom"
                      name="Rate"
                      value="Custom"
                      className="myinput me-4"
                      onChange={handleRateChange}
                      checked={selectedRate === "Custom"}
                    />
                    <label htmlFor="Custom">Custom Package</label>
                  </div>
                </div>
              </div>

              {/* Flat Rate Fields */}
              {selectedRate === "Flat" && (
                <>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Flatr" className="font-semibold">
                        Flat Rate Price
                      </label>
                      <input
                        type="text"
                        id="Flatr"
                        placeholder="$100"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="BuyNow" className="font-semibold">
                        Buy Now Discount
                      </label>
                      <input
                        type="text"
                        id="BuyNow"
                        placeholder="10 %"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Finalp" className="font-semibold">
                        Final List Price
                      </label>
                      <input
                        type="text"
                        id="Finalp"
                        placeholder="10 %"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Estimated" className="font-semibold">
                        Estimated Service Time
                      </label>
                      <input
                        type="text"
                        id="Estimated"
                        placeholder="01 Day"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Hourly Rate Fields */}
              {selectedRate === "Hourly" && (
                <>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Hourlyr" className="font-semibold">
                        Hourly Rate
                      </label>
                      <input
                        type="text"
                        id="Hourlyr"
                        placeholder="$25/hour"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Discount" className="font-semibold">
                        Discount
                      </label>
                      <input
                        type="text"
                        id="Discount"
                        placeholder="10 %"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Final" className="font-semibold">
                        Final List Price
                      </label>
                      <input
                        type="text"
                        id="Final"
                        placeholder="USD: 40"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Estimated" className="font-semibold">
                        Estimated Service Time
                      </label>
                      <input
                        type="text"
                        id="Estimated"
                        placeholder="2 Hours"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Custom Package Fields */}
              {selectedRate === "Custom" && (
                <>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="PackagePrice" className="font-semibold">
                        Package Price
                      </label>
                      <input
                        type="text"
                        id="PackagePrice"
                        placeholder="Enter package price"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="CustomDiscount" className="font-semibold">
                        Custom Discount
                      </label>
                      <input
                        type="text"
                        id="CustomDiscount"
                        placeholder="Enter custom discount"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="col-span-12 mt-4">
                <div className="flex justify-end">
                  <button
                    type="reset"
                    className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                    onClick={() => setSelectedRate("")}
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
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className="file-upload-container">
      {/* Upload Box */}
      <div
        className="upload-box border-dashed border-2 border-gray-400 rounded-lg p-4 text-center cursor-pointer"
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById("fileInput").click()}
      >
        {file ? (
          <p className="text-gray-500">File uploaded successfully!</p>
        ) : (
          <div className="upload-placeholder">
            <p className="text-gray-500">
              <strong>Click to upload</strong> or drag and drop
            </p>
            <p className="text-sm text-gray-400">
              SVG, PNG, or JPG (max. 800×400px)
            </p>
          </div>
        )}
        <input
          type="file"
          id="fileInput"
          accept=".svg, .png, .jpg"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Preview Section */}
      {file && (
        <div className="file-preview mt-4">
          <div className="flex items-center justify-between border rounded-lg p-2">
            <div className="file-info flex items-center">
              <span className="file-icon bg-blue-500 text-white p-2 rounded-md">
                📁
              </span>
              <div className="file-details ml-2">
                <p className="file-name text-sm font-medium">{file.name}</p>
                <p className="file-size text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              className="remove-file text-red-500 font-bold text-xs"
              onClick={handleRemoveFile}
            >
              ✖
            </button>
          </div>
          {/* Image Preview */}
          {filePreview && (
            <div className="image-preview mt-4">
              <img
                src={filePreview}
                alt="Preview"
                className="rounded-lg border border-gray-200 max-w-full"
              />
            </div>
          )}
        </div>
      )}
    </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </div>
  );
}

export default NewDeals;
