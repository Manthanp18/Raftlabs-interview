import React from "react";
import { Card } from "react-bootstrap";

const SingleUser = (props) => {
  return (
    <Card bg="light">
      <Card.Body>{props.user.name}</Card.Body>
    </Card>
  );
};
export default SingleUser;
