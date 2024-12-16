import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiLogoLinkedin } from "react-icons/bi";
import {
  BsBellFill,
  BsFillHouseDoorFill,
  BsFillPeopleFill,
  BsSuitcaseLgFill,
  BsChatDots,
  BsPersonCircle
} from "react-icons/bs";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <BiLogoLinkedin className="bg-primary text-white fs-1 rounded"></BiLogoLinkedin>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex ms-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action" className="fs-4 me-2">
              <BsFillHouseDoorFill>Home</BsFillHouseDoorFill>
            </Nav.Link>

            <Nav.Link href="#action" className="fs-4 me-2">
              <BsFillPeopleFill>Rete</BsFillPeopleFill>
            </Nav.Link>

            <Nav.Link href="#action" className="fs-4 me-2">
              <BsSuitcaseLgFill>Lavoro</BsSuitcaseLgFill>
            </Nav.Link>

            <Nav.Link href="#action" className="fs-4 me-2">
              <BsChatDots>Messaggistica</BsChatDots>
            </Nav.Link>

            <Nav.Link href="#action1" className="fs-4">
              <BsBellFill></BsBellFill>
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="success" className="ms-2 p-0 mt-3">
                <BsPersonCircle></BsPersonCircle>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
