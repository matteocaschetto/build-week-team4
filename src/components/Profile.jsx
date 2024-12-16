import { Col, Container, Row } from "react-bootstrap";
import ProfileDetails from "./ProfileDetails";
import { AsideR } from "./AsideRight";
import MyNavbar from "./MyNavbar";

const Profile = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col md={8}>
            <ProfileDetails />
          </Col>

          <Col className="d-none d-lg-block col-lg-4">
            <AsideR />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
