import { Col, Container, Row } from "react-bootstrap";
import AsideLeft from "./AsideLeft";
import Hero from "./Hero";

const MainSection = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <AsideLeft />
        </Col>
        <Col md={5}> 
        <Hero />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
