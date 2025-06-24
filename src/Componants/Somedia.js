import { Container, Row, Col } from "react-bootstrap";
import "./som.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import main from "../photos/contact.jpg";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
export default function Somedia() {
  return (
    <section className="media">
      <Container>
        <Row>
          <Col md={6}>
            <div className="text-aligin-left text">
              <h4>Our Contact Us</h4>
              <h2>Easy to contact us</h2>
              <p>
                We always ready to help by providijng the best services for you.
                We beleive a good blace to live can make your life better
              </p>
            </div>

            <Row>
              <Col md={6}>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <Row>
                      <Col md={2}>
                        <div className="flexCenter icon">
                          <MdCall size={25} />
                        </div>
                      </Col>
                      <Col md={9}>
                        {" "}
                        <div className="flexColStart detail">
                          <Row>
                            <span className="primaryText">Call</span>
                          </Row>
                          <Row>
                            <span className="secondaryText">
                              021 123 145 14
                            </span>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="flexCenter button">Call now</div>
                </div>
              </Col>
              <Col md={6}>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <Row>
                      <Col md={2}>
                        <div className="flexCenter icon">
                          <BsFillChatDotsFill size={25} />
                        </div>
                      </Col>
                      <Col md={9}>
                        {" "}
                        <div className="flexColStart detail">
                          <Row>
                            <span className="primaryText">Chat</span>
                          </Row>
                          <Row>
                            <span className="secondaryText">
                              021 123 145 14
                            </span>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="flexCenter button">Chat now</div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <Row>
                      <Col md={2}>
                        <div className="flexCenter icon">
                         <BsFillChatDotsFill size={25} />
                        </div>
                      </Col>
                      <Col md={9}>
                        {" "}
                        <div className="flexColStart detail">
                          <Row>
                            <span className="primaryText">Video Call</span>
                          </Row>
                          <Row>
                            <span className="secondaryText">
                              021 123 145 14
                            </span>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="flexCenter button">Call now</div>
                </div>
              </Col>
              <Col md={6}>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <Row>
                      <Col md={2}>
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25} />
                        </div>
                      </Col>
                      <Col md={9}>
                        {" "}
                        <div className="flexColStart detail">
                          <Row>
                            <span className="primaryText">Chat</span>
                          </Row>
                          <Row>
                            <span className="secondaryText">
                              021 123 145 14
                            </span>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="flexCenter button">Message now</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
           <Col md={6}>
           <img src={main} alt="" width={400} id="iimmgg" className="omg" />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
