import React, { useState, useEffect } from "react";
import axios from "axios";

const SpecialHour = () => {
  const [formData, setFormData] = useState(null);
  const [specialHours, setSpecialHours] = useState([]);

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

        console.log(
          "API Response:",
          response.data?.businessProfile[0]?.special_hour
        );

        setFormData(response.data?.businessProfile[0]?.special_hour);

        let formattedScheduleSpecial = [];
        if (response.data?.businessProfile[0]?.special_hour) {
          formattedScheduleSpecial =
            typeof response.data?.businessProfile[0]?.special_hour === "string"
              ? JSON.parse(response.data?.businessProfile[0]?.special_hour)
              : response.data?.businessProfile[0]?.special_hour;
        }
        console.log("Formatted Schedule Special:", formattedScheduleSpecial);
        const transformedScheduleSpecial = formattedScheduleSpecial.map(
          (item) => ({
            dayName: item.text,
            time: item.date || "",
            closed: item.closed === "closed",
            is247Open: item.is247Open === "true",
          })
        );

        console.log(
          "Transformed Schedule Special:",
          transformedScheduleSpecial
        );
        setSpecialHours(transformedScheduleSpecial);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
