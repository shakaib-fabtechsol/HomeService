import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import down from "../../assets/img/chevronDown.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const PricingPackaging = ({ serviceId, setValue }) => {
  const navigate = useNavigate();
  const { dealid } = useParams();

  const [loading, setLoading] = useState(false);
  const [formdata, setFormData] = useState({
    id: "",
    pricing_model: "",
    flat_rate_price: "",
    flat_by_now_discount: "",
    flat_final_list_price: "",
    flat_estimated_service_time: "",
    hourly_rate: "",
    discount: "",
    hourly_final_list_price: "",
    hourly_estimated_service_time: "",
    title1: "",
    deliverable1: "",
    price1: "",
    by_now_discount1: "",
    final_list_price1: "",
    estimated_service_timing1: "",
    title2: "",
    deliverable2: "",
    price2: "",
    by_now_discount2: "",
    final_list_price2: "",
    estimated_service_timing2: "",
    title3: "",
    deliverable3: "",
    price3: "",
    by_now_discount3: "",
    final_list_price3: "",
    estimated_service_timing3: "",
  });

  const [selectedRate, setSelectedRate] = useState("Flat");
  const [flatRatePrice, setFlatRatePrice] = useState("");
  const [buyNowDiscount, setBuyNowDiscount] = useState("");
  const [finalListPrice, setFinalListPrice] = useState("");
  const [estimatedServiceTime, setEstimatedServiceTime] = useState("");

  const [hourlyRate, setHourlyRate] = useState("");
  const [hourlyDiscount, setHourlyDiscount] = useState("");
  const [hourlyFinalListPrice, setHourlyFinalListPrice] = useState("");
  const [hourlyEstimatedServiceTime, setHourlyEstimatedServiceTime] =
    useState("");

  const [title1, settitle1] = useState("");
  const [deliverable1, setdeliverable1] = useState("");
  const [price1, setprice1] = useState("");
  const [by_now_discount1, setby_now_discount1] = useState("");
  const [final_list_price1, setfinal_list_price1] = useState("");
  const [estimated_service_timing1, setestimated_service_timing1] =
    useState("");

  const [title2, settitle2] = useState("");
  const [deliverable2, setdeliverable2] = useState("");
  const [price2, setprice2] = useState("");
  const [by_now_discount2, setby_now_discount2] = useState("");
  const [final_list_price2, setfinal_list_price2] = useState("");
  const [estimated_service_timing2, setestimated_service_timing2] =
    useState("");

  const [title3, settitle3] = useState("");
  const [deliverable3, setdeliverable3] = useState("");
  const [price3, setprice3] = useState("");
  const [by_now_discount3, setby_now_discount3] = useState("");
  const [final_list_price3, setfinal_list_price3] = useState("");
  const [estimated_service_timing3, setestimated_service_timing3] =
    useState("");

  useEffect(() => {
    console.log("📦 PricingPackaging Received Service ID:", serviceId); // ✅ Debugging
  }, [serviceId]);

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

          if (BasicInfo) {
            setFormData({
              id: BasicInfo.id || "",
              pricing_model: BasicInfo.pricing_model || "",
              estimated_service_time: BasicInfo.estimated_service_time || "",

              ...(BasicInfo.pricing_model === "Flat"
                ? {
                    flat_rate_price: BasicInfo.flat_rate_price || "",
                    flat_by_now_discount: BasicInfo.flat_by_now_discount || "",
                    flat_final_list_price:
                      BasicInfo.flat_final_list_price || "",
                    flat_estimated_service_time:
                      BasicInfo.flat_estimated_service_time || "",
                  }
                : BasicInfo.pricing_model === "Hourly"
                ? {
                    hourly_rate: BasicInfo.hourly_rate || "",
                    discount: BasicInfo.discount || "",
                    hourly_final_list_price:
                      BasicInfo.hourly_final_list_price || "",
                    hourly_estimated_service_time:
                      BasicInfo.hourly_estimated_service_time || "",
                  }
                : BasicInfo.pricing_model === "Custom"
                ? {
                    title1: BasicInfo.title1 || "",
                    deliverable1: BasicInfo.deliverable1 || "",
                    price1: BasicInfo.price1 || "",
                    by_now_discount1: BasicInfo.by_now_discount1 || "",
                    final_list_price1: BasicInfo.final_list_price1 || "",
                    estimated_service_timing1:
                      BasicInfo.estimated_service_timing1 || "",

                    title2: BasicInfo.title2 || "",
                    deliverable2: BasicInfo.deliverable2 || "",
                    price2: BasicInfo.price2 || "",
                    by_now_discount2: BasicInfo.by_now_discount2 || "",
                    final_list_price2: BasicInfo.final_list_price2 || "",
                    estimated_service_timing2:
                      BasicInfo.estimated_service_timing2 || "",

                    title3: BasicInfo.title3 || "",
                    deliverable3: BasicInfo.deliverable3 || "",
                    price3: BasicInfo.price3 || "",
                    by_now_discount3: BasicInfo.by_now_discount3 || "",
                    final_list_price3: BasicInfo.final_list_price3 || "",
                    estimated_service_timing3:
                      BasicInfo.estimated_service_timing3 || "",
                  }
                : {}),
            });
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
  const handleRateChange = (event) => {
    const newRate = event.target.value;

    setSelectedRate(newRate);
    setFormData((prevData) => ({
      ...prevData,
      pricing_model: newRate,
    }));
  };

  const formatCurrency = (value, key) => {
    if (!value) return "";
    const numericValue = value.toString().replace(/[^0-9.]/g, "");
    if (key === "flat_by_now_discount" || key==="discount" || key==="by_now_discount1" || key==="by_now_discount2" || key==="by_now_discount3") {
      return `${numericValue} %`;
    }

    return `$${numericValue}`;
  };
  
  const parseCurrency = (value, key) => {
    if (!value) return "";
    let numericValue = value.replace(/[^0-9.]/g, "");
   
    if (key === "flat_by_now_discount" || key==="discount" || key==="by_now_discount1" || key==="by_now_discount2" || key==="by_now_discount3") {
      return numericValue;
    }
    return numericValue;
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      setLoading(false);
      return;
    }

    let formdata = {
      id: serviceId,
      pricing_model: selectedRate,
    };

    if (selectedRate === "Flat") {
      formdata = {
        ...formdata,
        flat_rate_price: e.target.flat_rate_price?.value,
        flat_by_now_discount: e.target.flat_by_now_discount?.value,
        flat_final_list_price: e.target.flat_final_list_price?.value,
        flat_estimated_service_time:
          e.target.flat_estimated_service_time?.value,
      };
    } else if (selectedRate === "Hourly") {
      formdata = {
        ...formdata,
        hourly_rate: e.target.hourly_rate.value,
        discount: e.target.discount ? e.target.discount?.value : null,
        hourly_final_list_price: e.target.hourly_final_list_price?.value,
        hourly_estimated_service_time:
          e.target.hourly_estimated_service_time?.value,
      };
    } else if (selectedRate === "Custom") {
      formdata = {
        ...formdata,
        title1: e.target.title1?.value,
        deliverable1: e.target.deliverable1?.value,
        price1: e.target.price1?.value,
        by_now_discount1: e.target.by_now_discount1?.value,
        final_list_price1: e.target.final_list_price1?.value,
        estimated_service_timing1: e.target?.estimated_service_timing1?.value,

        title2: e.target.title2?.value,
        deliverable2: e.target.deliverable2?.value,
        price2: e.target.price2?.value,
        by_now_discount2: e.target.by_now_discount2?.value,
        final_list_price2: e.target.final_list_price2?.value,
        estimated_service_timing2: e.target?.estimated_service_timing2?.value,

        title3: e.target.title3?.value,
        deliverable3: e.target.deliverable3?.value,
        price3: e.target.price3?.value,
        by_now_discount3: e.target.by_now_discount3?.value,
        final_list_price3: e.target.final_list_price3?.value,
        estimated_service_timing3: e.target?.estimated_service_timing3?.value,
      };
    }

    try {
      const response = await fetch(
        "https://homeservice.thefabulousshow.com/api/UpdatePriceAndPackage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formdata),
        }
      );

      const textResponse = await response.text();
      console.log("Response Text:", textResponse);

      let result;
      try {
        result = JSON.parse(textResponse);
      } catch (error) {
        console.error("Error parsing response:", error);
        throw new Error("Response is not JSON");
      }

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Pricing details saved successfully.",
          confirmButtonColor: "#0F91D2",
        }).then(() => {
          setValue(2); // Switch to Pricing & Packages tab (index 1)
        });

        e.target.reset();
        setSelectedRate("Flat");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: result.message || "Failed to update pricing details.",
          confirmButtonColor: "#D33",
        });
      }
    } catch (error) {
      console.error("Error updating pricing:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while updating pricing. Please try again.",
        confirmButtonColor: "#D33",
      });
    } finally {
      setLoading(false); // Ensure loading state is cleared
    }
  };

  const handleInputChange = (e, key) => {
    const rawValue = parseCurrency(e.target.value);
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: rawValue };

      if (updatedData.flat_rate_price && updatedData.flat_by_now_discount) {
        const flatRate = parseFloat(updatedData.flat_rate_price) || 0;
        const discount = parseFloat(updatedData.flat_by_now_discount) || 0;
        updatedData.flat_final_list_price = (
          flatRate -
          (flatRate * discount) / 100
        ).toFixed(2);
      }

      return updatedData;
    });
  };

  const handleHourlyInputChange = (e, key) => {
    const rawValue = parseCurrency(e.target.value);
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: rawValue };

      if (updatedData.hourly_rate && updatedData.discount) {
        const hourlyRate = parseFloat(updatedData.hourly_rate) || 0;
        const discount = parseFloat(updatedData.discount) || 0;
        updatedData.hourly_final_list_price = (
          hourlyRate -
          (hourlyRate * discount) / 100
        ).toFixed(2);
      }

      return updatedData;
    });
  };

  const handlePriceInputChange = (e, key) => {
    const rawValue = parseCurrency(e.target.value);
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: rawValue };
      if (updatedData.price1 && updatedData.by_now_discount1) {
        const price = parseFloat(updatedData.price1) || 0;
        const discount = parseFloat(updatedData.by_now_discount1) || 0;
        updatedData.final_list_price1 = (
          price -
          (price * discount) / 100
        ).toFixed(2);
      }

      return updatedData;
    });
  };

  const handlePriceInputChanged = (e, key) => {
    const rawValue = parseCurrency(e.target.value);
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: rawValue };
      if (updatedData.price2 && updatedData.by_now_discount2) {
        const price = parseFloat(updatedData.price2) || 0;
        const discount = parseFloat(updatedData.by_now_discount2) || 0;
        updatedData.final_list_price2 = (
          price -
          (price * discount) / 100
        ).toFixed(2);
      }

      return updatedData;
    });
  };

  const handlePriceInput = (e, key) => {
    const rawValue = parseCurrency(e.target.value);
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: rawValue };
      if (updatedData.price3 && updatedData.by_now_discount3) {
        const price = parseFloat(updatedData.price3) || 0;
        const discount = parseFloat(updatedData.by_now_discount3) || 0;
        updatedData.final_list_price3 = (
          price -
          (price * discount) / 100
        ).toFixed(2);
      }

      return updatedData;
    });
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 mt-4">
            <input
              type="text"
              id="Flatr"
              value={formdata.id || "0"}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, id: e.target.value }))
              }
              className="focus-none border hidden"
              readOnly
            />

            <div className="flex flex-wrap justify-between mt-4">
              <div className="flex me-8">
                <input
                  type="radio"
                  id="Flat"
                  name="Rate"
                  value="Flat"
                  className="myinput me-4"
                  onChange={handleRateChange}
                  checked={formdata.pricing_model == "Flat"}
                />
                <label htmlFor="Flat">Flat Rate</label>
              </div>

              <div className="flex me-8">
                <input
                  type="radio"
                  id="Hourly"
                  name="Rate"
                  value="Hourly"
                  className="myinput me-4"
                  onChange={handleRateChange}
                  checked={formdata.pricing_model == "Hourly"}
                />
                <label htmlFor="Hourly">Hourly Rate</label>
              </div>

              <div className="flex me-8">
                <input
                  type="radio"
                  id="Custom"
                  name="Rate"
                  value="Custom"
                  className="myinput me-4"
                  onChange={handleRateChange}
                  checked={formdata.pricing_model == "Custom"}
                />
                <label htmlFor="Custom">Custom Package</label>
              </div>
            </div>
          </div>

          {selectedRate === "Flat" && (
            <>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Flatr" className="font-semibold">
                    Flat Rate Price
                  </label>
                  <input
                    type="text"
                    id="flat_rate_price"
                    placeholder="Enter price"
                    value={formatCurrency(formdata.flat_rate_price || "")}
                    onChange={(e) => handleInputChange(e, "flat_rate_price")}
                    className="myinput focus-none"
                  />
                </div>
              </div>

              {/* Buy Now Discount */}
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="BuyNow" className="font-semibold">
                    Buy Now Discount (%)
                  </label>
                  <input
                    type="text"
                    id="flat_by_now_discount"
                    placeholder="10 %"
                    value={formatCurrency(formdata.flat_by_now_discount, "flat_by_now_discount")}
                    onChange={(e) =>
                      handleInputChange(e, "flat_by_now_discount")
                    }
                    className="myinput focus-none"
                  />
                </div>
              </div>

              {/* Final List Price (Calculated) */}
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Finalp" className="font-semibold">
                    Final List Price
                  </label>
                  <input
                    type="text"
                    id="flat_final_list_price"
                    placeholder="%90"
                    value={formatCurrency(formdata.flat_final_list_price || "")}
                    readOnly
                    className="myinput focus-none"
                  />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Estimated" className="font-semibold">
                    Estimated Service Time
                  </label>
                  <select
                    id="flat_estimated_service_time"
                    className="myselect pe-[30px] focus-none"
                    value={formdata.flat_estimated_service_time || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        flat_estimated_service_time: e.target.value,
                      }))
                    }
                  >
                    <option value="" hidden>
                      How soon can you get it scheduled?
                    </option>
                    <option value="Same day">Same day</option>
                    <option value="2 days">2 days</option>
                    <option value="3 days">3 days</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {selectedRate === "Hourly" && (
            <>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="HourlyRate" className="font-semibold">
                    Hourly Rate
                  </label>
                  <input
                    type="text"
                    id="hourly_rate"
                    placeholder="$25/hour"
                    value={formatCurrency(formdata.hourly_rate || "")}
                    onChange={(e) => handleHourlyInputChange(e, "hourly_rate")}
                    className="myinput focus-none"
                  />
                </div>
              </div>

              {/* Discount */}
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="HourlyDiscount" className="font-semibold">
                    Discount (%)
                  </label>
                  <input
                    type="text"
                    id="discount"
                    placeholder="10 %"
                    value={formatCurrency(formdata.discount,"discount")}
                    onChange={(e) => handleHourlyInputChange(e, "discount")}
                    className="myinput focus-none"
                  />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="HourlyFinalPrice" className="font-semibold">
                    Final List Price
                  </label>
                  <input
                    type="text"
                    id="hourly_final_list_price"
                    placeholder="$90"
                    value={formatCurrency(
                      formdata.hourly_final_list_price || ""
                    )}
                    readOnly
                    className="myinput focus-none"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="HourlyEstimatedTime"
                    className="font-semibold"
                  >
                    Estimated Service Time
                  </label>
                  <select
                    id="hourly_estimated_service_time"
                    className="myselect pe-[30px] focus-none"
                    value={formatCurrency(
                      formdata.hourly_estimated_service_time || ""
                    )}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        hourly_estimated_service_time: e.target.value,
                      }))
                    }
                  >
                    <option value="" hidden>
                      How soon can you get it scheduled?
                    </option>
                    <option value="Same day">Same day</option>
                    <option value="2 days">2 days</option>
                    <option value="3 days">3 days</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {selectedRate === "Custom" && (
            <>
              <div className="col-span-12 mt-6">
                <p className="text-lg font-semibold">Pricing Packages</p>
                <div className="bg-[#FAFAFA] rounded-[12px] p-5 mt-6">
                  <div>
                    <div className="grid lg:grid-cols-3 gap-5">
                      <div>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-medium">Tier 1</p>
                          <HiOutlineTrash className="text-[20px]" />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="title1"
                          >
                            Title
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="Title"
                            id="title1"
                            value={formdata.title1 || ""}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                title1: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="deliverable1"
                          >
                            Deliverables
                          </label>
                          <textarea
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            name="deliverable1"
                            id="deliverable1"
                            value={formdata.deliverable1}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                deliverable1: e.target.value,
                              }))
                            }
                            placeholder="Write here.."
                          ></textarea>
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="price1"
                          >
                            Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$50"
                            id="price1"
                            onChange={(e) =>
                              handlePriceInputChange(e, "price1")
                            }
                            value={formatCurrency(formdata.price1 || "")}
                          />
                        </div>

                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="by_now_discount1"
                          >
                            Buy Now Discount (%)
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="10 %"
                            id="by_now_discount1"
                            onChange={(e) =>
                              handlePriceInputChange(e, "by_now_discount1")
                            }
                            value={formatCurrency(formdata.by_now_discount1 ,"by_now_discount1")}
                           
                          />
                        </div>

                     
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="final_list_price1"
                          >
                            Final List Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$90"
                            id="final_list_price1"
                            value={formatCurrency(formdata.final_list_price1 || "")}
                            readOnly
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="estimated_service_timing1"
                          >
                            Estimated Service Timing
                          </label>
                          <select
                            style={{
                              backgroundImage: `url(${down})`,
                              backgroundPosition: "calc(100% - 10px) center",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none appearance-none"
                            name="estimated_service_timing1"
                            id="estimated_service_timing1"
                            
                            value={formatCurrency(
                              formdata.estimated_service_timing1)}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                estimated_service_timing1: e.target.value,
                              }))
                            }
                          >
                            <option value="" disabled hidden>
                              How soon can you get it scheduled?
                            </option>
                            <option value="1">1 Day</option>
                            <option value="2">2 Days</option>
                            <option value="3">3 Days</option>
                            <option value="4">4 Days</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-medium">Tier 2</p>
                          <HiOutlineTrash className="text-[20px]" />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="title2"
                          >
                            Title
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="Title"
                            id="title2"
                            value={formdata.title2 || ""}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                title2: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="deliverable2"
                          >
                            Deliverables
                          </label>
                          <textarea
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            name="deliverable2"
                            id="deliverable2"
                            value={formdata.deliverable2}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                deliverable2: e.target.value,
                              }))
                            }
                            placeholder="Write here.."
                          ></textarea>
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="price2"
                          >
                            Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$50"
                            id="price2"
                            onChange={(e) =>
                              handlePriceInputChanged(e, "price2")
                            }
                            value={formatCurrency(formdata.price2 || "")}
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="by_now_discount2"
                          >
                            Buy Now Discount
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="10 %"
                            id="by_now_discount2"
                            onChange={(e) =>
                              handlePriceInputChanged(e, "by_now_discount2")
                            }
                            value={formatCurrency(formdata.by_now_discount2 ,"by_now_discount2" )}
                          
                            
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="final_list_price2"
                          >
                            Final List Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$90"
                            id="final_list_price2"
                            onChange={(e) =>
                              handlePriceInputChanged(e, "final_list_price2")
                            }
                            value={formatCurrency(formdata.final_list_price2 || "")}
                           
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="estimated_service_timing2"
                          >
                            Estimated Service Timing
                          </label>
                          <select
                            style={{
                              backgroundImage: `url(${down})`,
                              backgroundPosition: "calc(100% - 10px) center",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none appearance-none"
                            name="estimated_service_timing2"
                            id="estimated_service_timing2"
                            value={formdata.estimated_service_timing2}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                estimated_service_timing2: e.target.value,
                              }))
                            }
                          >
                            <option value="" disabled hidden>
                              How soon can you get it scheduled?
                            </option>
                            <option value="1">1 Day</option>
                            <option value="2">2 Days</option>
                            <option value="3">3 Days</option>
                            <option value="4">4 Days</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-medium">Tier 3</p>
                          <HiOutlineTrash className="text-[20px]" />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="title3"
                          >
                            Title
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="Title"
                            id="title3"
                            value={formdata.title3 || ""}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                title3: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="deliverable3"
                          >
                            Deliverables
                          </label>
                          <textarea
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            name="deliverable3"
                            id="deliverable3"
                            value={formdata.deliverable3}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                deliverable3: e.target.value,
                              }))
                            }
                            placeholder="Write here.."
                          ></textarea>
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="price3"
                          >
                            Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$50"
                            id="price3"
                            onChange={(e) =>
                              handlePriceInput(e, "price3")
                            }
                            value={formatCurrency(formdata.price3 || "")}
                           
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="by_now_discount3"
                          >
                            Buy Now Discount
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="10 %"
                            id="by_now_discount3"
                            onChange={(e) =>
                              handlePriceInput(e, "by_now_discount3")
                            }
                            value={formatCurrency(formdata.by_now_discount3 ,"by_now_discount3" )}
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="final_list_price3"
                          >
                            Final List Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$90"
                            id="final_list_price3"
                            onChange={(e) =>
                              handlePriceInput(e, "final_list_price3")
                            }
                            value={formatCurrency(formdata.final_list_price3 || "")}
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="estimated_service_timing3"
                          >
                            Estimated Service Timing
                          </label>
                          <select
                            style={{
                              backgroundImage: `url(${down})`,
                              backgroundPosition: "calc(100% - 10px) center",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none appearance-none"
                            name="estimated_service_timing3"
                            id="estimated_service_timing3"
                            value={formdata.estimated_service_timing3}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                estimated_service_timing3: e.target.value,
                              }))
                            }
                          >
                            <option value="" defaultValue hidden>
                              How soon can you get it scheduled?
                            </option>
                            <option value="1">1 Day</option>
                            <option value="2">2 Days</option>
                            <option value="3">3 Days</option>
                            <option value="4">4 Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="col-span-12 mt-4">
            <div className="flex justify-end">
              <button
                type="button"
                className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                onClick={() => setSelectedRate("")}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
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

export default PricingPackaging;
