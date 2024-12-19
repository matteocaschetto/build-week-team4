import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ModalPost = (props) => {
  const [post, setPost] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  console.log(post);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyOTk0ODUzMDRhNzAwMTUxNDhiYTgiLCJpYXQiOjE3MzQ1MTUwMTYsImV4cCI6MTczNTcyNDYxNn0.RMek1AdjnaeoEAUxohHgGqf4WFC9h9PjmVjNENmavHQ";
  const createPost = (e) => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      method: "POST",
      body: JSON.stringify({
        text: `${post.text}`,
        URL: `${post.URL}`
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        if (resp.ok) {
          console.log("iniviata");
          setSuccessMessage("esperienza aggiunta");
          setErrorMessage("");
          dispatch({ type: "CREATE_POST", payload: resp });
          console.log("PostFetch", resp);
        } else {
          setErrorMessage("errore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Crea un Nuovo Post!</Modal.Title>
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
          {/*<Form.Group as={Row} className="mb-3" controlId="description">
            <Form.Label column sm="2">
              Post Description
            </Form.Label>
            <Col sm="12">
              <Form.Control
                type="text"
                placeholder="Inserisci la descrizione del tuo post"
                required
                value={experience.description}
                onChange={(e) => setExperience({ ...experience, description: e.target.value })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="area">
            <Form.Label column sm="2">
              Area
            </Form.Label>
            <Col sm="12">
              <Form.Control
                type="text"
                placeholder="Area"
                required
                value={experience.area}
                onChange={(e) => setExperience({ ...experience, area: e.target.value })}
              />
            </Col>
          </Form.Group>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  required
                  value={experience.startDate}
                  onChange={(e) =>
                    setExperience({
                      ...experience,
                      startDate: e.target.value.toString()
                    })
                  }
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={experience.endDate}
                  onChange={(e) =>
                    setExperience({
                      ...experience,
                      endDate: e.target.value.toString()
                    })
                  }
                />
              </Form.Group>
            </Col>
          </Row>*/}
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
