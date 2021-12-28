import React, {useState, useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main";
import Preloader from "../src/components/preloader/Pre";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Preloader load={load} />
      <Main />
    </div>
  );
}

export default App;
