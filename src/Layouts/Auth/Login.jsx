import React, { useState, useEffect } from "react";
import google from "../../assets/img/google.png";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import "react-phone-input-2/lib/style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      const response = await axios.post("https://homeservice.thefabulousshow.com/api/Userlogin", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); 

        const userRole = response.data.user.role;

        if (userRole === 2) {
          navigate("/provider/services"); 
        } else if (userRole === 1) {
          navigate("/customer/services"); 
        } else {
          navigate("/"); 
        }
      } else {
        setError("Invalid credentials"); 
      }
    } catch (err) {
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="w-full justify-center flex h-[100dvh] py-9">
      <div className="flex flex-col justify-center min-h-[100dvh] w-full max-w-[700px]">
        <div className="px-[15px] sm:px-[30px] py-3 lg:px-[50px] xl:px-[130px]">
          <div className="flex justify-center pt-10">
            <img src={logo} alt="" className="px-5 py-4 w-[270px]" />
          </div>
          <h2 className="font-semibold text-center text-[#181D27] text-3xl">
            Log in to your account
          </h2>
          <p className="font-normal text-center myblack mb-5 mt-2">
            Welcome! Please enter your details.
          </p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label
                htmlFor="email"
                className="myblack block w-full font-medium"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="user123@gmail.com"
                className="mt-1 w-full border px-3 rounded-lg py-3 focus-none rounded-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="my-3">
              <label
                htmlFor="password"
                className="myblack block w-full font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder=""
                className="mt-1 w-full border px-3 rounded-lg py-3 focus-none rounded-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-wrap mb-3 justify-end items-center">
              
              <Link to="#" className="block font-medium text-blue">
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="text-white font-semibold px-3 py-3 bg-blue w-full mt-3 rounded-lg"
            >
              Sign in
            </button>
          </form>

          <Link
            to="#"
            className="border rounded-lg my-2 py-3 px-3 sm:px-3 flex justify-center items-center"
          >
            <div className="flex ">
              <img src={google} alt="google" className="me-2" />
              <span className="font-semibold text-xs sm:text-base">
                Sign in with Google
              </span>
            </div>
          </Link>

          <p className="text-center block mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
