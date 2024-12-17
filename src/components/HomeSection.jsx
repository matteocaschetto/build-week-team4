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
          <Col className="d-none d-md-block col-md-3">
            <AsideLeft />
          </Col>
          <Col className="col-12 col-md-6">
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
