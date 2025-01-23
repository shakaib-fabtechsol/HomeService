import * as React from "react";
import Dr from "../../assets/img/Dr.png";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router";
import { IoMail } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom

const steps = [
  "First Name & Last Name",
  "Select Gender",
  "Date of Birth",
  "Weight",
  "Height",
  "Blood Group",
];

function Register() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    weight: "",
    height: "",
    bloodGroup: "",
  });

  const navigate = useNavigate(); // For redirecting

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit(); // Submit on the last step
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleSkip = () => {
    handleSubmit(); // Skip also submits and redirects
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    navigate("/questions"); // Redirect to questions page
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div>
      <div className="w-full grid md:grid-cols-2 h-[100dvh] overflow-y-auto">
        <div className="hidden md:block">
          <img
            src={Dr}
            alt=""
            className="w-full h-[100dvh] object-cover object-top"
          />
          <div className="absolute top-[26px] left-[30px]">
            <img src={logo} alt="" className="max-w-[260px]" />
          </div>
          <div className="absolute top-[50%] flex flex-col items-center w-2/4">
            <div>
              <p className="font-bold text-3xl lg:text-4xl px-3 text-white">
                Welcome to WiseHealth
              </p>
              <p className="font-medium  px-3 text-white">
                Your 24/7 Personal Health Expert.
              </p>
            </div>
          </div>
        </div>
        <div className=" min-h-[100dvh] flex flex-col justify-center">
          <div className="overflow-y-auto">
            <div className="px-[15px] sm:px-[30px] lg:px-[50px] xl:px-[80px] py-4">
              <div className="flex justify-center md:hidden top-[26px] mb-5 left-[30px]">
                <img src={logo} alt="" className="max-w-[200px]" />
              </div>

              <Box sx={{ width: "100%" }}>
                <Stepper activeStep={activeStep}>
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Step {activeStep + 1}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {activeStep === 0 && (
                      <Box>
                        <h2 className="font-bold text-darkblue text-3xl">
                          Create Your Account
                        </h2>
                        <p className="font-medium myblack mt-2">
                          To provide you with the best analysis and
                          recommendations please provide the data.
                        </p>
                        <div className="my-3">
                  <label
                    htmlFor="email"
                    className="myblack block w-full font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="user123@gmail.com"
                    className="mt-1 w-full border px-3 py-2 rounded-lg py-3 focus-none rounded-3"
                  />
                </div>
                <div className="my-3">
                  <label
                    htmlFor="password"
                    className="myblack block w-full font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    className="mt-1 w-full border px-3 py-2 rounded-lg py-3 focus-none rounded-3"
                  />
                </div>
                      </Box>
                    )}
                    {activeStep === 1 && (
                      <Box>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                        >
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      </Box>
                    )}
                    {activeStep === 2 && (
                      <TextField
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    {activeStep === 3 && (
                      <TextField
                        label="Weight (kg)"
                        name="weight"
                        type="number"
                        value={formData.weight}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                      />
                    )}
                    {activeStep === 4 && (
                      <TextField
                        label="Height (cm)"
                        name="height"
                        type="number"
                        value={formData.height}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                      />
                    )}
                    {activeStep === 5 && (
                      <TextField
                        label="Blood Group"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                      />
                    )}
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {activeStep === steps.length - 1 ? (
                      <>
                        <Button
                          onClick={handleSkip}
                          variant="outlined"
                          sx={{ mr: 1 }}
                          color="secondary"
                        >
                          Skip
                        </Button>
                        <Button
                          onClick={handleNext}
                          variant="contained"
                          color="primary"
                        >
                          Submit
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={handleNext}
                        variant="contained"
                        color="primary"
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                  <p className="text-center block mt-3 ">
                    Don't have an account ?{" "}
                    <Link to="#" className="text-blue">
                      Register
                    </Link>{" "}
                  </p>
                </React.Fragment>
              </Box>
              <form action="">
               
                <Link to="#" className="text-end block text-blue mb-3">
                  Forget Password?
                </Link>
                <button
                  type="button"
                  className="text-white px-3 py-3 bg-blue w-full mt-4 rounded-lg"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
