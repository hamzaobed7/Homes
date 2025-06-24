import { Col, Container, Row } from "react-bootstrap";
import "./hero.css";
import main from "../photos/hero-image.png";
import logo2 from "../photos/logo2.png";
import r1 from "../photos/equinix.png";
import r2 from "../photos/prologis.png";
import r3 from "../photos/realty.png";
import r4 from "../photos/tower.png";
import { useState, useEffect } from "react";
export default function Hero() {
  const [coub, setCoub] = useState(1800);
  const [coub2, setCoub2] = useState(8800);
  const [coub3, setCoub3] = useState(500);

  setTimeout(() => {
    setCoub((prev) => (prev < 2000 ? prev + 1 : prev));
  }, 100);
  setTimeout(() => {
    setCoub2((prev) => (prev < 9000 ? prev + 1 : prev));
  }, 100);
  setTimeout(() => {
    setCoub3((prev) => (prev < 1000 ? prev + 1 : prev));
  }, 100);
  return (
    <>
      <section id="all_Hero">
        <div className="glow-effect"></div>

        <Container>
          <Row className="d-flex justify-content-center">
            <Col lg={6} ms={7} className="left mb-5 mb-lg-1">
              <div className="imga">
                <img src={logo2} alt="" width={70} />
              </div>
              <div className="title">
                <div className="t text-left">
                  <p>
                    Discover <br /> Most Suitable Property
                  </p>
                </div>
                <p className="para">
                  Find a variety of properties that suit you very easilty Forget
                  all difficulties in finding a residence for you
                </p>

                <div className="search">
                  <input type="text" id="input" />
                  <button className="sub">Search</button>
                  
                </div>
                <Row className="d-flex justify-content-center">
                  <Col lg={4} ms={7}>
                    {" "}
                    <h3>
                      {" "}
                      {coub2}<span>+</span>
                    </h3>{" "}
                    <p>Premium Product</p>
                  </Col>
                  <Col lg={4} ms={7}>
                    <h3>
                      {coub}
                      <span>+</span>
                    </h3>
                    <p>Happy Customer</p>
                  </Col>
                  <Col lg={4} ms={7}>
                    <h3>
                      {coub3}<span>+</span>
                    </h3>
                    <p>Awards Winning</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <img src={main} alt="" width={400} id="iimmgg" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand">
        <Container>
          <Row className="justify-content-center">
            <Col lg={3} ms={7}>
              <img src={r1} alt="" width={150} />
            </Col>
            <Col lg={3} ms={7}>
              <img src={r2} alt="" width={150} />
            </Col>
            <Col lg={3} ms={7}>
              <img src={r3} alt="" width={150} />
            </Col>
            <Col lg={3} ms={7}>
              <img src={r4} alt="" width={150} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
