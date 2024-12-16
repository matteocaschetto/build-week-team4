import { Container } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa6";
import { PiNewspaperFill } from "react-icons/pi";
import { MdGroups2, MdEventNote } from "react-icons/md";



const AsideLeft = () => {
  return (
    <Container className="d-flex flex-column">
      <div className="rounded-4 bg-white mt-2">
        <img
          src="https://png.pngtree.com/background/20230419/original/pngtree-fluid-gradient-colorful-background-picture-image_2447892.jpg"
          alt="sfondo"
          className="img-fluid rounded-top-4 "
          height={80}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxKQClJxfLRjnXNxZi2-6EwQlOgdOj_Sj1A&s"
          alt=""
          width={100}
          height={100}
          className="rounded-circle ms-4"
        />
        <h3 className="ps-4 m-0">Mario Rossi</h3>
        <p className="ps-4 fw-semibold m-0">Architetto</p>
        <p className="ps-4 mb-1">Torino, Piemonte</p>
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
            <p className="fw-semibold m-2"> <FaBookmark /></p>
          </div>
          <div>
            <p className="fw-semibold m-2">Elementi Salvati</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2"><MdGroups2 /></p>
          </div>
          <div>
            <p className="fw-semibold m-2">Gruppi</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2"> <PiNewspaperFill /></p>
          </div>
          <div>
            <p className="fw-semibold m-2">Newsletter</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2"> <MdEventNote /></p>
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
export default AsideLeft;
