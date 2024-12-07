import React from "react";
import ErrorIcon from "@mui/icons-material/Error"; 
import { Typography } from "@mui/material"; 
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon style={{ fontSize: "5rem", color: "red" }} /> 
      <Typography variant="h4" color="textPrimary">
        Page Not Found
      </Typography>
      <Link to="/"> 
        Home
      </Link>
    </div>
  );
};

export default NotFound;
