import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import social media icons
import Facebook from "../../../assets/img/Facebook-icon.png";
import Youtube from "../../../assets/img/Youtube-icon.png";
import Twitter from "../../../assets/img/Twitter-icon.png";
import Instagram from "../../../assets/img/Instagram-icon.png";
import Linkedin from "../../../assets/img/Linkdin-icon.png";
import Business from "../../../assets/img/Business-icon.png";

const Social = () => {
  const [socialData, setSocialData] = useState(null);

  // Define social media platforms and their icons
  const socialPlatforms = [
    { name: "Facebook", key: "facebook", avatar: Facebook },
    { name: "Twitter", key: "twitter", avatar: Twitter },
    { name: "Instagram", key: "instagram", avatar: Instagram },
    { name: "LinkedIn", key: "linkedin", avatar: Linkedin },
    { name: "YouTube", key: "youtube", avatar: Youtube },
    { name: "Google Business", key: "google_business", avatar: Business },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("id");

        if (!token || !userId) return;

        const response = await axios.get(
          `http://216.37.42.152:8004/api/UserDetails/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setSocialData(response.data?.getSocial?.[0] || {});
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {socialPlatforms.map(({ name, key, avatar }, index) => {
        const link = socialData?.[key];
        return (
          link && (
            <div key={index} className="py-5 border-b border-[#E9EAEB]">
              <div className="flex items-center flex-wrap gap-3 justify-between py-3 px-4 bg-[#FAFAFA] min-h-[60px] rounded-[8px]">
                <div className="flex gap-3 items-center">
                  <img
                    className="size-6 max-w-6 object-contain"
                    src={avatar}
                    alt={name}
                  />
                  <p className="font-medium text-[#343434]">{name}</p>
                </div>
                <div className="ms-auto">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-semibold bg-[#0F91D2] border border-[#0F91D2] rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] py-3 px-4"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Social;
