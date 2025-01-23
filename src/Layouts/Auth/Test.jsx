import * as React from "react";
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

function MultiStepForm() {
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
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
        <Box sx={{ mt: 2 }}>
          {activeStep === 0 && (
            <Box>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
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
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
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
      </React.Fragment>
    </Box>
  );
}

export default MultiStepForm;
