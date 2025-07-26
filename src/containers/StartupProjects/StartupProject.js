import React, { useContext, useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { bigProjects } from "../../portfolio";
import "./StartupProjects.scss";

export default function StartupProject() {
  const projectsContainerRef = useRef(null);

  // Handle responsive scrolling for both desktop and mobile
  useEffect(() => {
    const container = projectsContainerRef.current;
    if (!container) return;

    // Get responsive scroll distance based on screen size
    const getScrollDistance = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024;

      if (isMobile) {
        // On mobile, scroll by 1 project width
        return 280; // Slightly smaller than 300px for mobile
      } else if (isTablet) {
        // On tablet, scroll by 1.5 project widths
        return 450; // 300px + 150px
      } else {
        // On desktop, scroll by 2 project widths
        return 632; // (300px + 16px gap) * 2
      }
    };

    // Mouse wheel handler for desktop
    const handleWheel = e => {
      e.preventDefault();

      const scrollDistance = getScrollDistance();
      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      const currentScroll = container.scrollLeft;
      const targetScroll = currentScroll + scrollDistance * scrollDirection;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    };

    // Touch handlers for mobile
    let startX = 0;
    let startY = 0;
    let isScrolling = false;

    const handleTouchStart = e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = e => {
      if (!startX || !startY) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = Math.abs(currentX - startX);
      const diffY = Math.abs(currentY - startY);

      // Determine if this is a horizontal scroll
      if (diffX > diffY && diffX > 10) {
        isScrolling = true;
        e.preventDefault();
      }
    };

    const handleTouchEnd = e => {
      if (!startX || !startY || !isScrolling) return;

      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      const minSwipeDistance = 50; // Minimum distance for a swipe

      if (Math.abs(diffX) > minSwipeDistance) {
        const scrollDistance = getScrollDistance();
        const scrollDirection = diffX > 0 ? 1 : -1; // Swipe left = scroll right
        const currentScroll = container.scrollLeft;
        const targetScroll = currentScroll + scrollDistance * scrollDirection;

        container.scrollTo({
          left: targetScroll,
          behavior: "smooth"
        });
      }

      startX = 0;
      startY = 0;
      isScrolling = false;
    };

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  function openUrlInNewTab(url, name) {
    if (!url) {
      return;
    }
    ReactGA.event({
      category: "Startup Project",
      action: `Clicked startup project card`,
      label: name || url
    });
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container-wrapper">
            <div className="projects-container-fade" />
            <div className="projects-container" ref={projectsContainerRef}>
              {bigProjects.projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                    onClick={() => openUrlInNewTab(project.url, project.name)}
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                        ></img>
                      </div>
                    ) : null}
                    <div className="project-detail">
                      <h5
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {project.projectName}
                      </h5>
                      <h7
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.date}
                      </h7>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark
                                    ? "dark-mode project-tag"
                                    : "project-tag"
                                }
                                onClick={() => openUrlInNewTab(link.url)}
                              >
                                {link.name}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="projects-scroll-indicator">
              Scroll for more <span style={{ fontSize: "1.2em" }}>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
