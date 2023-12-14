import { Button } from "react-bootstrap";
import "../styles/about.css"

function About() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("CV-Diana-Sauval.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-Diana-Sauval.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="about">
      <h1>About</h1>
      <div className="textAbout">
      <p>
        Hey, my name is Diana Sauval. I'm a front-end web developer from
        Argentina.
      </p>
      <p>I am a graduate of the Certified Tech Developer program offered by Digital House and designed by Mercado Libre and Globant.</p>
      <p>
      I'm also an independent circus artist. I am empathetic, curious, and adaptable to change. I enjoy taking on new
        challenges.
      </p>      
      <Button variant="secondary" onClick={onButtonClick}>My CV</Button>
      </div>
    </div>
  );
}

export default About;
