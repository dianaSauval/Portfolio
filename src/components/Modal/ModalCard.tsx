import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { IProjects } from "../../@types/types";
import { Button as ButtonBootstrap } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../img/proyecto-serendipia4.png";
import image2 from "../img/proyecto-serendipia5.png";
import CloseIcon from '@mui/icons-material/Close';
import "./modalCard.css";
import ReactPlayer from "react-player";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface Props {
  handleOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
  project: IProjects;
}

export default function NestedModal({
  handleOpen,
  open,
  handleClose,
  project,
}: Props) {
  return (
    <div>
      <ButtonBootstrap
        onClick={handleOpen}
        variant="outline-primary"
        className="buttonCard"
      >
        LEARN MORE
      </ButtonBootstrap>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, color: "#0E0E0E", width: 800, display: "flex" }}
          className="textModalCard"
        >
{/*           <Box
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: 400,
              width: "100%",
            }}
          ></Box> */}
          <Box             sx={{
              height: "100%",
              width: "100%",
            }}>
          <ReactPlayer
            url={require("../video/DuoSerendipia.webm")}
            width="100%"
            height="100%"
            playing={true}
            loop
            muted
            className="react-player"
          /></Box>
{/*           <Box
            sx={{
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: 400,
              width: "100%",
            }}
          ></Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              textAlign: "justify",
              width: "90%",
              position:"relative"
            }}
          >
            <Button
            id="buttonCross"
            onClick={handleClose}
            >
              <CloseIcon/>
            </Button>
            <h2 id="parent-modal-title">{project.project.title}</h2>
            <p id="parent-modal-description">{project.project.description}</p>
            <ButtonBootstrap variant="outline-primary">
              <Link
                target="_blank"
                to={project.project.website}
                className="buttonCard"
              >
                View Website
              </Link>
            </ButtonBootstrap>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
