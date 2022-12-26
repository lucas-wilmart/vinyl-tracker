import React from "react";

interface ILoader {
  color?: string;
}

const Loader: React.FC<ILoader> = ({ color = "white" }) => {
  return <span className="">Loading...</span>;
};

export default Loader;
