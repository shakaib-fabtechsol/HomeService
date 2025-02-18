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

        console.log("API Response:", response.data); // Debugging
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Extract all images from insurance_certificate (if available)
  const allImages =
    formdata?.businessProfile?.flatMap((profile) =>
      profile.insurance_certificate
        ? (typeof profile.insurance_certificate === "string"
            ? profile.insurance_certificate.split(",")
            : Array.isArray(profile.insurance_certificate)
            ? profile.insurance_certificate
            : []
          )
            .map((img) => img.trim())
            .filter((img) => img) // Filter out empty strings
        : []
    ) || [];

  // Since you only need one image, extract the first valid image
  const firstImage = allImages[0];

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
      {firstImage ? (
        <div>
          <img
            src={`https://homeservice.thefabulousshow.com/uploads/${firstImage}`}
            alt="Facility"
            className="w-full h-[500px] rounded-lg shadow"
            onError={(e) => (e.target.src = "/default.png")}
          />
        </div>
      ) : (
        <p>No facility photos available</p>
      )}
    </div>
  );
};

export default TeacherPhoto;
