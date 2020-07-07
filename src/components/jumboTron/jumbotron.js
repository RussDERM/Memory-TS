import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "../globalCSS/text.css";
import "./jumbotron.css";

function JumbotronComponent() {
  return (
    <Jumbotron>
      <p className="text">
        This is a simple lasagne unit, a simple jumbotron-style lasagne for
        calling extra attention to featured content or lasagne.
      </p>
      <p className="text">
        <Button variant="primary">Learn</Button>
      </p>
    </Jumbotron>
  );
}

export default JumbotronComponent;
