import React, { useContext, useState } from "react";
import ReactGA from "react-ga4";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
          ReactGA.event({
            category: "Theme",
            action: `Toggled theme`,
            label: isDark ? "Light Mode" : "Dark Mode"
          });
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default ToggleSwitch;
