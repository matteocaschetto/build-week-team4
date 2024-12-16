import { Col, Container, Row } from "react-bootstrap";
import AsideLeft from "./AsideLeft";

const MainSection = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <AsideLeft />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
