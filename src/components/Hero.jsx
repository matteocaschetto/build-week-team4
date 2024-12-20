import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { BiWorld, BiLike, BiComment } from "react-icons/bi";
import { format } from "date-fns";
import ModalPost from "./ModalPost"; // Usa il tuo ModalPost
import { useSelector } from "react-redux";
import { Trash } from "react-bootstrap-icons";

const Hero = () => {
  const [posts, setPosts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [profileImage, setProfileImage] = useState(""); // stato per l'immagine del profilo
  const createdPosts = useSelector((state) => state.post);
  const [updateFlag, setUpdateFlag] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE";

  // Funzione per ottenere il profilo dell'utente e la sua immagine
  const fetchUserProfile = async () => {
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
        throw new Error("Errore nel recupero del profilo");
      }

      const data = await response.json();
      setProfileImage(data.image); // Imposta l'immagine del profilo dinamicamente
    } catch (error) {
      console.error("Errore nel recupero del profilo:", error);
    }
  };

  const fetchMain = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error("Errore nel recupero dei post");
      }

      const data = await response.json();
      setPosts(data.slice(1940, 1980)); // Modifica qui il range dei post che vuoi visualizzare
    } catch (error) {
      console.error("Errore nel recupero dei post:", error);
    }
  };

  // Funzione per creare il post
  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]); // Aggiungi il nuovo post in cima alla lista
    setUpdateFlag(!updateFlag); // Forza il refresh della lista dei post
  };

  useEffect(() => {
    fetchMain();
    fetchUserProfile(); // Chiamata per ottenere l'immagine del profilo
  }, [updateFlag, createdPosts]);

  // Funzione per eliminare il post
  const deletePost = (post) => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${post}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        if (resp.ok) {
          console.log("Post eliminato");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="d-flex flex-column">
      <div className="rounded-4 bg-white mt-2 p-3">
        <h3>La vita lavorativa dura in media 42 anni.</h3>
        <p>Investi nella tua crescita a lungo termine con Premium.</p>
        <button className="rounded-4 bg-warning border border-none p-1 fw-semibold">
          Scegli Premium
        </button>
      </div>

      {/* Altri contenuti del tuo feed */}

      <div className="rounded-4 bg-white mt-2 px-3 pt-3 pb-3">
        <div className="d-flex">
          {/* Usa l'immagine del profilo dinamica */}
          <img
            src={profileImage}
            alt="Profilo"
            width={60}
            height={60}
            className="rounded-circle me-2"
            style={{ objectFit: "cover" }}
          />
          <Button
            className="d-flex bg-light border-secondary text-black rounded-pill w-100 flex-grow justify-content-start align-items-center"
            onClick={() => {
              setModalShow(true);
            }}
          >
            <span className="ps-2">
              <strong>Crea un post</strong>
            </span>
          </Button>
          <ModalPost
            show={modalShow}
            onHide={() => setModalShow(false)}
            handleCreatePost={handleCreatePost} // Passa la funzione al ModalPost
          />
        </div>
      </div>

      {/* Sezione per visualizzare i post esistenti */}
      {posts.map((post, i) => {
        const formattedDate = format(
          new Date(post.user.createdAt),
          "d MMMM yyyy"
        );
        return (
          <div className="rounded-4 bg-white mt-2" key={i}>
            <div className="d-flex align-items-start p-3">
              <div>
                <img
                  src={post.user.image}
                  width={60}
                  height={60}
                  className="rounded-circle me-2"
                  alt="not_found"
                  style={{
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="d-flex flex-column">
                <p className="text-secondary fs-6 my-0">
                  <span className="text-black fs-5 fw-bold">
                    {post.user.name}_{post.user.surname}
                  </span>
                </p>
                <p className="text-secondary fs-6 my-0">{post.user.title}</p>
                <div className="d-flex align-items-center">
                  <p className="text-secondary fs-6 my-0">{formattedDate}</p>
                  <BiWorld className="ms-2 fs-4" />
                </div>
              </div>
            </div>
            <div>
              <p className="fs-6 mt-2 ps-3">{post.text}</p>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                marginInline: "auto",
                objectFit: "cover"
              }}
            >
              {post.image && <img src={post.image} width={"100%"} alt="" />}
            </div>
            <hr />
            <div
              className="d-flex pb-3 "
              style={{
                justifyContent: "space-evenly"
              }}
            >
              <div className="d-flex align-items-center">
                <BiLike className="fs-4"></BiLike>
                <p className="fs-6 ms-2 my-0 fw-semibold">Consiglia</p>
              </div>
              <div className="d-flex align-items-center"></div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BiComment className="fs-4"></BiComment>
                  <p className="fs-6 ms-2 my-0 fw-semibold">Comment</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <Trash
                    onClick={() => deletePost(post._id)}
                    className="fs-4"
                  ></Trash>
                  <p className="fs-6 ms-2 my-0 fw-semibold">Delete</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Hero;
