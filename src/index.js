import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga4";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const TRACKING_ID = "G-MM5FP4KS0N";
ReactGA.initialize(TRACKING_ID);
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname
});

// Track pageviews on hashchange and popstate (for SPA navigation)
window.addEventListener("hashchange", () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.hash
  });
});
window.addEventListener("popstate", () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.hash
  });
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
