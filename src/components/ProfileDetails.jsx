import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoPencil } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import ModalToAddExperience from "./ModalToAddExperience";
import { useDispatch, useSelector } from "react-redux";
import ModalEditExperience from "./ModalEditExperience";
import { Trash } from "react-bootstrap-icons";

const ProfileDetails = () => {
  const [profile, setProfile] = useState(null); // Stato per memorizzare i dati del profilo
  const [isLoading, setIsLoading] = useState(true); // Stato per la gestione del caricamento
  const [modalShow, setModalShow] = useState(false); // stato per gestione del modale
  const [modalEdit, setModalEdit] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState({});
  const [imageFile, setImageFile] = useState(null); // Stato per il file immagine
  const [experienceImages, setExperienceImages] = useState([]); // Stato per le immagini delle esperienze
  const allExperiences = useSelector((state) => state.experiences);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE";
  const dispatch = useDispatch();

  const deleteExperience = (exp) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${exp._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("eleminita");
          dispatch({ type: "REMOVE_EXPERIENCES", payload: exp._id });
          console.log("Deleted experience");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching profile");
        }

        const data = await response.json();
        setProfile(data);
        dispatch({ type: "ADD_PROFILE", payload: data });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then((res) =>
          res.ok ? res.json() : Promise.reject("Error fetching experiences")
        )
        .then((arr) => setExperiences(arr))
        .catch((err) => console.log(err));
    }
  }, [profile, allExperiences]);

  const handleImageChange = (e, experienceId) => {
    setImageFile(e.target.files[0]); // Salva il file immagine selezionato
    // Salva l'immagine per una specifica esperienza
    const newExperienceImages = { ...experienceImages };
    newExperienceImages[experienceId] = e.target.files[0];
    setExperienceImages(newExperienceImages);
  };

  const handleImageUpload = async (experienceId) => {
    if (!imageFile) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("experienceImage", imageFile); // Aggiungi il file immagine per esperienza

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${experienceId}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData // Invia i dati del modulo contenenti l'immagine
        }
      );

      if (!response.ok) {
        throw new Error("Error uploading image");
      }

      const data = await response.json();
      alert("Experience image uploaded successfully!");
      // Aggiorna la lista delle esperienze
      const updatedExperiences = experiences.map((exp) =>
        exp._id === experienceId
          ? { ...exp, image: data.image } // Aggiorna l'immagine dell'esperienza
          : exp
      );
      setExperiences(updatedExperiences);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Error loading profile data.</div>;
  }

  return (
    <Container className="d-flex flex-column">
      <div className="rounded-4 bg-white mt-4">
        <div className="">
          <img
            src="https://png.pngtree.com/background/20230419/original/pngtree-fluid-gradient-colorful-background-picture-image_2447892.jpg"
            alt="sfondo"
            className="rounded-top-4"
            style={{ height: 200, width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="d-flex align-items-center ps-4 mt-2 position-relative">
          <img
            src={profile.image}
            alt="Profile"
            style={{
              top: "0%",
              left: "6%",
              borderRadius: "50%",
              objectFit: "cover",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex: 1
            }}
            width={100}
            height={100}
            className="ms-4 "
          />

          {/* Pulsanti di modifica immagine */}
          <div className="d-flex gap-2 ms-auto align-items-center position-relative">
            <Button
              variant="primary"
              onClick={() =>
                document.getElementById("profile-image-input").click()
              }
              className="rounded-circle btn btn-sm"
            >
              <IoIosAddCircle />
            </Button>
            <input
              type="file"
              id="profile-image-input"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <Button
              variant="primary"
              className="btn btn-sm rounded-pill me-2"
              onClick={handleImageUpload}
            >
              Update Profile Picture
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-between w-100 align-items-center mt-3 ps-4">
          <div>
            <h3 className="m-0">
              {profile.name} {profile.surname}
            </h3>
            <p>{profile.title}</p>
            <p>{profile.area}</p>
            <p>{profile.email}</p>
          </div>
        </div>

        
        <div className="border border-top">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
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
            <Button
              className="border-primary rounded-pill text-primary bg-white px-3"
              size="sm"
            >
              Crea un post
            </Button>
            <p>
              <IoPencil />
            </p>
          </div>
        </div>
        <div>
          <span className="d-flex gap-2">
            <Button
              className="border-secondary rounded-pill text-secondary bg-white px-3"
              size="sm"
            >
              Post
            </Button>
            <Button
              className="border-secondary rounded-pill text-secondary bg-white px-3"
              size="sm"
            >
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
            <p className="fw-semibold mb-0">
              Attestato corso HTML e CSS competenze base
            </p>
            <p>1 pagina</p>
          </div>
        </div>
      </div>
      <div className="rounded-4 bg-white mt-2 p-3">
        <div className=" d-flex align-items-center fw-semibold mb-4">
          <p>Esperienze</p>
          <div className="ms-auto">
            <Button
              variant="light"
              className="p-1 border-0 text-secondary bg-transparent"
              onClick={() => {
                setModalShow(true);
              }}
            >
              <FiPlusCircle className="fs-2" />
            </Button>
            <ModalToAddExperience
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
        <div>
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <div key={exp._id}>
                <div className="d-flex justify-content-between align-items-baseline">
                  <p className="fw-bold">{exp.role}</p>
                  <div>
                    <button
                      onClick={() => deleteExperience(exp)}
                      className="border-0 bg-transparent me-auto"
                    >
                      <Trash className="ms-2 text-danger" />
                    </button>
                    <button
                      className="border-0 bg-transparent ms-2 me-auto"
                      onClick={() => {
                        setModalEdit(true);
                        setSelectedExperience(exp);
                      }}
                    >
                      <IoPencil />
                    </button>
                  </div>
                </div>
                <p>
                  {exp.company} &raquo;{" "}
                  <span className="fw-lighter">{exp.description}</span>
                </p>
                <p>
                  Presente dal {exp.startDate.slice(0, 10)} fino a{" "}
                  {exp.endDate.slice(0, 10)}
                </p>

                {/* Caricamento e visualizzazione immagini per esperienza */}
                <div className="mt-2">
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e, exp._id)}
                    accept="image/*"
                    className="mb-2"
                  />
                  
                  {experienceImages[exp._id] && (
                    <div className="mt-3">
                      <img
                        src={URL.createObjectURL(experienceImages[exp._id])}
                        alt="Experience Image"
                        className="img-fluid mt-2"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>Nessuna esperienza inserita</p>
            </div>
          )}
        </div>
        <ModalEditExperience
          id={profile._id}
          show={modalEdit}
          onHide={() => setModalEdit(false)}
          details={selectedExperience}
        />
      </div>
    </Container>
  );
};

export default ProfileDetails;