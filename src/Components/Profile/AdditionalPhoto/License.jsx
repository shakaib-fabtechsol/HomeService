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
  formdata?.businessProfile?.map((profile) =>
    profile.license_certificate
      ? Array.isArray(profile.license_certificate)
        ? profile.license_certificate[0] // ✅ Get only the first image
        : profile.license_certificate.split(",")[0].trim() // ✅ Get first image from string
      : null
  ).filter(Boolean) || []; // ✅ Remove null values


  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
     {allImages.slice(0, 3).map((image, index) => (
  <div key={index}>
    <img
      src={`https://homeservice.thefabulousshow.com/uploads/${image}`}
      alt={`Facility ${index + 1}`}
      className="w-full h-[500px] rounded-lg shadow"
      onError={(e) => (e.target.src = "/default.png")}
    />
  </div>
))}
    </div>
  );
};

export default TeacherPhoto;
