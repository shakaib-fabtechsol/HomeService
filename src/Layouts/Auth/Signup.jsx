import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2';
import service from '../../assets/img/service.png';
import google from '../../assets/img/google.png';
import logo from '../../assets/img/logo.png';
import {FormHelperText} from '@mui/material';

function Signup () {
  useEffect (() => {
    document.title = 'Signup';
  }, []);

  const location = useLocation ();
  const userType = location.state?.userType || "";
  const navigate = useNavigate ();
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [phone, setPhone] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState (null);
  const [loading, setLoading] = useState (false);


  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setLoading(true);
  
    const userData = {
      name,
      email,
      phone,
      role: userType,
      password,
    };
  
    try {
      const response = await axios.post(
        'https://backend.homeprodeals.com/api/Register',
        userData
      );
  
      if (response.data.user) {
        const userId = response.data.user.id; // Extract the user ID from the API response
  
        Swal.fire({
          icon: 'success',
          title: 'Good Job',
          text: 'You must accept the terms of service to sign up.',
          showConfirmButton: false,
        });
  
        // Navigate to PrivacyPolicy page with the user ID
        navigate('/PrivacyPolicy', { state: { userId } });
      }
    } catch (err) {
      setError('Registration failed. Please check your details.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="">
      <div className="w-full grid md:grid-cols-2 h-[100dvh] overflow-y-auto">
        <div className="overflow-y-auto scroll-0 min-h-[100dvh]">
          <div className="">
            <img
              src={logo}
              alt=""
              className="px-5 py-4 size-48 object-contain mx-auto"
            />
          </div>
          <div className="">
            <div className="flex flex-col justify-center">
              <div className="px-[15px] sm:px-[30px] lg:px-[50px] xl:px-[130px] py-4">
                <h2 className="font-semibold text-[#181D27] text-darkblue text-3xl">
                  Sign up
                </h2>
                <p className="font-normal myblack mt-2">
                  Welcome! Please enter your details.
                </p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                  <div className="my-3 hidden">
                    <label
                      htmlFor="role"
                      className="myblack block w-full font-medium"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      value={userType}
                      readOnly
                      className="mt-1 w-full border px-3 rounded-lg py-3"
                    />
                  </div>

                  <div className="my-3">
                    <label
                      htmlFor="name"
                      className="myblack block w-full font-medium"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="mt-1 w-full border px-3 rounded-lg py-3"
                      value={name}
                      onChange={e => setName (e.target.value)}
                      required
                    />
                  </div>

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
                      className="mt-1 w-full border px-3 rounded-lg py-3"
                      value={email}
                      onChange={e => setEmail (e.target.value)}
                      required
                    />
                  </div>

                  <div className="my-3">
                    <label
                      htmlFor="phone"
                      className="myblack block w-full font-medium"
                    >
                      Phone*
                    </label>
                    <PhoneInput
                      id="phone"
                      country={'us'}
                      value={phone}
                      onChange={phone => setPhone (phone)}
                      inputStyle={{
                        width: 'calc(100% - 55px)',
                        marginLeft: '55px',
                        height: '48px',
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                      }}
                      buttonStyle={{
                        width: '60px',
                        borderRadius: '8px 0 0 8px',
                        background: '#fff',
                        border: '1px solid #e5e7eb',
                      }}
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
                      className="mt-1 w-full border px-3 rounded-lg py-3"
                      value={password}
                      onChange={e => setPassword (e.target.value)}
                      required
                    />
                    <FormHelperText>
                      Must be at least 8 characters
                    </FormHelperText>
                  </div>

                  <button
                    type="submit"
                    className={`text-white font-semibold px-3 py-3 bg-blue w-full mt-3 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Creating account...' : 'Create account'}
                  </button>
                </form>

                <Link
                  to="#"
                  className="border rounded-lg my-2 py-3 px-3 sm:px-3 flex justify-center items-center"
                >
                  <div className="flex">
                    <img src={google} alt="google" className="me-2" />
                    <span className="font-semibold text-xs sm:text-base">
                      Sign up with Google
                    </span>
                  </div>
                </Link>

                <p className="text-center block mt-5">
                  Already have an account?{' '}
                  <Link to="/" className="text-blue font-semibold">
                    Login
                  </Link>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={service}
            alt=""
            className="w-full h-[100dvh] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
