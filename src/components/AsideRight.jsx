import { Button, Col, Row } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { CgUserAdd } from "react-icons/cg";

export const AsideR = () => {
  const [profiles, setProfiles] = useState([]);
  const [otherProfiles, setOtherProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE";
        
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Errore nel recupero dei profili");
        }

        const data = await response.json();
        setProfiles(data); // Imposta tutti i profili ricevuti
        setOtherProfiles(data.slice(7, 14)); // Seleziona i profili per "Altri profili per te"
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>{`Errore: ${error}`}</div>;
  }

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
                  myprofile-827324272
                </a>
              </div>
              <div className="d-flex d-lg-none d-xxl-flex" style={{ marginLeft: "auto" }}>
                <BiPencil className="fs-2"></BiPencil>
              </div>
              <hr />
            </div>
          </div>
          <div >
            <img
              src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
              className="my-3"
              width={"100%"}
              style={{ borderRadius: "10px" }}
              alt="hiring"
            />
          </div>

          {/* Sezione Altri profili per te */}
          <div className="mt-2 bg-white py-2" style={{ borderRadius: "10px" }}>
            <div className="px-3">
              <h4 className="fw-semibold my-2 fs-6">Altri profili per te</h4>
              {otherProfiles.length > 0 ? (
                otherProfiles.map((profile) => (
                  
                  <div key={profile._id}>
                    <div className="col mx-auto d-flex align-items-middle mt-2">
                    <div className="d-flex justify-content-end">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="rounded-circle"
                        width={"40px"}
                        height={"40px"}
                      />
                    </div>
                    <div className="col d-flex flex-column ms-2">
                      <p className="m-0 fw-semibold" style={{ fontSize: "0.9rem" }}>{profile.name}</p>
                      <p className="m-0" style={{ fontSize: "0.8rem" }}>{profile.title}</p>
                      <Button className="rounded-pill fw-semibold text-dark btn-outline-dark bg-transparent btn-sm" style={{ fontSize: "0.9rem", width:"130px"}}>
                        <RiSendPlaneFill /> Messaggio
                      </Button>
                      <hr style={{ width: "100%" }} />
                    </div>
                    </div>
                    </div>
                  
                  
                ))
              ) : (
                <p>Nessuna persona trovata.</p>
              )}
            </div>
          </div>

          <div >
            <img
              src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
              className="my-3"
              width={"100%"}
              style={{ borderRadius: "10px" }}
              alt="hiring"
            />
          </div>

          {/* Sezione Persone che potresti conoscere */}
          <div className="mt-2 bg-white py-2" style={{ borderRadius: "10px" }}>
            <div className="px-3">
              <h4 className="fw-semibold my-2 fs-6">Persone che potresti conoscere</h4>
              {profiles.length > 0 ? (
                profiles.slice(0, 7).map((profile) => (
                  <div key={profile._id} >
                    <div className="col mx-auto d-flex align-items-middle mt-2">
                    <div className="d-flex justify-content-end">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="rounded-circle"
                        width={"40px"}
                        height={"40px"}
                      />
                    </div>
                    <div className="col d-flex flex-column ms-2">
                      <p className="m-0 fw-semibold" style={{ fontSize: "0.9rem" }}>{profile.name}</p>
                      <p className="m-0" style={{ fontSize: "0.8rem" }}>{profile.title}</p>
                      <Button className="rounded-pill fw-semibold text-dark btn-outline-dark bg-transparent btn-sm" style={{ fontSize: "0.9rem", width:"130px" }}>
                        <CgUserAdd /> Collegati
                      </Button>
                      <hr style={{ width: "100%" }} />
                    </div>
                  </div>
                  </div>
                ))
              ) : (
                <p>Nessuna persona trovata.</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};