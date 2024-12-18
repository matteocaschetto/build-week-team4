import { Col, Container, Row } from "react-bootstrap";
import AsideLeft from "./AsideLeft";
import Hero from "./Hero";
import MyNavbar from "./MyNavbar";
import { AsideHeroR } from "./AsideHeroR";

const HomeSection = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col className="d-none d-md-block col-md-4 col-lg-3">
            <AsideLeft />
          </Col>
          <Col className="col-12 col-md-8 col-lg-6">
            <Hero />
          </Col>
          <Col className="d-none d-lg-block col-lg-3">
            <AsideHeroR />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeSection;
