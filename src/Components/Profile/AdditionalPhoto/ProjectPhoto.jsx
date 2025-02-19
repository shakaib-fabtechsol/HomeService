import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherPhoto = () => {
  const [formdata, setFormData] = useState(null);

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

  const image =
    formdata?.businessProfile?.[0]?.project_photo ||
    (formdata?.businessProfile?.[0]?.project_photo &&
      formdata?.businessProfile?.[0]?.project_photo.split(",")[0]);

  return (
    <div>
      {image ? (
        <img
          src={`https://homeservice.thefabulousshow.com/uploads/${image}`}
          alt={`Facility`}
          className="w-50 h-[200px] rounded-lg shadow"
      
        />
      ) : (
        <p>No facility photos available</p>
      )}
    </div>
  );
};

export default TeacherPhoto;