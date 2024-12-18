import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ModalToAddExperience = (props) => {
  console.log(props)
  const [experience, setExperience] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const singleProfile = useSelector((state) => state.singleProfile._id);
  const dispatch = useDispatch();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE";
  const createExperiences = (e) => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${singleProfile}/experiences`, {
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
          return resp.json();
        } else {
          throw new Error("Errore nell'aggiunta dell'esperienza");
        }
      })
      .then((data) => {
        setSuccessMessage("Esperienza aggiunta con successo!");
        setErrorMessage("");
        dispatch({ type: "ADD_EXPERIENCES", payload: data });
        props.onHide();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Errore nell'aggiunta dell'esperienza");
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aggiungi una nuova esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Form onSubmit={createExperiences}>
          <Form.Group as={Row} className="mb-3" controlId="Position">
            <Form.Label required column sm="2">
              Role
            </Form.Label>
            <Col sm="12">
              <Form.Control
                type="text"
                placeholder="Position role"
                required
                value={experience.role}
                onChange={(e) => setExperience({ ...experience, role: e.target.value })}
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
                onChange={(e) => setExperience({ ...experience, company: e.target.value })}
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
                  onChange={(e) => setExperience({ ...experience, startDate: e.target.value.toString() })}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" value={experience.endDate} onChange={(e) => setExperience({ ...experience, endDate: e.target.value.toString() })} />
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

export default ModalToAddExperience;
