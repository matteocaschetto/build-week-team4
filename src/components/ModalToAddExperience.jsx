import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import Datetime from "react-datetime";

const ModalToAddExperience = (props) => {
  console.log();
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="Position">
            <Form.Label column sm="2" required>
              Role
            </Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="Position role" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="companyName">
            <Form.Label column sm="2">
              Company
            </Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="Company Name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="description">
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="Describe your duties" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="area">
            <Form.Label column sm="2">
              Area
            </Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="Area" />
            </Col>
          </Form.Group>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Start Date</Form.Label>
                <Datetime />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>End Date</Form.Label>
                <Datetime />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalToAddExperience;
