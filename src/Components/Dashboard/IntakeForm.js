import React, { useState } from "react";
import {
  Container,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  Typography,
  Box,
  Checkbox,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const states = ["State 1", "State 2", "State 3"];
const painScale = [
  "0:Normal",
  "1:Trace",
  "2:Minimal",
  "3:Mild",
  "4:Slight",
  "5:Medium",
  "6:Moderate",
  "7:Strong",
  "8:Severe",
  "9:Horrible",
  "10:Extreme",
];
const painTypes = [
  "sharp",
  "stabbing",
  "burning",
  "dull",
  "shooting",
  "radiating",
  "tingling",
  "stiffness",
  "numbness",
  "paresthesia",
  "aching",
  "piercing",
  "constant",
  "others",
];
const bodyParts = ["Head", "Neck", "Shoulder", "Back", "Legs", "Arms"];

const IntakeForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    zip: "",
    emergencyContactLastName: "",
    emergencyContactFirstName: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",
    insurance: "",
    chiefComplaint: "",
    conditionDuration: "",
    painScale: "",
    painType: [],
    siteOfPain: "",
    painBetter: [],
    currentMedicalConditions: "",
    pastMedicalConditions: "",
    familyHistory: "",
    currentInjuries: "",
    pastInjuries: "",
    allergies: "",
    icd: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => {
        if (name === "painType" || name === "painBetter") {
          const values = prevState[name];
          return {
            ...prevState,
            [name]: checked
              ? [...values, value]
              : values.filter((item) => item !== value),
          };
        }
        return {
          ...prevState,
          [name]: checked ? [...prevState[name], value] : prevState[name].filter((item) => item !== value),
        };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleNext = () => {
    setFormStep(formStep + 1);
  };

  const handleBack = () => {
    setFormStep(formStep - 1);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom fontFamily={'revert-layer'}>
          {formStep === 1 ? "Intake Form" : "Pain Assessment Form"}
        </Typography>
        {formStep === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                label="City"
                fullWidth
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="zip"
                label="Zip"
                fullWidth
                value={formData.zip}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="emergencyContactLastName"
                label="Emergency Contact Last Name"
                fullWidth
                value={formData.emergencyContactLastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="emergencyContactFirstName"
                label="Emergency Contact First Name"
                fullWidth
                value={formData.emergencyContactFirstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="emergencyContactRelationship"
                label="Emergency Contact Relationship"
                fullWidth
                value={formData.emergencyContactRelationship}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="emergencyContactPhone"
                label="Emergency Contact Phone"
                fullWidth
                value={formData.emergencyContactPhone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Do you have insurance?</FormLabel>
                <RadioGroup
                  row={!isMobile}
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="uninsured"
                    control={<Radio />}
                    label="Uninsured"
                  />
                  <FormControlLabel
                    value="one_insurance"
                    control={<Radio />}
                    label="One Insurance"
                  />
                  <FormControlLabel
                    value="two_insurance"
                    control={<Radio />}
                    label="Two Insurance"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            </Grid>
          </Grid>
        )}
        {formStep === 2 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="chiefComplaint"
                label="Chief Complaint"
                fullWidth
                value={formData.chiefComplaint}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="conditionDuration"
                label="How long have you had this condition?"
                fullWidth
                value={formData.conditionDuration}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              {isMobile ? (
                <FormControl fullWidth>
                  <InputLabel>Pain Scale</InputLabel>
                  <Select
                    name="painScale"
                    value={formData.painScale}
                    onChange={handleChange}
                  >
                    {painScale.map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <FormControl component="fieldset">
                  <FormLabel component="legend">Pain Scale</FormLabel>
                  <RadioGroup
                    row
                    name="painScale"
                    style={{ flex: 1, flexDirection: "row" }}
                    value={formData.painScale}
                    onChange={handleChange}
                  >
                    {painScale.map((num) => (
                      <FormControlLabel
                        key={num}
                        value={num}
                        control={<Radio />}
                        label={num}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            </Grid>
            <Grid item xs={12}>
              {isMobile ? (
                <FormControl fullWidth>
                  <InputLabel>Pain Type</InputLabel>
                  <Select
                    multiple
                    name="painType"
                    value={formData.painType}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    {painTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        <Checkbox checked={formData.painType.includes(type)} />
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <FormControl component="fieldset">
                  <FormLabel component="legend">Pain Type</FormLabel>
                  <Box display="flex" flexWrap="wrap">
                    {painTypes.map((type) => (
                      <FormControlLabel
                        key={type}
                        control={
                          <Checkbox
                            name="painType"
                            value={type}
                            checked={formData.painType.includes(type)}
                            onChange={handleChange}
                          />
                        }
                        label={type}
                      />
                    ))}
                  </Box>
                </FormControl>
              )}
            </Grid>
            <Grid item xs={12}>
              {isMobile ? (
                <FormControl fullWidth>
                  <InputLabel>Site of Pain</InputLabel>
                  <Select
                    name="siteOfPain"
                    value={formData.siteOfPain}
                    onChange={handleChange}
                  >
                    {bodyParts.map((part) => (
                      <MenuItem key={part} value={part}>
                        {part}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <FormControl component="fieldset">
                  <FormLabel component="legend">Site of Pain</FormLabel>
                  <RadioGroup
                    row
                    name="siteOfPain"
                    value={formData.siteOfPain}
                    onChange={handleChange}
                  >
                    {bodyParts.map((part) => (
                      <FormControlLabel
                        key={part}
                        value={part}
                        control={<Radio />}
                        label={part}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  What makes the pain feel better?
                </FormLabel>
                <Box display="flex" flexWrap="wrap">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="painBetter"
                        value="heat"
                        checked={formData.painBetter.includes("heat")}
                        onChange={handleChange}
                      />
                    }
                    label="Heat"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="painBetter"
                        value="ice"
                        checked={formData.painBetter.includes("ice")}
                        onChange={handleChange}
                      />
                    }
                    label="Ice"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="painBetter"
                        value="rest"
                        checked={formData.painBetter.includes("rest")}
                        onChange={handleChange}
                      />
                    }
                    label="Rest"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="painBetter"
                        value="activity"
                        checked={formData.painBetter.includes("activity")}
                        onChange={handleChange}
                      />
                    }
                    label="Activity"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="painBetter"
                        value="medication"
                        checked={formData.painBetter.includes("medication")}
                        onChange={handleChange}
                      />
                    }
                    label="Medication"
                  />
                </Box>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="currentMedicalConditions"
                label="Current Medical Conditions"
                fullWidth
                value={formData.currentMedicalConditions}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="pastMedicalConditions"
                label="Past Medical Conditions"
                fullWidth
                value={formData.pastMedicalConditions}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="familyHistory"
                label="Family History"
                fullWidth
                value={formData.familyHistory}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="currentInjuries"
                label="Current Injuries"
                fullWidth
                value={formData.currentInjuries}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="pastInjuries"
                label="Past Injuries"
                fullWidth
                value={formData.pastInjuries}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="allergies"
                label="Allergies"
                fullWidth
                value={formData.allergies}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="icd"
                label="ICD Code"
                fullWidth
                value={formData.icd}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                style={{ marginLeft: "8px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default IntakeForm;
