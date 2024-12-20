import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import { BiListUl } from "react-icons/bi";
import { BsFillSaveFill } from "react-icons/bs";

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

      {/* <div className="rounded-4 bg-white mt-2">
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
      </div> */}

      <div className="rounded-4 p-3 bg-white mt-2">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center ps-2 mt-4">
            <BiListUl className="fs-5 fw-bolder text-black"></BiListUl>
            <p className="mb-0 fs-6 fw-semibold ps-3 text-black">Preferenze</p>
          </div>
          <div className="d-flex align-items-center ps-2 my-4">
            <BsFillSaveFill className="fs-5 fw-bolder text-black"></BsFillSaveFill>
            <p className="mb-0 fs-6 fw-semibold ps-3">
              Le mie offerte di lavoro
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AsideLeft;
