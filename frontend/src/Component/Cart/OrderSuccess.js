

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";  // Correct import path for MUI v5
import "./orderSuccess.css";
import { Typography } from "@mui/material";  // Updated for MUI v5
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon style={{ fontSize: 80, color: "green" }} />  
      <Typography variant="h4" component="h2">
        Your Order has been Placed Successfully
      </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
