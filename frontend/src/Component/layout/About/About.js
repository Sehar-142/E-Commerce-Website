import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material"; // Updated import from MUI v5
import YouTubeIcon from "@mui/icons-material/YouTube"; // Updated import from MUI Icons v5
import InstagramIcon from "@mui/icons-material/Instagram"; // Updated import from MUI Icons v5
import about from "../../../images/about.jpg"

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            //   src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
            src={about}
              alt="Founder"
            />
            <Typography>Sehar Safdar</Typography>
            <Button onClick={visitInstagram} color="primary" variant="contained">
              Visit Instagram
            </Button>
            <span>
              This is a sample website made by @seharsafdar with the purpose of Making a Mern Stack Project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
