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
          `216.37.42.152/api/UserDetails/${userId}`,
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

  const image = allImages[0];

  return (
    <div className="w-64 h-64">
      {image ? (
        <img
          src={`216.37.42.152/uploads/${image}`}
          alt="Facility"
          className="w-full h-full object-cover rounded-lg shadow"
        />
      ) : (
        <p>No facility photos available</p>
      )}
    </div>
  );
};

export default TeacherPhoto;
