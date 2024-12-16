import { Button, Container } from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const ProfileDetails = () => {
  return (
    <Container className="d-flex flex-column">
      <div className="rounded-4 bg-white mt-4">
        <div>
          <img
            src="https://png.pngtree.com/background/20230419/original/pngtree-fluid-gradient-colorful-background-picture-image_2447892.jpg"
            alt="sfondo"
            className="rounded-top-4"
            style={{ height: 100, width: `100%`, objectFit: `cover` }}
          />
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxKQClJxfLRjnXNxZi2-6EwQlOgdOj_Sj1A&s"
          alt=""
          width={100}
          height={100}
          className="ms-4"
        />
        <h3 className="ps-4 m-0">Mario Rossi</h3>
        <p className="ps-4 fw-semibold m-0">Architetto</p>
        <p className="ps-4 mb-1">Torino, Piemonte</p>
        <div className="d-flex gap-3 ms-3 mb-3">
          <Button variant="primary" className="rounded-pill">
            <RiSendPlaneFill />
            Invia Messaggio
          </Button>
          <button className="rounded-pill btn btn-outline-primary">
            <IoMdCheckmark />
            Già Segui
          </button>
          <button className="rounded-circle btn btn-outline-primary">
            <BiDotsHorizontalRounded />
          </button>
        </div>
        <div className="border border-top">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home"></Tab>
            <Tab eventKey="Profile" title="Profile"></Tab>
            <Tab eventKey="Post" title="Post"></Tab>
            <Tab eventKey="Lavoro" title="Lavoro"></Tab>
          </Tabs>
        </div>
      </div>

      <div className="rounded-4 bg-white mt-2">
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2">Visitatori del Profilo</p>
          </div>
          <div className="ms-auto">
            <p className="fw-semibold m-2">14</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2">Impressione dei post</p>
          </div>
          <div className="ms-auto">
            <p className="fw-semibold m-2">5</p>
          </div>
        </div>
      </div>
      <div className="rounded-4 bg-white mt-2">
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2"> </p>
          </div>
          <div>
            <p className="fw-semibold m-2">Elementi Salvati</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2"></p>
          </div>
          <div>
            <p className="fw-semibold m-2">Gruppi</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2"> </p>
          </div>
          <div>
            <p className="fw-semibold m-2">Newsletter</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2"> </p>
          </div>
          <div>
            <p className="fw-semibold m-2">Eventi</p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default ProfileDetails;
