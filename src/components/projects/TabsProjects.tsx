import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function TabsProjects() {
  return (
    <Tabs
      defaultActiveKey="Booking"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Booking" title="Booking" className="tab">
        <p>
          Reservation website created with React, an API built using Spring MVC,
          and deployed on AWS Elastic Beanstalk.
        </p>
        <p>
          Final Integrative Project of the first year in the Certified Tech
          Developer career.
        </p>
        <div className="video">
        <div className="links">
          <Link
            className="animatedLink"
            to="https://github.com/dianaSauval/digitalbooking"
            target="_blank"
          >
            Link to the GitHub repository
          </Link>
          </div>
          <ReactPlayer
            url={require("../video/DigitalBooking.mp4")}
            width="60%"
            height="100%"
            playing={true}
            loop
            muted
            className="react-player"
          />
        </div>
      </Tab>
      <Tab eventKey="DH-MARVEL" title="DH-MARVEL" className="tab">
        <p>
          Website developed using Typescript and Next.js technologies for the
          final project of Front III in the second year of the Certified Tech
          Developer career at Digital House.
        </p>
        <div className="video">
          <div className="links">
          <Link
            className="animatedLink"
            to="https://github.com/dianaSauval/DH-MARVEL"
            target="_blank"
          >
            Link to the GitHub repository
          </Link>
          <Link
            className="animatedLink"
            to="https://ctd-esp-fe3-examen-final.vercel.app/"
            target="_blank"
          >
            Link with Vercel
          </Link>
          </div>
          <ReactPlayer
            url={require("../video/DH-Marvel.mkv")}
            width="60%"
            height="100%"
            playing={true}
            loop
            muted
            className="react-player"
          />
        </div>
      </Tab>
      <Tab eventKey="Rick-and-Morty" title="Rick-and-Morty" className="tab">
        <p>
          Website developed using Typescript and React technologies for the
          final project of Front-end I in the second year of the Certified Tech
          Developer program at Digital House.
        </p>
        <div className="video">
          <div className="links">
            <Link
            className="animatedLink"
              to="https://github.com/dianaSauval/Rick-and-Morty"
              target="_blank"
            >
              Link to the GitHub repository
            </Link>
            <Link
            className="animatedLink"
              to="https://dianasauval.github.io/Rick-and-Morty/"
              target="_blank"
            >
              Link to the GitPages
            </Link>
            </div>
          <ReactPlayer
            url={require("../video/Rick-and-Morty.mkv")}
            width="60%"
            height="100%"
            playing={true}
            loop
            muted
            className="react-player"
          />
        </div>
      </Tab>
      <Tab eventKey="Simpsons" title="Simpsons" className="tab">
        <p>
          Website developed using Typescript and React technologies for the
          final project of Front-end II in the second year of the Certified Tech
          Developer program at Digital House.
        </p>
        <div className="video">
        <div className="links">
            <Link
              className="animatedLink"
              to="https://github.com/dianaSauval/Proyecto-Simpsons"
              target="_blank"
            >
              Link to the GitHub repository
            </Link>
            <Link
              className="animatedLink"
              to="https://dianasauval.github.io/Proyecto-Simpsons/"
              target="_blank"
            >
              Link to the GitPages
            </Link>
            </div>
          <ReactPlayer
            url={require("../video/Simpsons.mkv")}
            width="60%"
            height="100%"
            playing={true}
            loop
            muted
            className="react-player"
          />
        </div>
      </Tab>
    </Tabs>
  );
}

export default TabsProjects;
