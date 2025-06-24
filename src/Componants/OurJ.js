import { Col, Container, Row } from "react-bootstrap";
import "./ourj.css"
import main from "../photos/value.png";
import Acco from "./Acco.js";

export default function OurJ() {
  return (
    <>
      <section className="OurLine">
        <Container>
         
          <Row className="d-flex justify-content-center ">
            <Col md={6}>
           <img src={main} alt="" width={400} id="iimmgg" />
            </Col>
            <Col md={6}>
             <div className="text-aligin-left text">
            <h4>Our Value</h4>
            <h2>Value We Give to You</h2>
            <p>
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life bette
            </p>
          </div>
          <Acco/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
