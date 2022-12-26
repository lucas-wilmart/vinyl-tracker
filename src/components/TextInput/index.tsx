import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";
import "./styles.css";

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput: React.FC<ITextInput> = ({ ...props }) => {
  return <input {...props} className={classNames("input", props.className)} />;
};

export default TextInput;
