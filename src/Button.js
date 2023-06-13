import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.children}
    </button>
  );
}

export default Button;
