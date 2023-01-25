import React, { useContext } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {"Made with ❤️ by "}
          <a href="https://github.com/akshay-na/akshay-na.github.io">
            Akshay N
          </a>
        </p>
      </div>
    </Fade>
  );
}
