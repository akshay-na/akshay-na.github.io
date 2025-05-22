import React from "react";
import ReactGA from "react-ga4";
import "./Button.scss";

export default function Button({ text, className, href, newTab }) {
  const handleClick = () => {
    ReactGA.event({
      category: "Button",
      action: `Clicked ${text} button`,
      label: href || ""
    });
  };
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        onClick={handleClick}
      >
        {text}
      </a>
    </div>
  );
}
