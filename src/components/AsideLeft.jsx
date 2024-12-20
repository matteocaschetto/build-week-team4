import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa6";
import { PiNewspaperFill } from "react-icons/pi";
import { MdGroups2, MdEventNote } from "react-icons/md";

const AsideLeft = () => {
  const [profile, setProfile] = useState(null);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwNWU4NDc0YTg2ODAwMTVkYjU0ZjkiLCJpYXQiOjE3MzQzNjg5MDAsImV4cCI6MTczNTU3ODUwMH0.qlKB2g8pPEkFuSrRMQ84ltLLbqQEaT46Vch8Hu9AHiE"; // Replace with the actual token

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching profile");
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [token]);

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <Container className="d-flex flex-column">
      <div className="rounded-4 bg-white mt-2 position-relative">
        <img
          src="https://png.pngtree.com/background/20230419/original/pngtree-fluid-gradient-colorful-background-picture-image_2447892.jpg"
          alt="sfondo"
          className="img-fluid rounded-top-4"
          height={80}
          style={{ objectFit: "cover" }}
        />

        {/* Immagine del profilo */}
        <img
          src={
            profile.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxKQClJxfLRjnXNxZi2-6EwQlOgdOj_Sj1A&s"
          }
          alt="Profile"
          width={100}
          height={100}
          className="rounded-circle position-absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)", // Centrato rispetto al contenitore
            zIndex: 1,
            objectFit: "cover",
            border: "4px solid white"
          }}
        />

        {/* Informazioni di profilo */}
        <div className="ps-3" style={{ marginTop: "70px" }}>
          <h3 className="my-1">
            {profile.name} {profile.surname}
          </h3>
          <p className="fw-semibold m-0">{profile.title}</p>
          <p className="mb-1">{profile.area}</p>
        </div>
      </div>

      <div className="rounded-4 bg-white mt-2">
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2">Visitatori del Profilo</p>
          </div>
          <div className="ms-auto">
            <p className="fw-semibold m-2">14</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2">Impressione dei post</p>
          </div>
          <div className="ms-auto">
            <p className="fw-semibold m-2">5</p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-4 bg-white mt-2">
        <p className="text-secondary mb-1 fw-semi-bold fs-6">
          Accedi a strumenti e informazioni in esclusiva
        </p>
        <div className="d-flex align-items-start">
          <img
            src="https://img.freepik.com/free-photo/yellow-wall-texture-with-scratches_1249-77.jpg?ga=GA1.1.276053004.1729677387&semt=ais_hybrid"
            width={20}
            height={20}
            alt="Premium image"
          />
          <p className="text-black fw-bolder my-0 fs-6 ms-2">
            Riattiva Premium con il 50% di sconto
          </p>
        </div>
      </div>

      <div className="rounded-4 bg-white mt-2">
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2">
              <FaBookmark />
            </p>
          </div>
          <div>
            <p className="fw-semibold m-2">Elementi Salvati</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2">
              <MdGroups2 />
            </p>
          </div>
          <div>
            <p className="fw-semibold m-2">Gruppi</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2">
              <PiNewspaperFill />
            </p>
          </div>
          <div>
            <p className="fw-semibold m-2">Newsletter</p>
          </div>
        </div>
        <div className="d-flex mx-1">
          <div>
            <p className="fw-semibold m-2">
              <MdEventNote />
            </p>
          </div>
          <div>
            <p className="fw-semibold m-2">Eventi</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AsideLeft;
