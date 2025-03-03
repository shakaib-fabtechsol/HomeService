import React, { useEffect, useState } from "react";
import { MenuItem, Select, TextField, Button } from "@mui/material";
import SettingsPreview from "../MUI/SettingsPreview";
import profileImg from "../../assets/img/service3.png";
import Loader from "../../Components/MUI/Loader";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useFormik } from "formik";

const phoneRegExp = /^\+1\(\d{3}\) \d{3} \d{4}$/;

const MyDetail = () => {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  const userId = localStorage.getItem("id");

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Full Name is required";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegExp.test(values.phone)) {
      errors.phone = "Phone number must be in the format +1(000) 000 0000";
    }

    return errors;
  };

  const handlePublish = async () => {
    if (loading) return;

    const userId = localStorage.getItem("id");
    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "User ID is required!",
      });
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No token found. Please log in.",
      });
      setLoading(false);
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
        // Optionally update local state if needed:
        // e.g., setPublishValue(response.data.publish);
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
          text: response.data.message || "Failed to update setting.",
          confirmButtonColor: "#D33",
        });
      }
    } catch (error) {
      console.error("Error updating setting:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error updating the setting.",
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      personal_image: "",
      sales_referred: "No",
      sales_representative: "",
    },
    validate,
    onSubmit: async (values) => {
      if (loading) return;
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found. Please log in.");
        setLoading(false);
        return;
      }
      try {
        const data = new FormData();
        Object.keys(values).forEach((key) => {
          data.append(key, values[key]);
        });
        data.append("id", userId);
        await axios.post(
          "http://216.37.42.152:8004/api/MyDetails",
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
        toast.error("Error updating profile.");
      } finally {
        setLoading(false);
      }
    },
  });

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
          `http://216.37.42.152:8004/api/UserDetails/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const BasicInfo = response?.data?.user;
        if (BasicInfo) {
          const imagePath = BasicInfo?.personal_image;
          const imageUrl = imagePath
            ? `http://216.37.42.152:8004/uploads/${imagePath}`
            : "/default.png";
          const selectedSalesRep = options.find(
            (option) => option.value === BasicInfo?.sales_representative
          );
          formik.setValues({
            name: BasicInfo?.name || "",
            email: BasicInfo?.email || "",
            phone: BasicInfo?.phone || "",
            sales_referred: BasicInfo?.sales_referred || "",
            personal_image: imageUrl,
          });
          setSelectedOption(selectedSalesRep || null);
          setIsApiLoaded(true);
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    formik.setFieldValue(fieldName, file);
  };

  const handleRefferChange = (e) => {
    const selectedValue = e.target.value;
    formik.setFieldValue("sales_referred", selectedValue);
    if (selectedValue === "No") {
      formik.setFieldValue("sales_representative", "");
      setSelectedOption(selectedValue);
    }
  };

  const options = [
    { value: "1", label: "John Doe", avatar: profileImg },
    { value: "2", label: "Jane Smith", avatar: profileImg },
    { value: "3", label: "Chris Evans", avatar: profileImg },
  ];

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedRep = options.find(
      (option) => option.value === selectedValue
    );
    setSelectedOption(selectedRep);
    formik.setFieldValue("sales_representative", selectedValue);
  };

  return (
    <>
      {loading || !isApiLoaded ? (
        <Loader />
      ) : (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
                <p className="text-lg font-semibold text-[#181D27]">
                  Personal Profile
                </p>
                <p className="text-[#535862] text-sm">
                  Update your personal profile details.
                </p>
              </div>
              <div className="max-w-[1000px]">
                {/* Full Name */}
                <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="name">
                      Full Name
                    </label>
                    <p className="text-[#535862] text-sm">
                      This will be displayed on your profile.
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      variant="outlined"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="email">
                      Email Address
                    </label>
                    <p className="text-[#535862] text-sm">
                      This is for when we need to contact you about your
                      personal profile. This will not be publicly displayed.
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      variant="outlined"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="phone">
                      Phone Number
                    </label>
                    <p className="text-[#535862] text-sm">
                      This is for when we need to contact you about your
                      personal profile. This will not be publicly displayed.
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      variant="outlined"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                      placeholder="+1(000) 000 0000"
                    />
                  </div>
                </div>

                {/* Personal Profile Photo */}
                <div className="grid md:grid-cols-3 gap-2 py-8 border-b">
                  <div>
                    <p className="text-sm font-semibold text-[#414651]">
                      Personal Profile Photo
                    </p>
                    <p className="text-[#535862] text-sm">
                      This is your personal profile, this will not be publicly
                      displayed.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <SettingsPreview
                      onFileSelect={(e) =>
                        handleFileChange(e, "personal_image")
                      }
                      fieldName="personal_image"
                      existingImage={formik.values.personal_image || profileImg}
                    />
                  </div>
                </div>

                {/* Sales Referred */}
                <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                  <div>
                    <label
                      className="text-sm font-semibold"
                      htmlFor="sales_referred"
                    >
                      Were you referred by a Sales Representative?
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <select
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      id="sales_referred"
                      name="sales_referred"
                      value={formik.values.sales_referred}
                      onChange={handleRefferChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik.touched.sales_referred &&
                      formik.errors.sales_referred && (
                        <div className="text-red-500 text-sm">
                          {formik.errors.sales_referred}
                        </div>
                      )}
                  </div>
                </div>

                {/* Sales Representative Select (conditional) */}
                {formik.values.sales_referred === "Yes" && (
                  <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                    <div>
                      <label
                        className="text-sm font-semibold"
                        htmlFor="sales_representative"
                      >
                        Select Sales Representative
                      </label>
                    </div>
                    <div className="sm:col-span-2">
                      <Select
                        labelId="sales_representative"
                        value={selectedOption?.value || ""}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          const selectedOpt = options.find(
                            (option) => option.value === selected
                          );
                          return (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {selectedOpt && (
                                <img
                                  src={selectedOpt.avatar}
                                  alt="img"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    borderRadius: "50%",
                                    marginRight: "8px",
                                  }}
                                />
                              )}
                              {selectedOpt ? selectedOpt.label : ""}
                            </div>
                          );
                        }}
                        sx={{
                          border: "1px solid #D5D7DA !important",
                          borderRadius: "8px",
                          boxShadow: "0px 1px 2px 0px #0A0D120D",
                          outline: "none",
                          width: "100%",
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #D5D7DA",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#D5D7DA !important",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            <img
                              src={option.avatar}
                              alt="img"
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                marginRight: "8px",
                              }}
                            />
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.touched.sales_representative &&
                        formik.errors.sales_representative && (
                          <div className="text-red-500 text-sm">
                            {formik.errors.sales_representative}
                          </div>
                        )}
                    </div>
                  </div>
                )}
              </div>

              {/* Form Buttons */}
              <div className="flex justify-end mt-4">
                <input
                  type="text"
                  id="Flatr"
                  defaultValue={formik.values?.id ? `${formik.values.id}` : "0"}
                  className="focus-none border hidden"
                  readOnly
                />
                <Button
                  type="reset"
                  onClick={() => formik.resetForm()}
                  variant="outlined"
                  sx={{ width: "150px", py: "10px", mr: 2 }}
                >
                  Cancel
                </Button>

                
                <button
                  type="button"
                  onClick={handlePublish}
                  disabled={loading}
                  className="border rounded-lg w-[150px] py-[10px] text-white font-semibold bg-[#0F91D2] mr-2"
                >
                  {loading ? "Publishing..." : "Publish"}
                </button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "150px",
                    py: "10px",
                    backgroundColor: "#0F91D2",
                    fontWeight: "bold",
                    "&:disabled": {
                      opacity: 0.5,
                      cursor: "not-allowed",
                    },
                  }}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default MyDetail;
