import { Col, Container, Row } from "react-bootstrap";
import AsideLeft from "./AsideLeft";
import Hero from "./Hero";
import MyNavbar from "./MyNavbar";
import { AsideR } from "./AsideRight";

const HomeSection = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col md={3}>
            <AsideLeft />
          </Col>
          <Col md={6}>
            <Hero />
          </Col>
          <Col className="d-none d-lg-block col-lg-3">
            <AsideR />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeSection;
