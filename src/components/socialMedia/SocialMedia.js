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
          <i className="fab fa-discord" style={{ color: "#4b55e0" }}></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.cal ? (
        <a
          href={socialMediaLinks.cal}
          className="icon-button cal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cal.com"
          onClick={handleSocialMediaClick("cal")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
            fill="none"
            aria-hidden="true"
            focusable="false"
            className="icon-svg"
          >
            {/* Official Cal.com monogram (C + a + l) — design.cal.com / api/logo?type=icon */}
            <path
              fill="#fafafa"
              d="M18.628 36.781c2.846 0 4.946-1.096 6.183-2.59l-2.38-2.03c-.957 1.05-2.147 1.587-3.733 1.587-3.22 0-5.204-2.427-5.204-5.413 0-2.987 1.984-5.46 5.134-5.46 1.47 0 2.683.513 3.663 1.54l2.31-2.007c-1.47-1.75-3.313-2.567-5.973-2.567-5.04 0-8.517 3.803-8.517 8.493 0 4.667 3.663 8.447 8.517 8.447ZM31.69 36.781c2.17 0 3.267-.91 3.92-2.286v1.983h3.057V24.344H35.54v1.914c-.653-1.307-1.75-2.17-3.85-2.17-3.337 0-5.997 2.87-5.997 6.37s2.66 6.323 5.997 6.323Zm-2.847-6.346c0-1.89 1.354-3.5 3.36-3.5 2.077 0 3.407 1.633 3.407 3.523 0 1.89-1.33 3.477-3.407 3.477-2.006 0-3.36-1.657-3.36-3.5ZM41.472 36.478h3.15V19.444h-3.15v17.034Z"
            />
          </svg>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.cursor ? (
        <a
          href={socialMediaLinks.cursor}
          className="icon-button cursor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cursor"
          onClick={handleSocialMediaClick("cursor")}
        >
          <svg
            className="icon-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            {/* Simple Icons Cursor — 3 facets, solid greys (no alpha) */}
            <path
              fill="#B0B0B0"
              d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z"
            />
            <path
              fill="#6E6E6E"
              d="M22.35 18l-10.425 6V12L22.35 6z"
            />
            <path
              fill="#FFFFFF"
              d="M11.925 0L1.5 6l10.425 6 10.425-6z"
            />
          </svg>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
