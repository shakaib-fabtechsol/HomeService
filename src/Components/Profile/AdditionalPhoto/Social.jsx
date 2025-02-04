import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from "../../../assets/img/Facebook-icon.png";
import Youtube from "../../../assets/img/Youtube-icon.png";
import Twitter from "../../../assets/img/Twitter-icon.png";
import Instagram from "../../../assets/img/Instagram-icon.png";
import Linkdin from "../../../assets/img/Linkdin-icon.png";
import Business from "../../../assets/img/Business-icon.png";

const Social = () => {
    const socialLinks = [
        {
          name: "Facebook",
          avatar: Facebook,
          link: "#",
        },
        {
          name: "Twitter",
          avatar: Twitter,
          link: "#",
        },
        {
          name: "Instagram",
          avatar: Instagram,
          link: "#",
        },
        {
          name: "LinkedIn",
          avatar: Linkdin,
          link: "#",
        },
        {
          name: "YouTube",
          avatar: Youtube,
          link: "#",
        },
        {
          name: "Google Business",
          avatar: Business,
          link: "#",
        },
      ];
    return (
        <div>
            <div>
                {socialLinks.map((social, index) => (
                    <div key={index} className="py-5 border-b border-[#E9EAEB]">
                        <div className="flex items-center flex-wrap gap-3 justify-between py-3 px-4 bg-[#FAFAFA] min-h-[60px] rounded-[8px]">
                            <div className="flex gap-3 items-center">
                                <img
                                    className="size-6 max-w-6 object-contain"
                                    src={social.avatar}
                                    alt=""
                                />
                                <div>
                                    <p className="font-medium text-[#343434]">
                                        {social.name}
                                    </p>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <Link
                                    to={social.link}
                                    className="text-white text-sm font-semibold bg-[#0F91D2] border border-[#0F91D2] rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] py-3 px-4"
                                >
                                    Visit
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Social