import React from "react";
import { Spinner } from "react-bootstrap";

interface ILoader {
  color?: string;
}

const Loader: React.FC<ILoader> = ({ color = "white" }) => {
  return (
    <Spinner animation="border" role="status" color={color}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loader;
