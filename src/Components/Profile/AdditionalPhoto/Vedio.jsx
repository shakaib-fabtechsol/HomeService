import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";

const Vedio = () => {
  const [formdata, setFormData] = useState({
    video: "",
  });


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

  const data = formdata?.businessProfile?.about_video;

  return (
    <>
      <div className="video-container">
        <video
          src={`https://homeservice.thefabulousshow.com/uploads/${data}`}
          controls
          width="50%"
          height="500"
          autoPlay
          muted
        />
      </div>
    </>
  );
};

export default Vedio;
