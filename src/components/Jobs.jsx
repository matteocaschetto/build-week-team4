import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiArrowToRight, BiCopyright, BiListUl, BiLogoLinkedinSquare, BiPencil, BiPlus, BiSearch, BiXCircle } from "react-icons/bi";
import { BsFillSaveFill } from "react-icons/bs";

const Jobs = () =>{

 const [jobs,setJobs] = useState([])
 const [jobs2,setJobs2] = useState([])

useEffect (() =>{
    
    const fetchJobs = async () =>{
        try{
       
        const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs")
        if(response.ok){
            const dataFetch = await response.json()
            //console.log(dataFetch)
            setJobs(dataFetch.data.slice(459,462))
            setJobs2(dataFetch.data.slice(314,331))

        }else{
            console.log("errore nell' ok")
        }
    }
    catch{
        console.log("error catch")
    }
    }
    fetchJobs();
},[])

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


    return(
     <>
     <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col className="d-none d-md-block col-md-4 col-lg-3">
        <div className="rounded-4 bg-white mt-2 position-relative">
        <img
          src="https://png.pngtree.com/background/20230419/original/pngtree-fluid-gradient-colorful-background-picture-image_2447892.jpg"
          alt="sfondo"
          className="img-fluid rounded-top-4 "
          height={80}
        />
        <img src={profile.image}width={100} height={100} style={{transform: "translate(-1%, -10%)", top:"35%", border:"4px,solid,white"}} className="rounded-circle ms-4 position-absolute start-0"
        />
        <div className="px-3">
        <h3 className="ps-3 mx-0 mb-0" style={{marginTop:"80px"}}>{profile.name} {profile.surname}</h3>
        <p className="ps-3 fw-semibold m-0">{profile.title}</p>
        <p className="ps-3 mb-1">{profile.area}</p>
        </div>
        <div className="px-3 mt-2 w-100 align-items-center">
        <Button className="text-secondary mb-4 mt-2" style={{paddingRight:"40%", backgroundColor:"#DFDEDA", borderColor:"#DFDEDA"}}><BiPlus className="fs-1 fw-bold pe-0"></BiPlus>Esperienza</Button>
        </div>
      </div>
      <div className="rounded-4 p-3 bg-white mt-2">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center ps-2 mt-4">
            <BiListUl className="fs-1 fw-bolder text-black"></BiListUl>
            <p className="mb-0 fs-4 fw-semibold ps-4 text-black">Preferenze</p>
          </div>
          <div className="d-flex align-items-center ps-2 my-4">
             <BsFillSaveFill  className="fs-2 fw-bolder text-black"></BsFillSaveFill>
             <p className="mb-0 fs-4 fw-semibold ps-4">Le mie offerte di lavoro</p>
          </div>
        </div>
      </div>
      <div className="w-100 bg-transparent align-items-center">
       <Button className="bg-white fs-5 btn-outline-primary py-2 w-100 px-3 bg-transparent fw-semibold rounded-pill me-2 mb-3 mt-3  text-primary"><BiPencil className="fw-bolder fs-2 pe-1"></BiPencil>Pubblica offerta gratuita</Button>
      </div>
        </Col>
        <Col className="col-12 col-md-8 col-lg-5">
         <div className="rounded-4 p-3 bg-white mt-2">
            <div>
            <p className="h1 fs-5 mb-2">Le principali offerte di lavoro per te</p>
            <p className="h2 fs-6 text-secondary mb-4">In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi</p>
            </div>
            {jobs.map((job,i) =>{
                //console.log(job)
                return(
                <>
                    <div key={i} className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="me-2">
                        <img src={job.company_logo_url} alt="" width={50} height={50} />
                      </div>
                      <div>
                         <p className="mb-0 fs-5"><a style={{textDecoration:"none"}} href={job.url}>{job.company_name}</a></p>
                         <p className="mb-0 text-secondary ">{job.title}</p>
                         <p className="mb-0 text-secondary">{job.candidate_required_location}</p>
                      </div>
                    </div>
                    <div>
                     <BiXCircle></BiXCircle>
                    </div>
                  </div>
                  <hr />
                </>
                )
            })}
            <div className="d-flex justift-content-center">
               <Button className="bg-transparent text-black w-100 fw-bold align-content-center btn-outline-light">Mostra tutto <BiArrowToRight className="fs-3"></BiArrowToRight></Button> 
            </div>
         </div>
         <div className="rounded-4 p-3 bg-white mt-2">
           <div className="d-flex justify-content-between align-items-center">
             <p className="h3, mb-0 fs-5 fw-bold">Lasciati trovare dalle offert di lavoro</p>
             <BiXCircle className="fs-4"></BiXCircle>
           </div>
           <div className="d-flex flex-column">
             <p className="fs-6 text-secondary">Ricevi segnalazioni più rilevanti tenendo aggiornate le tue preferenze Disponibile a lavorare.</p>
             <div className="d-flex">
               <div className="me-2">
                 <img src="https://cdn.pixabay.com/photo/2024/10/20/08/29/portrait-9134409_1280.png" width={70} height={70} alt="" />
               </div>
               <div className="d-flex flex-column">
                  <p className="fw-semibold mb-0">Dsiponibile per trovare lavoro</p>
                  <p className="text-secondary mb-0">Ultima attività in app: 3 mesi fa</p>
               </div>
             </div>
           </div>
         </div>
          <div className="rounded-4 p-4 bg-white mt-2">
            <div className="d-flex justify-content-between">
                <p className="fs-4 fw-bold">Ricerche di offerte di lavoro suggerite</p>
                <BiXCircle className="fs-4"></BiXCircle>
            </div>
            <div className="d-flex flex-wrap mt-3">
              <Button onClick={() => {}} className="bg-white btn-outline-primary px-3 fw-semibold rounded-pill me-2 mb-3  text-primary"><BiSearch className="fw-bolder fs-4 pe-1"></BiSearch>Data</Button>
              <Button onClick={() => {}} className="bg-white btn-outline-primary px-3 fw-semibold rounded-pill me-2 mb-3  text-primary"><BiSearch className="fw-bolder fs-4 pe-1"></BiSearch>Finance / Legal</Button>
              <Button onClick={() => {}} className="bg-white btn-outline-primary px-3 fw-semibold rounded-pill me-2 mb-3  text-primary"><BiSearch className="fw-bolder fs-4 pe-1"></BiSearch>Marketing</Button>
              <Button onClick={() => {}} className="bg-white btn-outline-primary px-3 fw-semibold rounded-pill me-2 mb-3  text-primary"><BiSearch className="fw-bolder fs-4 pe-1"></BiSearch>Customer Service</Button>
              <Button onClick={() => {}} className="bg-white btn-outline-primary px-3 fw-semibold rounded-pill me-2 mb-3  text-primary"><BiSearch className="fw-bolder fs-4 pe-1"></BiSearch>Human Resources</Button>
              <Button onClick={() => {}} className="bg-white btn-outline-primary px-3 fw-semibold rounded-pill me-2 mb-3  text-primary"><BiSearch className="fw-bolder fs-4 pe-1"></BiSearch>Software Development</Button>
              <Button onClick={() => {}} className="bg-white btn-outline-primary px-3 fw-semibold rounded-pill me-2 mb-3  text-primary"><BiSearch className="fw-bolder fs-4 pe-1"></BiSearch>Writing</Button>
            </div>
          </div>
          <div className="rounded-4 p-4 bg-white mt-2">
            <div className="d-flex">
              <img className="rounded-circle" src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" width={70} height={70} alt="" />
              <p className="fs-5 ps-4 fw-semibold">Vedi elenco completo delle offerte di lavoro per cui saresti fra i migliori candidati</p>
            </div>
            <div>
                <div className="d-flex align-items-center">
                   <div className="d-flex ms-5 position-relative">
                      <img src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_1280.jpg" width={30} height={30} className="rounded-circle" alt="" />
                      <img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg" width={30} height={30} className="rounded-circle" alt="" />
                      <img src="https://cdn.pixabay.com/photo/2020/11/06/03/43/protective-suit-5716753_1280.jpg" width={30} height={30} className="rounded-circle" alt="" />
                   </div>
                   <div>
                    <p className="text-secondary mb-0 ps-2">Milioni di utenti usano Premium</p>
                   </div>
                </div>
            </div>
            <div>
                <Button className="px-5 text-dark fs-4 ms-5 fw-semibold rounded-pill mt-4" style={{backgroundColor:"#E9A53F"}}>Prova Premium per 0 EUR</Button>
            </div>
            <div className="mt-3 ms-5">
              <p className="text-secondary fs-6">Prova gratuita di 1 mese. Ti invieremo un promemoria 7 giorni prima della fine del periodo di prova.</p>
            </div>
          </div>
          <div className="rounded-4 p-4 bg-white mt-2">
            <p className="fw-semibold fs-4 mb-0">Altre offerte di lavoro per te</p>
            <div>
                <p className="text-secondary mt-1 fs-6">In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi</p>
            </div>
            <div className="mt-2">
                {jobs2.map((job2,i) =>{
                    return(
                        <>
                    <div key={i} className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="me-2">
                        <img src={job2.company_logo_url} alt="" width={50} height={50} />
                      </div>
                      <div>
                         <p className="mb-0 fs-5"><a style={{textDecoration:"none"}} href={job2.url}>{job2.company_name}</a></p>
                         <p className="mb-0 text-secondary ">{job2.title}</p>
                         <p className="mb-0 text-secondary">{job2.candidate_required_location}</p>
                      </div>
                    </div>
                    <div>
                     <BiXCircle></BiXCircle>
                    </div>
                  </div>
                  <hr />
                </>
                    )
                })}
            </div>
          </div>
        </Col>
        <Col className="d-none d-lg-block col-lg-3">
        <div className="w-100 bg-transparent text-center mt-3">
             <Row className="d-flex align-items-center justify-content-end pe-3">
                <Col style={{margin:"2px 0"}} className="px-0 col-6 d-flex justify-content-end "><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Informazioni</a></Col>
                <Col style={{margin:"2px 0"}} className="px-0 col-6 d-flex justify-content-start ps-3"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Accessibilità</a></Col>
                <Col className="px-0 col-6 d-flex justify-content-end pe-3"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Centro assistenza</a></Col>
                <Col className="px-0 col-6 d-flex justify-content-start"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Privacy e Condizioni</a></Col>
                <Col style={{margin:"2px 0"}} className="px-0 col-12"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Opzioni per gli annunci pubblicitari</a></Col>
                <Col style={{margin:"2px 0"}} className="px-0 col-5 d-flex justify-content-end pe-3"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Pubblicità</a></Col>
                <Col style={{margin:"2px 0"}} className="px-0 col-7 d-flex justify-content-start"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Servizi alle aziende</a></Col>
                <Col style={{margin:"2px 0"}} className="px-0 col-8 d-flex justify-content-end pe-3"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Scarica l app LinkedIn</a></Col>
                <Col style={{margin:"2px 0"}} className="px-0 col-4 d-flex justify-content-start"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href="">Altro</a></Col>
                <Col style={{margin:"2px 0"}} className="px-0 col-12 mt-2 vertical-align-middle"><a className="text-secondary" style={{textDecoration:"none", fontSize:"0.7rem"}} href=""><span className="fw-bolder fs-6" style={{color:"blue", verticalAlign:"middle"}}>Linked</span><BiLogoLinkedinSquare fill="blue" className="fs-3"></BiLogoLinkedinSquare> LinkedIn Corporation <BiCopyright></BiCopyright> 2024 </a></Col>
             </Row>
          </div>
        </Col>
      </Row>
     </Container>
     </>
    );
};
export default Jobs;