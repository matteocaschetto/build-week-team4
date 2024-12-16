import { Button, Col, Row } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";

export const AsideR = () => {
  return (
    <>
      <Row>
        <Col className="col-12 mt-4">
          <div style={{ borderRadius: "10px" }} className="d-flex flex-column p-3 bg-white">
            <div className="d-flex w-100">
              <div className="d-flex flex-column align-items-baseline">
                <h6>Lingua del profilo</h6>
                <p>Italiano</p>
              </div>
              <div style={{ marginLeft: "auto" }} className="d-flex d-lg-none d-xxl-flex">
                <BiPencil className="fs-2"></BiPencil>
              </div>
              <hr />
            </div>
            <div className="d-flex align-items-baseline">
              <div className="d-flex flex-column d-lg-block">
                <h6>Profilo Pubblico e URL</h6>
                <a href="https://www.linkedin.com/in/me/" style={{ textDecoration: "none", color: "grey" }}>
                  www.linkedin.com/in/
                  <br />
                  gabriele-cipolloni-827324272
                </a>
              </div>
              <div className="d-flex d-lg-none d-xxl-flex" style={{ marginLeft: "auto" }}>
                <BiPencil className="fs-2"></BiPencil>
              </div>
              <hr />
            </div>
          </div>
          <div>
            <img
              src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
              width={"100%"}
              height={"200px"}
              style={{ borderRadius: "10px" }}
              className="my-2"
              alt="immagine grande"
            />
          </div>
          <div className="mt-2 bg-white" style={{ borderRadius: "10px" }}>
            <div className="px-3">
              <h4 className="fw-bold my-2">Persone che potresti conoscere</h4>
              <div className="d-flex align-items-center mt-3">
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                    alt=""
                    className="rounded-circle me-2"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 ">Rowana in Botswana</p>
                  <p className="m-0 ">Consultant presso Agenzia dei Gatti</p>
                </div>
              </div>
              <div className="mt-2 d-flex flex-column align-items-start">
                <Button className="rounded-pill mt-2 fw-bold w-50 text-black btn-outline-dark bg-transparent" width={"50px"}>
                  Collegati
                </Button>
                <hr style={{ width: "100%" }} />
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                    alt=""
                    className="rounded-circle me-2"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 ">Rowana in Botswana</p>
                  <p className="m-0 ">Consultant presso Agenzia dei Gatti</p>
                </div>
              </div>
              <div className="mt-2 d-flex flex-column align-items-start">
                <Button className="rounded-pill mt-2 fw-bold w-50 text-black btn-outline-dark bg-transparent" width={"50px"}>
                  Collegati
                </Button>
                <hr style={{ width: "100%" }} />
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                    alt=""
                    className="rounded-circle me-2"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 ">Rowana in Botswana</p>
                  <p className="m-0 ">Consultant presso Agenzia dei Gatti</p>
                </div>
              </div>
              <div className="mt-2 d-flex flex-column align-items-start">
                <Button className="rounded-pill mt-2 fw-bold w-50 text-black btn-outline-dark bg-transparent" width={"50px"}>
                  Collegati
                </Button>
                <hr style={{ width: "100%" }} />
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                    alt=""
                    className="rounded-circle me-2"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 ">Rowana in Botswana</p>
                  <p className="m-0 ">Consultant presso Agenzia dei Gatti</p>
                </div>
              </div>
              <div className="mt-2 d-flex flex-column align-items-start">
                <Button className="rounded-pill mt-2 fw-bold w-50 text-black btn-outline-dark bg-transparent" width={"50px"}>
                  Collegati
                </Button>
                <hr style={{ width: "100%" }} />
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                    alt=""
                    className="rounded-circle me-2"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 ">Rowana in Botswana</p>
                  <p className="m-0 ">Consultant presso Agenzia dei Gatti</p>
                </div>
              </div>
              <div className="mt-2 d-flex flex-column align-items-start">
                <Button className="rounded-pill mt-2 fw-bold w-50 text-black btn-outline-dark bg-transparent" width={"50px"}>
                  Collegati
                </Button>
                <hr style={{ width: "100%" }} />
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                    alt=""
                    className="rounded-circle me-2"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 ">Rowana in Botswana</p>
                  <p className="m-0 ">Consultant presso Agenzia dei Gatti</p>
                </div>
              </div>
              <div className="mt-2 d-flex flex-column align-items-start">
                <Button className="rounded-pill my-2 fw-bold w-50 text-black btn-outline-dark bg-transparent" width={"50px"}>
                  Collegati
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
              className="my-3"
              width={"100%"}
              height={"200px"}
              style={{ borderRadius: "10px" }}
              alt="immagine grande"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};
