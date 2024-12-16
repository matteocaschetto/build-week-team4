import { Col, Container, Form, Row } from "react-bootstrap";
import { BiQuestionMark, BiCopyright } from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-3">
          <Col className="col-12 col-lg-7">
            <Row>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Informazioni
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Accessibilità
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Talent Solutions
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Info sulla community professionale
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Carriera
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Soluzioni di Marketing
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Privacy e Condizioni
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Opzioni per gli annunci pubblicitari
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Pubblicità
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Sales Solutions
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Mobile
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Piccole imprese
                </a>
              </Col>
              <Col className="col-6 col-lg-4 col mb-3">
                <a href="" className="fs-6 text-decoration-none text-black">
                  Centro sicurezza
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="col-12 col-lg-5 d-lg-flex d-block">
            <Col className="col-12 col-lg-6">
              <div className="d-flex">
                <div>
                  <BiQuestionMark fill="text-black"></BiQuestionMark>
                </div>
                <div className="d-flex flex-column">
                  <h3 style={{ fontSize: "0.9rem" }}>Domande?</h3>
                  <p className="text-secondary" style={{ fontSize: "0.7rem" }}>
                    Visita il nostro centro assistenza
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <BiQuestionMark fill="text-black"></BiQuestionMark>
                </div>
                <div className="d-flex flex-column">
                  <h3 style={{ fontSize: "0.9rem" }}>Gestisci il tuo account e la tua privacy</h3>
                  <p className="text-secondary" style={{ fontSize: "0.7rem" }}>
                    vai alle impostazioni
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <BiQuestionMark fill="text-black"></BiQuestionMark>
                </div>
                <div className="d-flex flex-column">
                  <h3 style={{ fontSize: "0.9rem" }}>Trasparenza sui contenuti consigliati</h3>
                  <p className="text-secondary" style={{ fontSize: "0.7rem" }}>
                    Scopri di piu sui contenuti consigliati
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-4 col-lg-6">
              <Form>
                <Form.Label htmlFor="LanguageSelector">Select Language</Form.Label>
                <Form.Select>
                  <option>Italian</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Portogues</option>
                  <option>French</option>
                  <option>English(US)</option>
                  <option>Indu</option>
                  <option>Chinese</option>
                </Form.Select>
              </Form>
            </Col>
          </Col>
          <p className="text-secondary" style={{ fontSize: "0.7rem" }}>
            Linkedin Corporation
            <BiCopyright />
            2024
          </p>
        </Row>
      </Container>
    </>
  );
};
