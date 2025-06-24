import Accordion from "react-bootstrap/Accordion";

function Acco() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" id="acro">
        <Accordion.Header id="tit"><h4>Best interest rates on the market</h4></Accordion.Header>
        <Accordion.Body>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
          ut occaecat consequat est minim minim esse tempor laborum consequat
          esse adipisicing eu reprehenderit enim.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item id="acro" eventKey="1">
        <Accordion.Header id="tit"><h4>Prevent unstable prices</h4></Accordion.Header>
        <Accordion.Body>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
          ut occaecat consequat est minim minim esse tempor laborum consequat
          esse adipisicing eu reprehenderit enim
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" id="acro">
        <Accordion.Header id="tit"><h4>Best price on the market</h4></Accordion.Header>
        <Accordion.Body>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
          ut occaecat consequat est minim minim esse tempor laborum consequat
          esse adipisicing eu reprehenderit enim.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acco;
