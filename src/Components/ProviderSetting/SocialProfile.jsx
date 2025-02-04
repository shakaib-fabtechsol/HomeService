import React from 'react'
import { Modal, } from "@mui/material";
import Facebook from "../../assets/img/Facebook-icon.png";
import Youtube from "../../assets/img/Youtube-icon.png";
import Twitter from "../../assets/img/Twitter-icon.png";
import Instagram from "../../assets/img/Instagram-icon.png";
import Linkdin from "../../assets/img/Linkdin-icon.png";
import Business from "../../assets/img/Business-icon.png";
import { Link } from 'react-router-dom';
import { CiTrash } from 'react-icons/ci';
import twitter48px from "../../assets/img/twitter48px.png";

const SocialProfile = () => {
    const [Connectopen, setConnectOpen] = React.useState(false);
    const handleConnectOpen = () => setConnectOpen(true);
    const handleConnectClose = () => setConnectOpen(false);
    const socialLinks = [
        {
            name: "Facebook",
            avatar: Facebook,
            link: "https://www.facebook.com/username",
        },
        {
            name: "Twitter",
            avatar: Twitter,
            link: "",
        },
        {
            name: "Instagram",
            avatar: Instagram,
            link: "",
        },
        {
            name: "LinkedIn",
            avatar: Linkdin,
            link: "",
        },
        {
            name: "YouTube",
            avatar: Youtube,
            link: "",
        },
        {
            name: "Google Business",
            avatar: Business,
            link: "",
        },
    ];

    return (
        <div>
            <div>
                <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
                    <p className="text-lg font-semibold text-[#181D27]">
                        Connect Your Social
                    </p>
                    <p className="text-[#535862] text-sm">
                        update and connect your social profile links.
                    </p>
                </div>
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
                                        {social.link && (
                                            <p className="text-[#535862] text-sm break-all">
                                                {social.link}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    {social.link ? (
                                        <Link to="">
                                            <CiTrash className="text-[24px]" />
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={
                                                social.name === "Twitter"
                                                    ? handleConnectOpen
                                                    : () => { }
                                            }
                                            className="text-white text-sm font-semibold bg-[#0F91D2] border border-[#0F91D2] rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] py-3 px-4"
                                        >
                                            Connect
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        type="reset"
                        className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                    >
                        {" "}
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                    >
                        Save
                    </button>
                </div>
                <div>
                    <Modal
                        open={Connectopen}
                        onClose={handleConnectClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{ m: 2 }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] outline-none">
                            <div className="bg-white rounded-[12px] p-4 max-h-[calc(100dvh-200px)] overflow-y-auto scroll-x-hidden">
                                <form action="">
                                    <div className="flex flex-col items-center mt-5 gap-5">
                                        <img
                                            className="size-12 max-w-12"
                                            src={twitter48px}
                                            alt=""
                                        />
                                        <p className="text-lg text-[#181D27] text-center font-semibold">
                                            Connect Your Twitter Account
                                        </p>
                                        <p className="text-[#535862] text-center">
                                            Enter your profile url to connect.
                                        </p>
                                        <input
                                            className="border border-[#D5D7DA] w-full p-3 rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                            defaultValue={"https://www.twitter.com/username"}
                                            type="url"
                                            name=""
                                            id=""
                                        />
                                        <div className="w-full grid grid-cols-2 gap-3 mt-6">
                                            <button
                                                onClick={handleConnectClose}
                                                type="button"
                                                className="text-[#414651] border border-[#D5D7DA] p-3 rounded-[8px] font-semibold w-full"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="text-white border-[#0F91D2] bg-[#0F91D2] p-3 rounded-[8px] font-semibold w-full"
                                                type="submit"
                                            >
                                                Connect
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default SocialProfile