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
          `http://216.37.42.152:8004/api/UserDetails/${userId}`,
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
          src={`http://216.37.42.152:8004/uploads/${data}`}
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
