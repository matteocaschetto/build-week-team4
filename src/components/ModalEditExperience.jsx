import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ModalEditExperience = (props) => {
  const dispatch = useDispatch();
  const [experience, setExperience] = useState({
    role: props.details.role,
    company: props.details.company,
    description: props.details.description,
    area: props.details.area,
    startDate: props.details.startDate,
    endDate: props.details.endDate,
    id: props.details._id,
    user: props.details.user
  });

  // Quando il prop 'details' cambia, aggiorna lo stato locale dell'esperienza
  useEffect(() => {
    if (props.details) {
      setExperience({
        role: props.details.role,
        company: props.details.company,
        description: props.details.description,
        area: props.details.area,
        startDate: props.details.startDate,
        endDate: props.details.endDate,
        id: props.details._id,
        user: props.details.user
      });
    }
  }, [props.details]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE";

  const fetchEditExperience = (e) => {
    e.preventDefault();

    fetch(`https://striveschool-api.herokuapp.com/api/profile/${experience.user}/experiences/${experience.id}`, {
      method: "PUT",
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
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADD_EXPERIENCES", payload: res });
        setExperience({});
        props.onHide();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Modifica una nuova esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={fetchEditExperience}>
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
                <Form.Control type="date" required />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>
          <Button type="subimit" variant="warning">
            Modifica
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditExperience;
