import{ useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsBellFill, BsFillHouseDoorFill, BsFillPeopleFill, BsSuitcaseLgFill, BsChatDots } from "react-icons/bs";
import { Link } from "react-router-dom";

function MyNavbar() {
  const [profileImage, setProfileImage] = useState(null);                                               // Stato per l'immagine del profilo
  const [isLoading, setIsLoading] = useState(true);                                                     // Stato per la gestione del caricamento

  // Funzione per caricare i dati del profilo
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE";
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati del profilo");
        }

        const data = await response.json();
        setProfileImage(data.image); 
        setIsLoading(false);                                                                         // Dati caricati, imposta isLoading a false
      } catch (error) {
        console.error("Errore nel recupero dei dati del profilo:", error);
        setIsLoading(false);                                                                 // Imposta isLoading a false anche in caso di errore
      }
    };

    fetchProfile();                                                                        // Esegui il fetch quando il componente viene caricato
  }, []);

  if (isLoading) {
    return <div>Caricamento...</div>;                                                      // Mostra "Caricamento..." mentre i dati sono in fase di caricamento
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"}>
          <BiLogoLinkedin className="bg-primary text-white fs-1 rounded" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex ms-2">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          </Form>
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action" className="fs-6 me-2 text-center">
              <Link to={"/"} style={{ color: "#323232" }}>
                <BsFillHouseDoorFill />
              </Link>
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
                  src={profileImage} 
                  alt="User"
                  className="rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">Profilo</Dropdown.Item>
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
