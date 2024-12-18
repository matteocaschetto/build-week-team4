import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const ModalEditExperience = (props) => {
  //const singleProfile = useSelector((state) => state.singleProfile._id);
  const [experience, setExperience] = useState({
    company: props.details.company,
    role: props.details.role,
    description: props.details.description,
    area: props.details.area,
    startDate: "",
    endDate: ""
  });
  //const token =
  ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE");

  /*  const fetchEditExperience = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/:${singleProfile}/experiences/:${props.details._id}`, {
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
    });
  }; */
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Modifica una nuova esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
          <Button variant="warning">Modifica</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditExperience;
