import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherPhoto = () => {
  const [image, setImage] = useState(null);

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
      
        const firstProfileWithImage = response.data?.businessProfile?.find(
          (profile) => profile.license_certificate
        );

        if (firstProfileWithImage) {
          const { license_certificate } = firstProfileWithImage;
        
          const img = Array.isArray(license_certificate)
            ? license_certificate[0]
            : license_certificate.split(",")[0].trim();
          setImage(img);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {image ? (
        <img
          src={`https://homeservice.thefabulousshow.com/uploads/${image}`}
          alt="Facility"
          className="w-50 h-[200px] rounded-lg shadow"
        />
      ) : (
        <p>No facility photos available</p>
      )}
    </div>
  );
};

export default TeacherPhoto;