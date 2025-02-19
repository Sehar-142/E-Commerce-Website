import React from "react";
import "./Contact.css";
import { Button } from "@mui/material"; 

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:seharsafdar12@gmail.com"> 
        <Button variant="contained" color="primary"> 
          Contact: seharsafdar12@gmail.com
        </Button>
      </a>
    </div>
  );
};

export default Contact;
