import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";

export const ModalPost = (props) => {
  const [experience, setExperience] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyOTk0ODUzMDRhNzAwMTUxNDhiYTgiLCJpYXQiOjE3MzQ1MTUwMTYsImV4cCI6MTczNTcyNDYxNn0.RMek1AdjnaeoEAUxohHgGqf4WFC9h9PjmVjNENmavHQ";
  const createExperiences = (e) => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      method: "POST",
      body: JSON.stringify({
        company: `${experience.company}`,
        role: `${experience.role}`,
        description: `${experience.description}`,
        area: `${experience.area}`,
        startDate: `${experience.startDate}`,
        endDate: `${experience.endDate}`
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
        } else {
          setErrorMessage("errore");
        }
      })
      .catch((err) => {
        console.log(err);
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form onSubmit={createExperiences}>
          <Form.Group as={Row} className="mb-3" controlId="Position">
            <Form.Label required column sm="2"></Form.Label>
            <Col sm="12">
              <Form.Control
                type="text"
                placeholder="Di cosa vorresti parlare?"
                required
                value={experience.role}
                onChange={(e) =>
                  setExperience({ ...experience, role: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="companyName">
            <Form.Label column sm="2">
              Company
            </Form.Label>
            <Col sm="12">
              <Form.Control
                type="text"
                placeholder="Company Name"
                required
                value={experience.company}
                onChange={(e) =>
                  setExperience({ ...experience, company: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="description">
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="12">
              <Form.Control
                type="text"
                placeholder="Describe your duties"
                required
                value={experience.description}
                onChange={(e) =>
                  setExperience({ ...experience, description: e.target.value })
                }
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
                onChange={(e) =>
                  setExperience({ ...experience, area: e.target.value })
                }
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
          </Row>
          <Button type="submit" variant="success">
            AGGIUNGI
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPost;