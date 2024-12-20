import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ModalPost = (props) => {
  const [post, setPost] = useState({ text: "", URL: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE";

  const createPost = (e) => {
    e.preventDefault();

    // Verifica che l'URL sia valido
    if (!post.URL || !post.URL.startsWith("http")) {
      setErrorMessage("L'URL dell'immagine non è valido");
      return;
    }

    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      body: JSON.stringify({
        text: post.text,
        image: post.URL // Assicurati che l'URL venga passato correttamente
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data._id) {
          setSuccessMessage("Post aggiunto!");
          setErrorMessage("");
          dispatch({ type: "CREATE_POST", payload: data }); // Aggiungi il post al Redux store
        } else {
          setErrorMessage("Errore durante la creazione del post!");
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Errore durante la creazione del post!");
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crea un Nuovo Post!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form onSubmit={createPost}>
          <Form.Group as={Row} className="mb-3" controlId="Position">
            <Col sm="12">
              <Form.Control
                type="text"
                placeholder="Di cosa vorresti parlare?"
                required
                value={post.text}
                onChange={(e) => setPost({ ...post, text: e.target.value })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="companyName">
            <Form.Label column sm="2">
              Image URL
            </Form.Label>
            <Col sm="12">
              <Form.Control
                type="text"
                placeholder="Inserisci qui l' URL dell' immagine che desideri visualizzare"
                required
                value={post.URL}
                onChange={(e) => setPost({ ...post, URL: e.target.value })}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={createPost} type="submit" variant="success">
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPost;
