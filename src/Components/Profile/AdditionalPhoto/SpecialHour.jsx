import React, { useState, useEffect } from "react";
import axios from "axios";

const SpecialHour = () => {
  const [formdata, setFormData] = useState(null);
  console.log("fromdayasdad", formdata);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("id");
        const response = await axios.get(
          `https://homeservice.thefabulousshow.com/api/UserDetails/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const specialHours =Array.isArray(formdata?.businessProfile?.[0]?.special_hour)&&formdata?.businessProfile?.[0]?.special_hour?.flatMap((day) =>
    day.special_hour.map((hour) => ({
      dayName: day.day_name,
      time: `${hour.special_start_time} - ${hour.special_end_time}`,
    }))
  ) || [];

console.log("specialHours", formdata);

return (
  <div>
    <h2 className="text-lg font-semibold mb-3">Special Hours</h2>
    {specialHours.length > 0 ? (
      specialHours.map((row, index) => (
        <div key={index} className="py-5 border-b border-[#E9EAEB]">
          <div className="flex items-center flex-wrap gap-3 justify-between py-3 px-4 bg-[#FAFAFA] min-h-[60px] rounded-[8px]">
            <div className="flex gap-3 items-center">
              <div>
                <p className="font-medium text-[#343434]">{row.dayName}</p>
              </div>
            </div>
            <div className="ms-auto text-right">
              <p className="font-semibold">{row.time}</p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No special hours available.</p>
    )}
  </div>
);
};

export default SpecialHour;
