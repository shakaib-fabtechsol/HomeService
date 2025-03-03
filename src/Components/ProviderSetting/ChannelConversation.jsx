import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Components/MUI/Loader";
import { toast } from "react-toastify";
import Swal from "sweetalert2"; 
import { useParams } from "react-router-dom";
const ChannelConversation = () => {
  const navigate = useNavigate();
  const { dealid } = useParams();
  const id = localStorage.getItem("id");
  const [loading, setLoading] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [publishValue, setPublishValue] = useState(1);
  const [publishLoading, setPublishLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_id: "",
  });

  const [toggles, setToggles] = useState({
    call: false,
    text: false,
    address: false,
    chat: false,
    form: false,
  });
  const handleToggle = (field) => {
    setToggles((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: !prevFormData[field],
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const userId = localStorage.getItem("id");
    setFormData((prevState) => ({ ...prevState, user_id: userId }));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("user_id", id);

      if (toggles.call) {
        data.append(
          "conversation_call_number",
          formData.conversation_call_number
        );
        data.append("call", "true");
      }
      if (toggles.text) {
        data.append(
          "conversation_text_number",
          formData.conversation_text_number
        );
        data.append("text", "true");
      }
      if (toggles.email) {
        data.append("conversation_email", formData.conversation_email);
        data.append("email", "true");
      }
      if (toggles.address) {
        data.append("conversation_address", formData.conversation_address);
        data.append("address", "true");
      }

      const response = await axios.post(
        "http://216.37.42.152:8004/api/AddConversation",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Conversation added successfully!");
    } catch (error) {
      toast.error("Failed to add conversation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");



      const data = { id: id };

      try {
        const response = await axios.post(
          "http://216.37.42.152:8004/api/AddConversation",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const BasicInfo = response.data.conversation;

        if (BasicInfo) {
          setFormData({
            user_id: BasicInfo?.user_id,
            conversation_call_number:
              BasicInfo?.call === "true"
                ? BasicInfo?.conversation_call_number
                : null,
            conversation_text_number:
              BasicInfo?.text === "true"
                ? BasicInfo?.conversation_text_number
                : null,
            conversation_email:
              BasicInfo?.email === "true"
                ? BasicInfo?.conversation_email
                : null,
            conversation_address:
              BasicInfo?.address === "true"
                ? BasicInfo?.conversation_address
                : null,
          });

          setToggles({
            call: BasicInfo?.call === "true",
            text: BasicInfo?.text === "true",
            email: BasicInfo?.email === "true",
            address: BasicInfo?.address === "true",
            chat: BasicInfo?.chat === "true",
            form: BasicInfo?.form === "true",
          });
          setIsApiLoaded(true);
          setLoading(false);
        }

      } catch (err) {
      }
    };

    fetchData();
  }, []);

  const handlePublish = async (e) => {
    e.preventDefault();
    if (publishLoading) return;

    const userId = localStorage.getItem("id");
    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Service ID is required!",
      });
      return;
    }

    setPublishLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No token found. Please log in.",
      });
      setPublishLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `http://216.37.42.152:8004/api/SettingPublish/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );


      if (response.status === 200) {
        setFormData((prev) => ({ ...prev, publish: response.data.publish }));
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Setting Publish successfully.",
          confirmButtonColor: "#0F91D2",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: response.data.message || "Failed to update deal.",
          confirmButtonColor: "#D33",
        });
      }
    } catch (error) {
      console.error("Error updating deal:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error updating the deal.",
      });
    } finally {
      setPublishLoading(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <p className="text-lg font-semibold text-[#181D27]">
                Channels for Conversations
              </p>
              <p className="text-[#535862] text-sm">
                Update your channels details.
              </p>
            </div>
            <div className="">
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Call Pro</p>
                    <label className="switch def-switch relative flex items-center">
                      <input
                        type="checkbox"
                        checked={toggles.call}
                        onChange={() => handleToggle("call")}
                        className="hidden peer"
                      />
                      <span className="slider round"></span>
                      <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                        Off
                      </span>
                      <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                        On
                      </span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your phone number visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $10. This charge is
                    waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    value={formData.conversation_call_number}
                    name="conversation_call_number"
                    onChange={handleChange}
                    disabled={!toggles.call}
                    placeholder="Enter Call Number"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Text Pro</p>
                    <label className="switch def-switch relative flex items-center">
                      <input
                        type="checkbox"
                        checked={toggles.text}
                        onChange={() => handleToggle("text")}
                        className="hidden peer"
                      />
                      <span className="slider round"></span>
                      <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                        Off
                      </span>
                      <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                        On
                      </span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your text number visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $10. This charge is
                    waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    name="conversation_text_number"
                    value={formData.conversation_text_number}
                    onChange={handleChange}
                    disabled={!toggles.text}
                    placeholder="Enter Text Number"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Instant Chat</p>
                    <label className="switch def-switch relative flex items-center">
                      <input
                        type="checkbox"
                        checked={toggles.chat}
                        onChange={() => handleToggle("chat")}
                        className="hidden peer"
                      />
                      <span className="slider round"></span>
                      <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                        Off
                      </span>
                      <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                        On
                      </span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your instant chat visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $5. This charge is
                    waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6"></div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Email Pro</p>
                    <label className="switch def-switch relative flex items-center">
                      <input
                        type="checkbox"
                        checked={toggles.email}
                        onChange={() => handleToggle("email")}
                        className="hidden peer"
                      />
                      <span className="slider round"></span>
                      <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                        Off
                      </span>
                      <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                        On
                      </span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your email address visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $10. This charge is
                    waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="email"
                    id="Title"
                    value={formData.conversation_email}
                    onChange={handleChange}
                    name="conversation_email"
                    disabled={!toggles.email}
                    placeholder="Enter Email here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>

              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Address</p>
                    <label className="switch def-switch relative flex items-center">
                      <input
                        type="checkbox"
                        checked={toggles.address}
                        onChange={() => handleToggle("address")}
                        className="hidden peer"
                      />
                      <span className="slider round"></span>
                      <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                        Off
                      </span>
                      <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                        On
                      </span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your address visible to the
                    public.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    value={formData.conversation_address}
                    onChange={handleChange}
                    disabled={!toggles.address}
                    name="conversation_address"
                    placeholder="Enter Address here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-4 flex justify-end gap-4">
            <button
                type="reset"
                className="border border-gray-300 rounded-lg w-[150px] py-[10px] font-semibold bg-white"
              >
                Cancel
              </button>
              <input
                type="text"
                id="Flatr"
                defaultValue={formData?.id ? `${formData?.id}` : "0"}
                className="focus-none border hidden"
                readOnly
              />
              <input
                type="text"
                id="publish"
                value={publishValue}
                className="focus-none border hidden"
                readOnly
              />
              <button
                type="button"
                className={`border rounded-lg w-[150px] py-[10px] text-white font-semibold bg-[#0F91D2] ${
                  publishLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePublish}
                disabled={publishLoading}
              >
                {publishLoading ? "Publishing..." : "Publish"}
              </button>
            
              <button
                type="submit"
                className={`border rounded-lg w-[150px] py-[10px] text-white font-semibold bg-[#0F91D2] ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChannelConversation;
