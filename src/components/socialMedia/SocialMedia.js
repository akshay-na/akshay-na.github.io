import React from "react";
import ReactGA from "react-ga4";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.scss";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  const handleSocialMediaClick = social => () => {
    ReactGA.event({
      category: "Social Media Interaction",
      action: `Clicked ${social}`,
      label: `Visit to ${social} profile`
    });
  };

  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("github")}
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("linkedin")}
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("gmail")}
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.npm ? (
        <a
          href={socialMediaLinks.npm}
          className="icon-button npm"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("npm")}
        >
          <i className="fab fa-npm"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("gitlab")}
        >
          <i className="fab fa-gitlab"></i>
          {/* <i class="fa-brands fa-gitlab"></i> */}
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("instagram")}
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("twitter")}
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("medium")}
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.discord ? (
        <a
          href={socialMediaLinks.discord}
          className="icon-button discord"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialMediaClick("discord")}
        >
          <i class="fab fa-discord" style={{ color: "#4b55e0" }}></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
