import { Button, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaRegImage } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import {BiWorld, BiArrowToRight, BiLike, BiHeart, BiComment} from 'react-icons/bi'
import Lexusvideo from '../assets/video/Lexusvideo.mp4'

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
        <h4 className="fs-6 fw-bold mb-4">Consigliati per te</h4>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <div className="d-flex me-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxKQClJxfLRjnXNxZi2-6EwQlOgdOj_Sj1A&s" alt="" width={40} height={40} className="rounded-circle me-3" />
              <div className="d-flex flex-column">
                <p className="my-0 fs-5 fw-bold">Leonardo Ferrante-Carrante</p>
                <p className="my-0 fs-6 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="my-0 fs-6 text-secondary">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div>
              <Button className="text-primary btn-outline-primary rounded-pill px-4 bg-transparent">+ Segui</Button>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <div className="d-flex me-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxKQClJxfLRjnXNxZi2-6EwQlOgdOj_Sj1A&s" alt="" width={40} height={40} className="rounded-circle me-3" />
              <div className="d-flex flex-column">
                <p className="my-0 fs-5 fw-bold">Leonardo Ferrante-Carrante</p>
                <p className="my-0 fs-6 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="my-0 fs-6 text-secondary">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div>
              <Button className="text-primary btn-outline-primary rounded-pill px-4 bg-transparent">+ Segui</Button>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <div className="d-flex me-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxKQClJxfLRjnXNxZi2-6EwQlOgdOj_Sj1A&s" alt="" width={40} height={40} className="rounded-circle me-3" />
              <div className="d-flex flex-column">
                <p className="my-0 fs-5 fw-bold">Leonardo Ferrante-Carrante</p>
                <p className="my-0 fs-6 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="my-0 fs-6 text-secondary">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div>
              <Button className="text-primary btn-outline-primary rounded-pill px-4 bg-transparent">+ Segui</Button>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center align-items-center w-100">
            <p className="fw-bold fs-5 my-0">Visualizza altro</p>
            <BiArrowToRight className="fs-2 ms-2"></BiArrowToRight>
          </div>
        </div>
      </div>
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
     <div className="rounded-4 bg-white mt-2">
     <div className="d-flex mt-2 p-3">
      <div>
        <img src="data:image/jpeg;base64,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" width={60} height={60} className="me-2" alt="boh" />
      </div>
      <div className="d-flex flex-column lh-1">
        <p className="text-secondary fs-6 my-0 pb-2"><span className="text-black fs-5 fw-bold">Lexus Italia</span></p>
        <p className="text-secondary fs-6 my-0">Da oggi avere la tua nuova Lexus non è mai stato così facile e sicuro, comodamente da casa tua: fissa il primo appuntamento in videochiamata</p>
      </div>
      </div>
      <div className="video-container">
        <video width="100%" controls>
        <source src={Lexusvideo} type="video/mp4"></source>
        </video>
      </div>
      <hr />
      <div className="d-flex justify-content-around mb-3">
        <div className="d-flex align-items-center">
          <BiLike className="fs-4"></BiLike>
          <p className="fs-5 ms-2 my-0 fw-semibold">Like</p>
        </div>
        <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <BiHeart className="fs-4"></BiHeart>
          <p className="fs-5 ms-2 my-0 fw-semibold">Add to Favourites</p>
        </div>
        </div>
        <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <BiComment className="fs-4"></BiComment>
          <p className="fs-5 ms-2 my-0 fw-semibold">Comment</p>
        </div>
        </div>
      </div>
     </div>
    <div className="rounded-4 bg-white mt-2">
     <div className="d-flex mt-2 p-3">
      <div>
        <img src="data:image/png;base64,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" width={60} height={60} className="me-2" alt="boh" />
      </div>
      <div className="d-flex flex-column lh-1">
        <p className="text-secondary fs-6 my-0 pb-2"><span className="text-black fs-5 fw-bold">Netflix Italia</span></p>
        <p className="text-secondary fs-6 my-0">Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.</p>
      </div>
      </div>
      <div className="">
        <img src="data:image/jpeg;base64,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" width={"100%"} height={"250"} className="me-2" alt="boh" />
      <hr />
      <div className="d-flex justify-content-around mb-3">
        <div className="d-flex align-items-center">
          <BiLike className="fs-4"></BiLike>
          <p className="fs-5 ms-2 my-0 fw-semibold">Like</p>
        </div>
        <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <BiHeart className="fs-4"></BiHeart>
          <p className="fs-5 ms-2 my-0 fw-semibold">Add to Favourites</p>
        </div>
        </div>
        <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <BiComment className="fs-4"></BiComment>
          <p className="fs-5 ms-2 my-0 fw-semibold">Comment</p>
        </div>
        </div>
      </div>
     </div>
    </div>
    </Container>
  );
};

export default Hero;
