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
      profile.award_certificate
        ? Array.isArray(profile.award_certificate)
          ? profile.award_certificate
          : [profile.award_certificate.trim()]
        : []
    ) || [];

  // Since you have only one image, extract it from the array.
  const image = allImages[0];

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
      {image ? (
        <div>
          <img
            src={`https://homeservice.thefabulousshow.com/uploads/${image}`}
            alt="Facility"
            className="w-50 h-[200px] rounded-lg shadow"
          
          />
        </div>
      ) : (
        <p>No facility photos available</p>
      )}
    </div>
  );
};

export default TeacherPhoto;
