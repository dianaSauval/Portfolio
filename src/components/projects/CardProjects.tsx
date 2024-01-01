import MediaCard from "../cards/Card";
import "./cardProjects.css";
import data from "../../data/projects.json"

function CardProjects() {
    return (
      <>
        <h1 className="title">Projects</h1>
        
        <div className="cardProjects">
            {data.projects.map((proj)=> <MediaCard project={proj}/>)}

        </div>
      </>
    );
  }
  
  export default CardProjects;