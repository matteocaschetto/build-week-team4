import { Button, Col, Row } from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import { useState, useEffect } from "react";

export const AsideR = () => {
  const [profiles, setProfiles] = useState([]);
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
        setProfiles(data.slice(0, 7)); // primi 7 profili
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
                  gabriele-cipolloni-827324272
                </a>
              </div>
              <div className="d-flex d-lg-none d-xxl-flex" style={{ marginLeft: "auto" }}>
                <BiPencil className="fs-2"></BiPencil>
              </div>
              <hr />
            </div>
          </div>

          {/* Sezione Persone che potresti conoscere */}
          <div className="mt-2 bg-white py-2" style={{ borderRadius: "10px" }}>
            <div className="px-3">
              <h4 className="fw-bold my-2">Persone che potresti conoscere</h4>
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <div key={profile._id} className="d-flex align-items-center mt-3">
                    <div>
                      <img
                        src={profile.imageUrl}
                        alt={profile.name}
                        className="rounded-circle me-2"
                        width={"50px"}
                        height={"50px"}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="m-0 ">{profile.name}</p>
                      <p className="m-0 ">{profile.title}</p> 
                    </div>
                    <div className="mt-2 mx-2 d-flex flex-column align-items-center ms-auto">
                      <Button className="rounded-pill fw-bold text-black btn-outline-dark bg-transparent">
                        Collegati
                      </Button>
                      <hr style={{ width: "100%" }} />
                    </div>
                  </div>
                ))
              ) : (
                <p>Nessuna persona trovata.</p>
              )}
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