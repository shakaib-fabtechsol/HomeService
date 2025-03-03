import React, { useState, useEffect } from "react";
import axios from "axios";

const RegularHour = () => {
  const [formData, setFormData] = useState(null);
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

        

        setFormData(response.data?.businessProfile[0]?.special_hour);


        let formattedScheduleRegular = [];
        if (response.data?.businessProfile[0]?.regular_hour) {
          formattedScheduleRegular =
            typeof response.data?.businessProfile[0]?.regular_hour === "string"
              ? JSON.parse(response.data?.businessProfile[0]?.regular_hour)
              : response.data?.businessProfile[0]?.regular_hour;
        }
        const transformedScheduleRegular = formattedScheduleRegular.map(
          (item) => ({
            dayName: item.day_name,
            dayStatus: item.day_status,
            regularHour: item.regular_hour,
          })
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
    </>
  );
};

export default RegularHour;
