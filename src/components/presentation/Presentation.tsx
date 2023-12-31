import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import foto from "../img/DSC_1338 - copia.jpg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./presentation.css";

function Presentation() {
  return (
    <>
      <div className="presentation">
        <div className="boxPresentation">
          <div
            style={{ backgroundImage: "url('" + foto + "')" }}
            className="img"
          />
          <div>
            <h2 className="banner__title">Hey, I'm Diana Sauval</h2>
            <p className="banner__subtitle">I’m a front-end developer</p>
            <div className="text-presentation">
              <p>
                I am a graduate of the Certified Tech Developer program offered
                by Digital House and designed by Mercado Libre and Globant.
              </p>
              <p>
                I'm also an independent circus artist. I am empathetic, curious,
                and adaptable to change. I enjoy taking on new challenges.
              </p>
            </div>
            <div className="networks">
              <ul>
                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/diana-sauval/"
                    target="_blank"
                  >
                    <LinkedInIcon sx={{ fontSize: 40 }} className="icon" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://www.instagram.com/dianasauval/"
                    target="_blank"
                  >
                    <InstagramIcon sx={{ fontSize: 40 }} className="icon" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://github.com/dianaSauval" target="_blank">
                    <GitHubIcon sx={{ fontSize: 40 }} className="icon" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
