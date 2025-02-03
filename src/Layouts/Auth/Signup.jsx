import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import service from "../../assets/img/service.png";
import google from "../../assets/img/google.png";
import logo from "../../assets/img/logo.png";
import { FormHelperText } from "@mui/material";

function Signup() {
  useEffect(() => {
    document.title = "Signup";
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const userType = location.state?.userType || "1";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!termsAccepted) {
      setError("You must accept the Terms of Service.");
      setLoading(false);
      return;
    }

    const userData = {
      name,
      email,
      phone,
      role: userType,
      terms: termsAccepted ? "1" : "0",
      password,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/Register", userData);

      if (response.data.user) {
        Swal.fire({
          icon: "success",
          title: "Good Job",
          text: "User Registered Successfully",
          timer: 3000,
          showConfirmButton: false,
        });

        navigate("/");
      }
    } catch (err) {
      setError("Registration failed. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="w-full grid md:grid-cols-2 h-[100dvh] overflow-y-auto">
        <div className="overflow-y-auto scroll-0 min-h-[100dvh]">
          <div className="">
            <img src={logo} alt="" className="px-5 py-4 size-48 object-contain mx-auto" />
          </div>
          <div className="">
            <div className="flex flex-col justify-center">
              <div className="px-[15px] sm:px-[30px] lg:px-[50px] xl:px-[130px] py-4">
                <h2 className="font-semibold text-[#181D27] text-darkblue text-3xl">Sign up</h2>
                <p className="font-normal myblack mt-2">Welcome! Please enter your details.</p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                  <div className="my-3 hidden">
                    <label htmlFor="role" className="myblack block w-full font-medium">Role</label>
                    <input type="text" id="role" value={userType} readOnly className="mt-1 w-full border px-3 rounded-lg py-3" />
                  </div>

                  <div className="my-3">
                    <label htmlFor="name" className="myblack block w-full font-medium">Full Name*</label>
                    <input type="text" id="name" placeholder="Enter your name" className="mt-1 w-full border px-3 rounded-lg py-3"
                      value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>

                  <div className="my-3">
                    <label htmlFor="email" className="myblack block w-full font-medium">Email*</label>
                    <input type="email" id="email" placeholder="user123@gmail.com" className="mt-1 w-full border px-3 rounded-lg py-3"
                      value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  <div className="my-3">
                    <label htmlFor="phone" className="myblack block w-full font-medium">Phone*</label>
                    <PhoneInput country={"pk"} value={phone} onChange={(phone) => setPhone(phone)} inputStyle={{
                      width: "calc(100% - 55px)",
                      marginLeft: "55px",
                      height: "48px",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                    }}
                      buttonStyle={{
                        width: "60px", // Adjust the flag area width
                        borderRadius: "8px 0 0 8px",
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                      }} />
                  </div>

                  <div className="my-3">
                    <label htmlFor="password" className="myblack block w-full font-medium">Password</label>
                    <input type="password" id="password" className="mt-1 w-full border px-3 rounded-lg py-3"
                      value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FormHelperText>Must be at least 8 characters</FormHelperText>
                  </div>

                  <div className="flex items-center mt-3">
                    <input type="checkbox" id="terms" className="me-2" checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)} />
                    <label htmlFor="terms" className="font-medium">
                      I accept the <Link to="/PrivacyPolicy" className="text-blue underline">Terms of Service</Link>
                    </label>
                  </div>

                  <button type="submit" className="text-white font-semibold px-3 py-3 bg-blue w-full mt-3 rounded-lg" disabled={loading}>
                    {loading ? "Creating account..." : "Create account"}
                  </button>
                </form>

                <Link to="#" className="border rounded-lg my-2 py-3 px-3 sm:px-3 flex justify-center items-center">
                  <div className="flex">
                    <img src={google} alt="google" className="me-2" />
                    <span className="font-semibold text-xs sm:text-base">
                      Sign up with Google
                    </span>
                  </div>
                </Link>

                <p className="text-center block mt-5">
                  Already have an account?{" "}
                  <Link to="/" className="text-blue font-semibold">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={service} alt="" className="w-full h-[100dvh] object-cover object-top" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
