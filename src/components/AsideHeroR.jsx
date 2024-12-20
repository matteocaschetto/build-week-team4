import { Col, Row } from "react-bootstrap";
import {
  BiInfoSquare,
  BiChevronDown,
  BiChevronRight,
  BiCopyright,
  BiLogoLinkedinSquare
} from "react-icons/bi";

export const AsideHeroR = () => {
  return (
    <>
      <Row>
        <Col className="col-12 mt-2">
          <div
            style={{ borderRadius: "10px" }}
            className="d-flex flex-column p-3 bg-white"
          >
            <div className="d-flex w-100">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <h6 className="fw-semibold fs-5 my-0">In primo piano</h6>
                <BiInfoSquare className="fs-3"></BiInfoSquare>
              </div>
            </div>
            <div className="d-flex align-items-baseline">
              <div className="d-flex flex-column d-lg-block">
                <p className="text-secondary">a cura di Linkedin Notizie</p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
                Tech 2025
              </p>
              <p style={{ fontSize: "0.7rem" }} className="text-secondary">
                1 giorno fa <span>&#8226</span>1728 lettori
              </p>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
                Revolut diventa banca italiana
              </p>
              <p style={{ fontSize: "0.7rem" }} className="text-secondary">
                1 giorno fa <span>&#8226</span>975 lettori
              </p>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
                Istantanee dal MAximall Pompeii
              </p>
              <p style={{ fontSize: "0.7rem" }} className="text-secondary">
                1 giorno fa <span>&#8226</span>427 lettori
              </p>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
                Come sarà il lavoro nel 2025
              </p>
              <p style={{ fontSize: "0.7rem" }} className="text-secondary">
                1 giorno fa <span>&#8226</span>284 lettori
              </p>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
                Big Ideas: 15 spunti per il 2025
              </p>
              <p style={{ fontSize: "0.7rem" }} className="text-secondary mb-0">
                1 giorno fa <span>&#8226</span>4620 lettori
              </p>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <p className="fs-6 mt-3">Vedi Altro </p>
              <BiChevronDown className="fs-3 fw-bold"></BiChevronDown>
            </div>
            <div className="mt-2">
              <p className="text-secondary fw-semibold mb-0">
                I giochi di Oggi
              </p>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mt-2 justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAflBMVEX/nFH/zfP+g3P7lcf+zPT6ksb7gGz+zPb61rj96v78nFP61en4yL74lMf+7f75zub0mcb0ksDx0Ob4iXvtlcH5mMb6iX/1hHP6p2XqmFz3ye367v3wxr33zMP5g3Pyi3j2qmn2mVfwoWL1oFv59/727eD12r7049/qh3f22eoNHmgkAAACsklEQVR4nO3UbW+bMBSG4QTy0gXa4BpjkoKdhK7L/v8f3Dkm0qZJe5Fommy6j4INJh986TlmNr96LdaLTw+b2UcUGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIC5R8wm1X+CObbtoT1eQ/PxmE172p127b+Jmf+EOR52rXiO94hZLOaLP/xj/vQjZji0w9CehitgFtNrvt8L6Je1Xs8lme9BbA6DJDPca5vt9/vf/0HbLH3CBjUMh91puMoH4GlyvTy9jKX3aRxXL7MuvX5+GOvtLQ1pev+alZOr67uuK7uuL8u+k0uXdFVnWZX78svL9rl4ltrqb6vj9vlS28vtdnrNVtMqeO/t2YdgrQ3eeq2VlScfw0rf6S+UxdKYuqqrVMaMV6VzbXK9rSuTL6fWLJtW3kafRavbD5n1Vk3BxhDO45oNTYi+L5ayXacC52qnU5UuBZpxcvnkmoyJPiSMmDSdpmkEqDAJR1AxxqyxffEoe84lA5OnQKo8sSrjZBpJ7ubJ6P69bto2NlPAWRzaZFlqsHPwTZTlvkiAPIWQWkxS0YB02SVLfgfJqEYi0DQuDyoTmvZb0wjGZrbpv+oJyZfjQZEsZKzd2GKaTpVMcnxui8nGY6LtJg9ygHyUA9NIQqrQ83OWd4Jx6VC4ZEmYsc0ElBs5THUtmOqmmJVmE8UioQR9slGeUqPJgnzq5IVAfVlcmiide52c0Um+ZE5mGSQ3Y26ezF+Zy+JxuZy4UzBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIAB8x71DTylP43ebrr3AAAAAElFTkSuQmCC"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column ms-2">
                      <p className="mb-0 fw-semibold">Tango</p>
                      <p
                        className="mb-0 text-secondary"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Armonizza la griglia
                      </p>
                    </div>
                  </div>
                  <div>
                    <BiChevronRight className="fs-3"></BiChevronRight>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-2 justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column ms-2">
                      <p className="mb-0 fw-semibold">Queens</p>
                      <p
                        className="mb-0 text-secondary"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Conquista ogni regione
                      </p>
                    </div>
                    <div>
                      <BiChevronRight className="fs-3"></BiChevronRight>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="w-100 bg-transparent text-center mt-3">
            <Row className="d-flex align-items-center justify-content-end pe-3">
              <Col
                style={{ margin: "2px 0" }}
                className="px-0 col-6 d-flex justify-content-end "
              >
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Informazioni
                </a>
              </Col>
              <Col
                style={{ margin: "2px 0" }}
                className="px-0 col-6 d-flex justify-content-start ps-3"
              >
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Accessibilità
                </a>
              </Col>
              <Col className="px-0 col-6 d-flex justify-content-end pe-3">
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Centro assistenza
                </a>
              </Col>
              <Col className="px-0 col-6 d-flex justify-content-start">
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Privacy e Condizioni
                </a>
              </Col>
              <Col style={{ margin: "2px 0" }} className="px-0 col-12">
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Opzioni per gli annunci pubblicitari
                </a>
              </Col>
              <Col
                style={{ margin: "2px 0" }}
                className="px-0 col-5 d-flex justify-content-end pe-3"
              >
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Pubblicità
                </a>
              </Col>
              <Col
                style={{ margin: "2px 0" }}
                className="px-0 col-7 d-flex justify-content-start"
              >
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Servizi alle aziende
                </a>
              </Col>
              <Col
                style={{ margin: "2px 0" }}
                className="px-0 col-9 d-flex justify-content-end pe-3"
              >
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Scarica l app LinkedIn
                </a>
              </Col>
              <Col
                style={{ margin: "2px 0" }}
                className="px-0 col-3 d-flex justify-content-start"
              >
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  Altro
                </a>
              </Col>
              <Col
                style={{ margin: "2px 0" }}
                className="px-0 col-12 mt-2 vertical-align-middle"
              >
                <a
                  className="text-secondary"
                  style={{ textDecoration: "none", fontSize: "0.7rem" }}
                  href=""
                >
                  <span
                    className="fw-bolder fs-6"
                    style={{ color: "blue", verticalAlign: "middle" }}
                  >
                    Linked
                  </span>
                  <BiLogoLinkedinSquare
                    fill="blue"
                    className="fs-3"
                  ></BiLogoLinkedinSquare>{" "}
                  LinkedIn Corporation <BiCopyright></BiCopyright> 2024{" "}
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
