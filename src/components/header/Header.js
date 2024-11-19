import React, { useContext } from "react";
import ReactGA from "react-ga4";
import Headroom from "react-headroom";
import StyleContext from "../../contexts/StyleContext";
import {
  achievementSection,
  educationInfo,
  greeting,
  skillsSection,
  workExperiences
} from "../../portfolio";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.scss";

const handleNavbarClick = navItem => () => {
  ReactGA.event({
    category: "Navigation",
    action: `Clicked Navbar Item`,
    label: `Navigated to ${navItem}`
  });
};

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewHome = greeting.displayGreeting;
  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewHome && (
            <li>
              <a href="/" onClick={handleNavbarClick("home")}>
                Home
              </a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills" onClick={handleNavbarClick("skills")}>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={handleNavbarClick("experience")}>
                Experience
              </a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" onClick={handleNavbarClick("education")}>
                Education
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a
                href="#achievements"
                onClick={handleNavbarClick("achievements")}
              >
                Achievements
              </a>
            </li>
          )}

          <li>
            <a
              href="https://akshay-na.medium.com"
              onClick={handleNavbarClick("blogs")}
            >
              Blogs
            </a>
          </li>

          <li>
            <a href="#contact" onClick={handleNavbarClick("contact_me")}>
              Contact Me
            </a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
