import { Tabs, Tab } from "react-bootstrap";
import TabsProjects from "../components/TabsProjects";
import "../styles/projects.css"

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects">
        <TabsProjects/>
      </div>
    </>
  );
}

export default Projects;
