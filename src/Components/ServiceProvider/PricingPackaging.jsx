import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import down from "../../assets/img/chevronDown.png";
import Swal from "sweetalert2";

const PricingPackaging = ({ serviceId,setValue  }) => {
     const [loading, setLoading] = useState(false); // Define the loading state

  // ✅ Receiving serviceId
  const [selectedRate, setSelectedRate] = useState("Flat");
  const [flatRatePrice, setFlatRatePrice] = useState("");
  const [buyNowDiscount, setBuyNowDiscount] = useState("");
  const [finalListPrice, setFinalListPrice] = useState("");
  const [estimatedServiceTime, setEstimatedServiceTime] = useState("");

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
    if (selectedRate === 'Flat') {
      formData = {
        ...formData,
        flat_rate_price: flatRatePrice,
        flat_by_now_discount: buyNowDiscount,
        flat_final_list_price: finalListPrice,
        flat_estimated_service_time: estimatedServiceTime,
      };
    } else if (selectedRate === 'Hourly') {
      formData = {
        ...formData,
        hourly_rate: flatRatePrice, // Assuming flatRatePrice maps to hourlyRate
        discount: buyNowDiscount,
        hourly_final_list_price: finalListPrice,
        hourly_estimated_service_time: estimatedServiceTime,
      };
    }
  
    try {
      const response = await fetch("https://homeservice.thefabulousshow.com/api/UpdatePriceAndPackage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData), // Send data directly without wrapping in pricingData
      });
  
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
          text: "Pricing details updated successfully.",
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
            <p className="font-semibold">Pricing Model</p>
            <input
              type="text"
              id="Flatr"
              defaultValue={serviceId ? `${serviceId}` : "0"} // ✅ Using defaultValue instead of value
              className="focus-none border" readOnly
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
              <div className="col-span-12 lg:col-span-7 mt-4">
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
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Final" className="font-semibold">
                    Final List Price
                  </label>
                  <input
                    type="text"
                    id="Final"
                    placeholder="$90"
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
                    name=""
                    className="myselect pe-[30px] focus-none"
                    id=""
                  >
                    <option value="" defaultValue hidden>
                      How soon can you get it scheduled?
                    </option>
                    <option value="">Same day</option>
                    <option value="">2 days</option>
                    <option value="">3 days</option>
                    <option value="">1 week</option>
                    <option value="">2 week</option>
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
                            htmlFor="tier1Title"
                          >
                            Title
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="Title"
                            id="tier1Title"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier1Deliverables"
                          >
                            Deliverables
                          </label>
                          <textarea
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            name="tier1Deliverables"
                            id="tier1Deliverables"
                            placeholder="Write here.."
                          ></textarea>
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier1Price"
                          >
                            Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$50"
                            id="tier1Price"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier1BuyNowDiscount"
                          >
                            Buy Now Discount
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="10 %"
                            id="tier1BuyNowDiscount"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier1FinalListPrice"
                          >
                            Final List Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$90"
                            id="tier1FinalListPrice"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier2EstimatedTiming"
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
                            name="tier2EstimatedTiming"
                            id="tier2EstimatedTiming"
                          >
                            <option value="" defaultValue hidden>
                              How soon can you get it scheduled?
                            </option>
                            <option value="">1 Day</option>
                            <option value="">2 Day</option>
                            <option value="">3 Day</option>
                            <option value="">4 Day</option>
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
                            htmlFor="tier2Title"
                          >
                            Title
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="Title"
                            id="tier2Title"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier2Deliverables"
                          >
                            Deliverables
                          </label>
                          <textarea
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            name="tier2Deliverables"
                            id="tier2Deliverables"
                            placeholder="Write here.."
                          ></textarea>
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier2Price"
                          >
                            Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$50"
                            id="tier2Price"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier2BuyNowDiscount"
                          >
                            Buy Now Discount
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="10 %"
                            id="tier2BuyNowDiscount"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier2FinalListPrice"
                          >
                            Final List Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$90"
                            id="tier2FinalListPrice"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier2EstimatedTiming"
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
                            name="tier2EstimatedTiming"
                            id="tier2EstimatedTiming"
                          >
                            <option value="" defaultValue hidden>
                              How soon can you get it scheduled?
                            </option>
                            <option value="">1 Day</option>
                            <option value="">2 Day</option>
                            <option value="">3 Day</option>
                            <option value="">4 Day</option>
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
                            htmlFor="tier3Title"
                          >
                            Title
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="Title"
                            id="tier3Title"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier3Deliverables"
                          >
                            Deliverables
                          </label>
                          <textarea
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            name="tier3Deliverables"
                            id="tier3Deliverables"
                            placeholder="Write here.."
                          ></textarea>
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier3Price"
                          >
                            Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$50"
                            id="tier3Price"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier3BuyNowDiscount"
                          >
                            Buy Now Discount
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="10 %"
                            id="tier3BuyNowDiscount"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier3FinalListPrice"
                          >
                            Final List Price
                          </label>
                          <input
                            className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                            type="text"
                            placeholder="$90"
                            id="tier3FinalListPrice"
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            className="text-sm font-medium ps-2"
                            htmlFor="tier3EstimatedTiming"
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
                            name="tier3EstimatedTiming"
                            id="tier3EstimatedTiming"
                          >
                            <option value="" defaultValue hidden>
                              How soon can you get it scheduled?
                            </option>
                            <option value="">1 Day</option>
                            <option value="">2 Day</option>
                            <option value="">3 Day</option>
                            <option value="">4 Day</option>
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
                type="submit" disabled={loading}
                className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
              >
                 {loading ? "Updating..." : "Update Pricing"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PricingPackaging;
