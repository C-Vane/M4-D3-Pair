import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            {props.book.category}
            <br />
            {props.book.asin}
          </Card.Text>
          <Button variant="primary">{props.book.price}$</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;
