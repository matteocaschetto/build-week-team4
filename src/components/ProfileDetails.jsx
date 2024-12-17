import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoPencil } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import ModalToAddExperience from "./ModalToAddExperience";
import { useDispatch } from "react-redux";

const ProfileDetails = () => {
  const [profile, setProfile] = useState(null); // Stato per memorizzare i dati del profilo
  const [isLoading, setIsLoading] = useState(true); // Stato per la gestione del caricamento
  const [modalShow, setModalShow] = useState(false); // stato per gestione del modale
  const dispatch = useDispatch();

  useEffect(() => {
    // Funzione per recuperare il profilo
    const fetchProfile = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE"; // Assicurati di inserire il token corretto
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error("Errore nel recupero del profilo");
        }

        const data = await response.json();
        console.log(data);
        setProfile(data); // Salva i dati nel nostro stato
        dispatch({ type: "ADD_PROFILE", payload: data });
        setIsLoading(false); // Imposta loading a false quando i dati sono stati caricati
      } catch (error) {
        console.error("Errore nel recupero del profilo:", error);
        setIsLoading(false); // Imposta loading a false anche in caso di errore
      }
    };

    fetchProfile();

    // Chiamata per recuperare il profilo
  }, []); // Il hook viene eseguito solo una volta, al montaggio del componente
  useEffect(() => {
    const fetchComment = () => {
      if (profile) {
        console.log("CIAo");
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE";
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          if (res.ok) {
            return res.json();
          }
        });
      }
    };
    fetchComment();
  }, [profile]);

  if (isLoading) {
    return <div>Caricamento...</div>; // Mostra un messaggio di caricamento finché i dati non sono pronti
  }

  if (!profile) {
    return <div>Errore nel caricamento del profilo o dati non disponibili.</div>;
  }

  return (
    <Container className="d-flex flex-column">
      <div className="rounded-4 bg-white mt-4">
        <div>
          <img
            src="https://png.pngtree.com/background/20230419/original/pngtree-fluid-gradient-colorful-background-picture-image_2447892.jpg"
            alt="sfondo"
            className="rounded-top-4"
            style={{ height: 150, width: "100%", objectFit: "cover" }}
          />
        </div>
        <img src={profile.image} alt="Profile" width={100} height={100} className="ms-4 mt-2" />
        {/*il nome, il titolo e l'area dell'utente */}
        <h3 className="ps-4 m-0">
          {profile.name} {profile.surname}
        </h3>
        <p className="ps-4 fw-semibold m-0">{profile.title}</p>
        <p className="ps-4 mb-1">{profile.area}</p>
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
            <Tab eventKey="profile" title="Profile"></Tab>
            <Tab eventKey="post" title="Post"></Tab>
            <Tab eventKey="lavoro" title="Lavoro"></Tab>
          </Tabs>
        </div>
      </div>

      <div className="rounded-4 bg-white mt-2 p-3">
        <div className="d-flex align-items-center fw-semibold">
          <p>Informazioni</p>
          <p className="ms-auto">
            <IoPencil />
          </p>
        </div>
        <div>
          <span>{profile.bio}</span>
        </div>
      </div>
      <div className="rounded-4 bg-white mt-2 p-3">
        <div className=" d-flex align-items-center fw-semibold mb-2">
          <p>Attività</p>
          <div className="d-flex gap-2 ms-auto">
            <Button className="border-primary rounded-pill text-primary bg-white px-3" size="sm">
              Crea un post
            </Button>
            <p>
              <IoPencil />
            </p>
          </div>
        </div>
        <div>
          <span className="d-flex gap-2">
            <Button className="border-secondary rounded-pill text-secondary bg-white px-3" size="sm">
              Post
            </Button>
            <Button className="border-secondary rounded-pill text-secondary bg-white px-3" size="sm">
              Documenti
            </Button>
          </span>
        </div>
        <div className="d-flex align-items-center gap-2 mt-2">
          <img
            src="https://images-ext-1.discordapp.net/external/u9_nLQbZ6ALxXIBDBB0QLVMqM7vko1sMCFid-sWX1Qc/https/www.timevision.it/news/wp-content/uploads/2023/04/esperienze-lavorative.jpg?format=webp&width=1191&height=100"
            alt="work-experience"
          />
          <div>
            <p className="fw-semibold mb-0">Attestato corso HTML e CSS competenze base</p>
            <p>1 pagina</p>
          </div>
        </div>
      </div>
      <div className="rounded-4 bg-white mt-2 p-3">
        <div className=" d-flex align-items-center fw-semibold">
          <p>Esperienze</p>
          <div className="ms-auto">
            <Button
              variant="light"
              className="p-1 border-0 "
              onClick={() => {
                setModalShow(true);
              }}
            >
              <FiPlusCircle className="fs-4 me-2" />
            </Button>
            <ModalToAddExperience show={modalShow} onHide={() => setModalShow(false)} />
            <IoPencil />
          </div>
        </div>
        <div>
          <span>
            Architetto con esperienza nella progettazione e realizzazione di spazi innovativi e sostenibili. Mi occupo di progettazione architettonica,
            pianificazione urbana e restauro, con un forte focus sulla funzionalità, lestetica e lefficienza energetica. Ho una solida esperienza nella gestione
            di progetti complessi, dalla fase di concept fino alla realizzazione, collaborando con team multidisciplinari per garantire il rispetto delle
            normative e delle tempistiche.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default ProfileDetails;
