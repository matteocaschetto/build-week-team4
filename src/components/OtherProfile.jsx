import { Col, Container, Row } from "react-bootstrap";
import OtherProfileDetails from "./OtherProfileDetails";
import { AsideR } from "./AsideRight";
//import MyNavbar from "./MyNavbar";

const OtherProfile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <OtherProfileDetails />
          </Col>

          <Col className="d-none d-lg-block col-lg-3">
            <AsideR />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default OtherProfile;