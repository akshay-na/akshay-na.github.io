import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Typewriter from "typewriter-effect";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <div
                className={
                  isDark
                    ? "dark-mode profile-details-role"
                    : "profile-details-role"
                }
              >
                <span>
                  {" "}
                  <h1>
                    {" "}
                    <Typewriter
                      options={{
                        strings: [
                          "Blockchain Developer",
                          "Full-Stack Developer",
                          "Crypto Enthusiast ₿"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 60
                      }}
                    />
                    {/* Please modify the above code to change the
                    role as you wish.  */}
                  </h1>
                </span>
              </div>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <a
                  className="my-resume"
                  href={greeting.resumeLink}
                  download={greeting.resumeName}
                >
                  {greeting.resumeLink && <Button text="See my resume" />}
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
