import { Link } from "react-router-dom";
import "../styles/home.css";
import { Button } from "react-bootstrap";
import Presentation from "../components/presentation/Presentation";
import CardProjects from "../components/projects/CardProjects";

function Home() {
  return (<>
    <div className="body">
      <Presentation/>
{/*       <div className="buttonsHome">
        <Link to="/projects">
          <Button variant="outline-primary">see my projects</Button>
        </Link>
        <Link to="/about">
          <Button variant="outline-primary">more about me</Button>
        </Link>
      </div> */}
          
      <section id="projects">
        <CardProjects/>
      </section>
      <section id="contact">
        <h3>Hola</h3>
      </section>
      </div>
      </>
  );
}

export default Home;
