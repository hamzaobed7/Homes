import React from "react";
import "./GetStarted.css";
import { Container, Row } from "react-bootstrap";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
     <Container>
        <Row>
             <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText" style={{fontSize:'30px'}}>Get started with Homyz</span>
          <br/>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
        </div>
        <button className="bb" href>
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
      </div>
      
        </Row>
       
     </Container>
    </section>
  );
};

export default GetStarted;