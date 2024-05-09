import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  useEffect(() => {
    const TRACKING_ID = "G-MM5FP4KS0N";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
