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
          `https://backend.homeprodeals.com/api/UserDetails/${userId}`,
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
 
  const technicianPhotos = formdata?.businessProfile?.[0]?.technician_photo;
  const images = Array.isArray(technicianPhotos)
    ? technicianPhotos
    : technicianPhotos?.split(",") || [];

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index}>
              <img
                src={`https://backend.homeprodeals.com/uploads/${image.trim()}`}
                alt={`Technician ${index + 1}`}
                className="w-full h-[500px] rounded-lg shadow"
           
              />
            </div>
          ))
        ) : (
          <p>No technician photos available</p>
        )}
      </div>
    )
}

export default TeacherPhoto