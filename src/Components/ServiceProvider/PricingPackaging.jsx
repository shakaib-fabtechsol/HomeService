import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import down from "../../assets/img/chevronDown.png";
import Swal from "sweetalert2";

const PricingPackaging = ({ serviceId, setValue }) => {
  const [loading, setLoading] = useState(false); // Define the loading state

  // ✅ Receiving serviceId
  const [selectedRate, setSelectedRate] = useState("Flat");
  const [flatRatePrice, setFlatRatePrice] = useState("");
  const [buyNowDiscount, setBuyNowDiscount] = useState("");
  const [finalListPrice, setFinalListPrice] = useState("");
  const [estimatedServiceTime, setEstimatedServiceTime] = useState("");

  // Hourly rate state
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

  const handleRateChange = (event) => {
    setSelectedRate(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (loading) return; // Prevent multiple submissions

    setLoading(true); // Show loading state

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      setLoading(false);
      return;
    }

    // Prepare the data for the API request
    let formData = {
      id: serviceId, // Pass the service ID directly
      pricing_model: selectedRate, // This is the model type: Flat or Hourly
      estimated_service_time: estimatedServiceTime,
    };

    // Prepare the specific fields based on the pricing model
    if (selectedRate === "Flat") {
      formData = {
        ...formData,
        flat_rate_price: flatRatePrice,
        flat_by_now_discount: buyNowDiscount,
        flat_final_list_price: finalListPrice,
        flat_estimated_service_time: estimatedServiceTime,
      };
    } else if (selectedRate === "Hourly") {
      formData = {
        ...formData,
        hourly_rate: hourlyRate,
        discount: hourlyDiscount,
        hourly_final_list_price: hourlyFinalListPrice,
        hourly_estimated_service_time: hourlyEstimatedServiceTime,
      };
    } else if (selectedRate === "Custom") {
      formData = {
        ...formData,
        title1: title1,
        deliverable1: deliverable1,
        price1: price1,
        by_now_discount1: by_now_discount1,
        final_list_price1: final_list_price1,
        estimated_service_timing1: estimated_service_timing1,

        title2: title2,
        deliverable2: deliverable2,
        price2: price2,
        by_now_discount2: by_now_discount2,
        final_list_price2: final_list_price2,
        estimated_service_timing2: estimated_service_timing2,

        title3: title3,
        deliverable3: deliverable3,
        price3: price3,
        by_now_discount3: by_now_discount3,
        final_list_price3: final_list_price3,
        estimated_service_timing3: estimated_service_timing3,
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
          body: JSON.stringify(formData), // Send data directly without wrapping in pricingData
        }
      );

      const textResponse = await response.text(); // Get response as text
      console.log("Response Text:", textResponse); // Log the raw response

      let result;
      try {
        result = JSON.parse(textResponse); // Try parsing it as JSON
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

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 mt-4">
            <input
              type="text"
              id="Flatr"
              defaultValue={serviceId ? `${serviceId}` : "0"} // ✅ Using defaultValue instead of value
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
                  checked={selectedRate === "Flat"}
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
                  checked={selectedRate === "Hourly"}
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
                  checked={selectedRate === "Custom"}
                />
                <label htmlFor="Custom">Custom Package</label>
              </div>
            </div>
          </div>

          {/* Flat Rate Fields */}
          {selectedRate === "Flat" && (
            <>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Flatr" className="font-semibold">
                    Flat Rate Price
                  </label>
                  <input
                    type="text"
                    id="Flatr"
                    placeholder="$100"
                    value={flatRatePrice}
                    onChange={(e) => setFlatRatePrice(e.target.value)}
                    className="myinput focus-none"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="BuyNow" className="font-semibold">
                    Buy Now Discount
                  </label>
                  <input
                    type="text"
                    id="BuyNow"
                    placeholder="10 %"
                    value={buyNowDiscount}
                    onChange={(e) => setBuyNowDiscount(e.target.value)}
                    className="myinput focus-none"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Finalp" className="font-semibold">
                    Final List Price
                  </label>
                  <input
                    type="text"
                    id="Finalp"
                    placeholder="$90"
                    value={finalListPrice}
                    onChange={(e) => setFinalListPrice(e.target.value)}
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
                    className="myselect pe-[30px] focus-none"
                    value={estimatedServiceTime}
                    onChange={(e) => setEstimatedServiceTime(e.target.value)}
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
          {/* Hourly Rate Fields */}
          {selectedRate === "Hourly" && (
            <>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="HourlyRate" className="font-semibold">
                    Hourly Rate
                  </label>
                  <input
                    type="text"
                    id="HourlyRate"
                    placeholder="$25/hour"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="myinput focus-none"
                  />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="HourlyDiscount" className="font-semibold">
                    Discount
                  </label>
                  <input
                    type="text"
                    id="HourlyDiscount"
                    placeholder="10 %"
                    value={hourlyDiscount}
                    onChange={(e) => setHourlyDiscount(e.target.value)}
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
                    id="HourlyFinalPrice"
                    placeholder="$90"
                    value={hourlyFinalListPrice}
                    onChange={(e) => setHourlyFinalListPrice(e.target.value)}
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
                    className="myselect pe-[30px] focus-none"
                    value={hourlyEstimatedServiceTime}
                    onChange={(e) =>
                      setHourlyEstimatedServiceTime(e.target.value)
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

          {/* Custom Package Fields */}
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
                            value={title1}
                            onChange={(e) => settitle1(e.target.value)}
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
                            value={deliverable1}
                            onChange={(e) => setdeliverable1(e.target.value)}
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
                            value={price1}
                            onChange={(e) => setprice1(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="by_now_discount1"
                          >
                            Buy Now Discount
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="10 %"
                            id="by_now_discount1"
                            value={by_now_discount1}
                            onChange={(e) =>
                              setby_now_discount1(e.target.value)
                            }
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
                            value={final_list_price1}
                            onChange={(e) =>
                              setfinal_list_price1(e.target.value)
                            }
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
                            value={estimated_service_timing1}
                            onChange={(e) =>
                              setestimated_service_timing1(e.target.value)
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
                            value={title2}
                            onChange={(e) => settitle2(e.target.value)}
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
                            value={deliverable2}
                            onChange={(e) => setdeliverable2(e.target.value)}
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
                            value={price2}
                            onChange={(e) => setprice2(e.target.value)}
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
                            value={by_now_discount2}
                            onChange={(e) =>
                              setby_now_discount2(e.target.value)
                            }
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
                            value={final_list_price2}
                            onChange={(e) =>
                              setfinal_list_price2(e.target.value)
                            }
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
                            value={estimated_service_timing2} // Corrected to match state variable
                            onChange={(e) =>
                              setestimated_service_timing2(e.target.value)
                            } // Corrected to match state update function
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
                            value={title3}
                            onChange={(e) => settitle3(e.target.value)}
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
                            value={deliverable3}
                            onChange={(e) => setdeliverable3(e.target.value)}
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
                            value={price3}
                            onChange={(e) => setprice3(e.target.value)}
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
                            value={by_now_discount3}
                            onChange={(e) =>
                              setby_now_discount3(e.target.value)
                            }
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
                            value={final_list_price3}
                            onChange={(e) =>
                              setfinal_list_price3(e.target.value)
                            }
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
                            name="estimated_service_timing2"
                            id="estimated_service_timing2"
                            value={estimated_service_timing3}
                            onChange={(e) =>
                              setestimated_service_timing3(e.target.value)
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
