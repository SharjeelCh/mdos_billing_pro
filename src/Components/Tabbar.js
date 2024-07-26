import React, { useState } from "react";
import "../Styles/Tabbar.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function Tabbar() {
  const [show, setshow] = useState(false);
  const nav = useNavigate();
  return (
    <header className="header">
      <div className="logo">pleo</div>
      <button
        className="menu"
        onClick={() => {
          setshow(!show);
        }}
      >
        show
      </button>
      {show && (
        <nav className="nav2">
          <a href="#services" className="item">
            Services
          </a>
          <a href="#address" className="item">
            Address
          </a>
          <a href="#review" className="item">
            Review
          </a>
        </nav>
      )}
      <nav className="nav">
        <a href="#services" className="item">
          Services
        </a>
        <a href="#address" className="item">
          Address
        </a>
        <a href="#review" className="item">
          Review
        </a>
      </nav>
      <div className="auth">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "#040365" }}
          onClick={()=>{nav('/Login')}}
        >
          Login
        </Button>
      </div>
    </header>
  );
}

export default Tabbar;
