import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsBellFill, BsFillHouseDoorFill, BsFillPeopleFill, BsSuitcaseLgFill, BsChatDots } from "react-icons/bs";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BiLogoLinkedin className="bg-primary text-white fs-1 rounded" />
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex ms-2">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          </Form>
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action" className="fs-6 me-2 text-center">
              <BsFillHouseDoorFill />
              <div className="fs-6">Home</div>
            </Nav.Link>

            <Nav.Link href="#action" className="fs-6 me-2 text-center">
              <BsFillPeopleFill />
              <div className="fs-6">Rete</div>
            </Nav.Link>

            <Nav.Link href="#action" className="fs-6 me-2 text-center">
              <BsSuitcaseLgFill />
              <div className="fs-6">Lavoro</div>
            </Nav.Link>

            <Nav.Link href="#action" className="fs-6 me-2 text-center">
              <BsChatDots />
              <div className="fs-6">Messaggistica</div>
            </Nav.Link>

            <Nav.Link href="#action1" className="fs-6 text-center">
              <BsBellFill />
              <div className="fs-6">Notifiche</div>
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="ms-2 p-0 mt-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBqw_UX0uhydb8H55EQZr2tsOlskXdzQc1Q&s"
                  alt="User"
                  className="rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profilo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Impostazioni</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
