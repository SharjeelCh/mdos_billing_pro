import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "../Styles/forgot.css";
import { getUser, changePassword } from "../PHP/ApiCalls";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [showchange, setShowchange] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const nav = useNavigate();

  const handleemail = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get("email"));
    getUser(email)
      .then((response) => {
        setName(response);
        if (response) {
          setShowchange(!showchange);
        }
      })
      .catch((error) => {
        setError("Email not found");
      });
  };

  const changePass = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newpass = data.get("newpassword");
    const confirmPass = data.get("newpasswordConfirm");

    if (newpass !== confirmPass) {
      setPasswordError("Passwords do not match");
      return;
    }

    changePassword(email, newpass)
      .then((response) => {
        if (response) setPasswordError("");
        nav("/Login");
      })
      .catch((error) => {});
  };

  return (
    <Box
      className="cont"
      component={"form"}
      onSubmit={showchange ? changePass : handleemail}
    >
      {!showchange ? (
        <div className="inner">
          <h2 className="head">Forgot Password?</h2>
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="current-email"
          />
          {error && <p>{error}</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Search
          </Button>
        </div>
      ) : (
        <div className="inner">
          <h2 className="head">Hi {name}</h2>
          <TextField
            margin="normal"
            required
            fullWidth
            name="newpassword"
            label="New Password"
            type="password"
            id="newpassword"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="newpasswordConfirm"
            label="Confirm New Password"
            type="password"
            id="newpasswordConfirm"
          />
          {passwordError && <p>{passwordError}</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Change
          </Button>
        </div>
      )}
    </Box>
  );
};

export default ForgetPassword;
