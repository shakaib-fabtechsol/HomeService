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

  const allImages =
    formdata?.businessProfile?.flatMap((profile) =>
      profile.insurance_certificate
        ? (Array.isArray(profile.insurance_certificate)
            ? profile.insurance_certificate
            : profile.insurance_certificate.split(",")
          ).map((img) => img.trim())
        : []
    ) || [];

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
      {allImages.length > 0 ? (
        allImages.map((image, index) => (
          <div key={index}>
            <img
              src={`https://homeservice.thefabulousshow.com/uploads/${image}`}
              alt={`Facility ${index + 1}`}
              className="w-full h-[500px] rounded-lg shadow"
              onError={(e) => (e.target.src = "/default.png")} // Load default if image fails
            />
          </div>
        ))
      ) : (
        <p>No facility photos available</p>
      )}
    </div>
  );
};

export default TeacherPhoto;
