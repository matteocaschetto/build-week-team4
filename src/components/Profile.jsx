import { Col, Container, Row } from "react-bootstrap";
import ProfileDetails from "./ProfileDetails";
import { AsideR } from "./AsideRight";
//import MyNavbar from "./MyNavbar";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <ProfileDetails />
          </Col>

          <Col className="d-none d-lg-block col-lg-3">
            <AsideR />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
