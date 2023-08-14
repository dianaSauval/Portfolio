import { Link } from "react-router-dom";
import CollapsibleExample from "../components/Navbar";
import "../styles/home.css";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="banner">
      <h2 className="banner__title">Hey, I'm Diana Sauval</h2>
      <p className="banner__subtitle">I’m a front-end developer</p>
      <div className="buttonsHome">
        <Link to="/projects">
          <Button variant="outline-primary">see my projects</Button>
        </Link>
        <Link to="/about">
          <Button variant="outline-primary">more about me</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
