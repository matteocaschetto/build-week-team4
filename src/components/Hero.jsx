import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaRegImage } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import {BiWorld} from 'react-icons/bi'

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
        <div className="d-flex justify-content-around mt-4 gap-4">
          <p className="d-flex align-items-center gap-1 fw-semibold">
            <FaRegImage className="fs-4" />
            Contenuti Multimediali
          </p>
          <p className="d-flex align-items-center gap-1 fw-semibold">
            {" "}
            <MdEventNote className="fs-4" />
            Evento
          </p>
          <p className="d-flex align-items-center gap-1 fw-semibold">
            {" "}
            <MdOutlineArticle className="fs-4" /> Scrivi un articolo
          </p>
        </div>
      </div>
      <hr />
      <div className="rounded-4 bg-white mt-2 p-3">
        <div className="d-flex align-items-start">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxKQClJxfLRjnXNxZi2-6EwQlOgdOj_Sj1A&s" width={60} height={60} className="rounded-circle me-2" alt="boh" />
          </div>
          <div className="d-flex flex-column">
            <p className="text-secondary fs-6 my-0"><span className="text-black fs-5 fw-bold">Diego Fontana</span> *1</p>
            <p className="text-secondary fs-6 my-0">Copywriter Docente Autore, Contattami per workshop e...</p>
            <div className="d-flex align-items-center">
               <p className="text-secondary fs-6 my-0">1 Giorno <span className="text-secondary">&#8226</span> Modificato <span className="text-secondary">&#8226</span></p><BiWorld className="ms-2 fs-4"/>
            </div>
          </div>
        </div>
        <div>
          <p className="fs-6 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti nostrum molestias. Ut incidunt commodi officia eos natus accusamus suscipit ab inventore aperiam dolor? Mollitia labore aut reprehenderit? Sequi, eaque.</p>
        </div>
        <div style={{width:"60%", height:"auto", marginInline:"auto"}}>
          <img src="https://cdn.pixabay.com/photo/2022/10/17/10/41/river-7527311_640.jpg" width={"100%"} height={250} alt="" />
        </div>
    </div>
    </Container>
  );
};

export default Hero;
