import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaRegImage } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";

const Hero = () => {
  return (
    <Container className="d-flex flex-column">
      <div className="rounded-4 bg-white mt-2 p-3">
        <h3>La vita lavorativa dura in media 42 anni.</h3>
        <p>Investi nella tua crescita a lungo termine con Premium.</p>
        <button className="rounded-4 bg-warning border border-none p-1 fw-semibold">
          Scegli Premium
        </button>
      </div>
      <div className="rounded-4 bg-white mt-2 px-3 pt-3" >
        <div className="d-flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxKQClJxfLRjnXNxZi2-6EwQlOgdOj_Sj1A&s"
            alt=""
            width={60}
            height={60}
            className="rounded-circle"
          />
          <InputGroup>
            <Form.Control
              className="rounded-5"
              placeholder="Crea un post"
              aria-label="text"
            />
          </InputGroup>
        </div>
        <div className="d-flex mt-4 gap-4">
          <p className="d-flex align-items-center gap-1">
            <FaRegImage />
            Contenuti Multimediali
          </p>
          <p className="d-flex align-items-center gap-1">
            {" "}
            <MdEventNote />
            Evento
          </p>
          <p className="d-flex align-items-center gap-1">
            {" "}
            <MdOutlineArticle /> Scrivi un articolo
          </p>
        </div>
      </div>
      <hr />
      <div className="rounded-4 bg-white mt-2 p-3">
        
    </div>
      
    </Container>
  );
};

export default Hero;
