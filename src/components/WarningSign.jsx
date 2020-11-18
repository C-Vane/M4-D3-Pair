import React from "react";
import { Alert } from "react-bootstrap";

const WarningSign = (props) => {
  return (
    <div>
      <Alert variant="danger">This is an alert with {props.text}</Alert>
    </div>
  );
};

export default WarningSign;
