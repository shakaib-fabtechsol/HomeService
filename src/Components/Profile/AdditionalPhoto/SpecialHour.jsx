import React, { useState, useEffect } from "react";
import axios from "axios";

const SpecialHour = () => {
  const [formData, setFormData] = useState(null);
  const [specialHours, setSpecialHours] = useState([]);
  const [regularHours, setRegularHours] = useState([]);

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

        let formattedScheduleRegular = [];
        if (response.data?.businessProfile[0]?.regular_hour) {
          formattedScheduleRegular =
            typeof response.data?.businessProfile[0]?.regular_hour === "string"
              ? JSON.parse(response.data?.businessProfile[0]?.regular_hour)
              : response.data?.businessProfile[0]?.regular_hour;
        }
        console.log("Formatted Schedule Regular:", formattedScheduleRegular);
        const transformedScheduleRegular = formattedScheduleRegular.map(
          (item) => ({
            dayName: item.day_name,
            dayStatus: item.day_status,
            regularHour: item.regular_hour,
          })
        );

        console.log(
          "Transformed Schedule Regular:",
          transformedScheduleRegular
        );
        setRegularHours(transformedScheduleRegular);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-lg font-semibold mb-3">Regular Hours</h2>
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
      <div className="mt-5">
        <h2 className="text-lg font-semibold mb-3">Special Hours</h2>
        {regularHours.length > 0 ? (
          regularHours.map((row, index) => (
            <div key={index} className="py-5 border-b border-[#E9EAEB]">
              <div className="flex items-center flex-wrap gap-3 justify-between py-3 px-4 bg-[#FAFAFA] min-h-[60px] rounded-[8px]">
                <div className="flex gap-3 items-center">
                  <div>
                    <p className="font-medium text-[#343434]">{row.dayName}</p>
                  </div>
                </div>
                <div className="ms-auto text-right">
                  {row.dayStatus === "open" ? (
                    <div>
                      {row?.regularHour?.map((hour, index) => (
                        <p key={index} className="font-semibold">
                          {hour.start_time} - {hour.end_time}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="font-semibold">Closed</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No regular hours available.</p>
        )}
      </div>
    </>
  );
};

export default SpecialHour;
``;
