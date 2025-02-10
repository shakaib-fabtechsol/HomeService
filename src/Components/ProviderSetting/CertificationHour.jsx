import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import SettingsPreview from "../MUI/SettingsPreview";
import { FaTrash } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

const CertificationHour = () => {
  const userId = localStorage.getItem("id");
  console.log("userID", userId);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    user_id: userId,
    insurance_certificate: null,
    license_certificate: null,
    award_certificate: null,
  });

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [schedule, setSchedule] = useState(
    days.map((day) => ({
      day,
      closed: false,
      slots: [{ start: "", end: "" }],
    }))
  );

  const updateSchedule = (dayIndex, newValues) => {
    setSchedule((prev) =>
      prev.map((item, index) =>
        index === dayIndex ? { ...item, ...newValues } : item
      )
    );
  };

  const handleFileChange = (e, fieldName) => {
    const uploadedFile = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: uploadedFile, 
    }));
  };

  const specialdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [specialSchedule, setspecialSchedule] = useState(
    specialdays.map((day) => ({
      day,
      closed: false,
      slots: [{ start: "", end: "" }],
    }))
  );

  const updatespecialSchedule = (dayIndex, update) => {
    setspecialSchedule((prev) =>
      prev.map((item, i) => (i === dayIndex ? { ...item, ...update } : item))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const token = localStorage.getItem("token");
    console.log("token:", token);

    if (!token) {
      toast.error("No token found. Please log in.");
      return;
    }

    setLoading(true);

    try {
      const formattedSchedule = schedule.map((item) => ({
        day_name: item.day,
        day_status: item.closed ? "closed" : "open",
        regular_hour: item.closed
          ? []
          : item.slots.map((slot) => ({
              start_time: slot.start,
              end_time: slot.end,
            })),
      }));

      const formattedSpecialSchedule = specialSchedule.map((item) => ({
        day_name: item.day,
        day_status: item.closed ? "closed" : "open",
        special_hour: item.closed
          ? []
          : item.slots.map((slot) => ({
              special_start_time: slot.start,
              special_end_time: slot.end,
            })),
      }));
      const data = new FormData();

      data.append("regular_hour", JSON.stringify(formattedSchedule));
      data.append("special_hour", JSON.stringify(formattedSpecialSchedule));

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          data.append(key, value);
        }
      });

      const response = await axios.post(
        "https://homeservice.thefabulousshow.com/api/AddCertificateHours",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Success:", response.data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
            <p className="text-lg font-semibold text-[#181D27]">
              Certifications & Hours
            </p>
            <p className="text-[#535862] text-sm">
              update your certifications & hours details.
            </p>
          </div>
          <div className="py-8 border-b">
            <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
              <div>
                <p className="text-sm font-semibold text-[#414651]">
                  Upload Insurance Certificate
                </p>
              </div>
              <div className="md:col-span-2">
                <SettingsPreview
                  onFileSelect={handleFileChange}
                  fieldName="insurance_certificate"
                />
              </div>
            </div>
          </div>
          <div className="py-8 border-b">
            <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
              <div>
                <p className="text-sm font-semibold text-[#414651]">
                  Upload Licensing Certificate
                </p>
              </div>
              <div className="md:col-span-2">
                <SettingsPreview
                  onFileSelect={handleFileChange}
                  fieldName="license_certificate"
                />
              </div>
            </div>
          </div>
          <div className="py-8 border-b">
            <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
              <div>
                <p className="text-sm font-semibold text-[#414651]">
                  Upload Awards Certificate
                </p>
              </div>
              <div className="md:col-span-2">
                <SettingsPreview
                  onFileSelect={handleFileChange}
                  fieldName="award_certificate"
                />
              </div>
            </div>
          </div>
          <div className="py-8 border-b">
            <div className="py-8 border-b">
              <div className="grid lg:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold">
                    Regular Hours of Operation
                  </p>
                </div>
                <div className="sm:col-span-2">
                  {schedule.map((item, dayIndex) => (
                    <div
                      key={item.day}
                      className="mb-4 md:grid grid-cols-3 gap-2"
                    >
                      <div>
                        <p>{item.day}</p>
                        <label className="flex gap-2 mt-2">
                          <input
                            type="checkbox"
                            checked={item.closed}
                            onChange={() =>
                              updateSchedule(dayIndex, { closed: !item.closed })
                            }
                          />
                          Closed
                        </label>
                      </div>

                      {!item.closed && (
                        <div className="col-start-2 col-end-4">
                          {item.slots.map((slot, slotIndex) => (
                            <div
                              key={slotIndex}
                              className="flex items-center gap-2 mt-2"
                            >
                              <input
                                type="time"
                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow"
                                value={slot.start}
                                onChange={(e) => {
                                  const slots = [...item.slots];
                                  slots[slotIndex].start = e.target.value;
                                  updateSchedule(dayIndex, { slots });
                                }}
                              />
                              <input
                                type="time"
                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow"
                                value={slot.end}
                                onChange={(e) => {
                                  const slots = [...item.slots];
                                  slots[slotIndex].end = e.target.value;
                                  updateSchedule(dayIndex, { slots });
                                }}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  updateSchedule(dayIndex, {
                                    slots: item.slots.filter(
                                      (_, i) => i !== slotIndex
                                    ),
                                  })
                                }
                              >
                                <FaTrash />
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            className="py-2"
                            onClick={() =>
                              updateSchedule(dayIndex, {
                                slots: [...item.slots, { start: "", end: "" }],
                              })
                            }
                          >
                            <FaPlusCircle />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 border-b">
            <div className="grid lg:grid-cols-3 gap-2 max-w-[1000px]">
              <div>
                <p className="text-sm font-semibold">
                  Special Hours of Operation
                </p>
              </div>
              <div className="sm:col-span-2">
                <div>
                  {specialSchedule.map((item, dayIndex) => (
                    <div
                      key={item.day}
                      className="mb-4 md:grid grid-cols-3 gap-2"
                    >
                      <div>
                        <p>{item.day}</p>
                        <label className="flex gap-2 mt-2">
                          <input
                            type="checkbox"
                            checked={item.closed}
                            onChange={() =>
                              updatespecialSchedule(dayIndex, {
                                closed: !item.closed,
                              })
                            }
                          />
                          Closed
                        </label>
                      </div>
                      {!item.closed && (
                        <div className="sm:col-start-2 sm:col-end-4">
                          {item.slots.map((slot, slotIndex) => (
                            <div
                              key={slotIndex}
                              className="flex items-center gap-2 mt-2"
                            >
                              <input
                                type="time"
                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                value={slot.start}
                                onChange={(e) => {
                                  const slots = [...item.slots];
                                  slots[slotIndex].start = e.target.value;
                                  updatespecialSchedule(dayIndex, { slots });
                                }}
                              />
                              <input
                                type="time"
                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                value={slot.end}
                                onChange={(e) => {
                                  const slots = [...item.slots];
                                  slots[slotIndex].end = e.target.value;
                                  updatespecialSchedule(dayIndex, { slots });
                                }}
                              />
                              <button
                                onClick={() =>
                                  updatespecialSchedule(dayIndex, {
                                    slots: item.slots.filter(
                                      (_, i) => i !== slotIndex
                                    ),
                                  })
                                }
                              >
                                <FaTrash />
                              </button>
                            </div>
                          ))}
                          <button
                            className="py-2"
                            onClick={() =>
                              updatespecialSchedule(dayIndex, {
                                slots: [...item.slots, { start: "", end: "" }],
                              })
                            }
                          >
                            <FaPlusCircle />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="reset"
              className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
            >
              Cancel
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
  );
};

export default CertificationHour;
