import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuDrawer from "../menu/MenuBurger";
import "./navbar.css"

function OffcanvasExample() {
  return (
    <>
      <Navbar key="lg" expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/" className="welcome">
            Welcome
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Welcome
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3"> 
              <MenuDrawer/>
                {/* <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>  */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>          
        </Container>        
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
