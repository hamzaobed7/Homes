import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css"
function Cards({ cart }) {
  return (
    <Card id="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cart.image} />
      <Card.Body>
        <Card.Text id="price"><span>$ </span>{cart.price}</Card.Text>
        <Card.Title id="name">{cart.name}</Card.Title>
        <Card.Text>{cart.detail}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
