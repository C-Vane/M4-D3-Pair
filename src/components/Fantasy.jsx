import React, { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import { Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class Fantasy extends Component {
  render() {
    console.log("myFantasyBooks", fantasyBooks);

    return (
      <>
        {fantasyBooks.map((book) => (
          <Col>
            <SingleBook book={book} />
          </Col>
        ))}
      </>
    );
  }
}

export default Fantasy;
