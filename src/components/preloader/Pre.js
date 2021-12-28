import React from "react";
import "./Pre.css";

function Pre(props) {
  return <div id={props.load ? "preloader" : ""}></div>;
}

export default Pre;
