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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS6ArMoMcbj-RiMp6fOBcEMatQQMkhBouqg&s" width={"100%"} height={"400"} className="me-2" alt="boh" />
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
