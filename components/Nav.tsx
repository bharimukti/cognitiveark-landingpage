import { FC, useCallback, useEffect, useState } from "react";
import Chevron from "./icons/Chevron";

const JUMP_TO_SECTIONS = [
  { id: "titleSection", label: "Home" },
  { id: "middleSection", label: "About Us" },
  { id: "roadmapSection", label: "Roadmap" },
  { id: "disclaimerSection", label: "Disclaimer" },
  { id: "teamSection", label: "Team" },
];

const Nav: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(JUMP_TO_SECTIONS[0].id);
  const [expanded, setExpanded] = useState(false);

  const handleJumpToSection = useCallback((sectionId) => {
    const contentContainer = document.getElementById("content");
    if (!contentContainer) {
      return;
    }
    const sectionToJumpTo = document.getElementById(sectionId);
    if (!sectionToJumpTo) {
      return;
    }
    contentContainer.scrollTo({
      top: sectionToJumpTo.offsetTop,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (expanded) {
      const handleWindowClick = () => {
        setExpanded(false);
      };
      window.addEventListener("click", handleWindowClick);
      return () => {
        window.removeEventListener("click", handleWindowClick);
      };
    }
  }, [expanded]);

  useEffect(() => {
    const contentContainer = document.getElementById("content");
    if (contentContainer) {
      const handleWindowScroll = () => {
        const scrollDistance = contentContainer.scrollTop || 0;
        setScrolled(scrollDistance > 50);
        const currentScrollPosition = JUMP_TO_SECTIONS.reduce(
          (agg, section) => {
            const sectionElement = document.getElementById(section.id);
            if (!sectionElement) {
              return agg;
            }
            if (sectionElement.offsetTop <= scrollDistance) {
              return section.id;
            }
            return agg;
          },
          JUMP_TO_SECTIONS[0].id
        );
        setScrollPosition(currentScrollPosition);
      };

      contentContainer.addEventListener("scroll", handleWindowScroll);
      return () => {
        contentContainer.removeEventListener("scroll", handleWindowScroll);
      };
    }
  }, []);

  const renderMenuItems = () => {
    return (
      <>
        {JUMP_TO_SECTIONS.map((section) => {
          const isActive = scrollPosition === section.id;
          return (
            <li key={section.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setExpanded(false);
                  handleJumpToSection(section.id);
                }}
                className={`flex ${
                  isActive ? "text-primary" : ""
                } transition-colors hover:text-primary duration-200 ease-in-out py-2 sm:py-0 px-6 sm:px-0 text-xl sm:text-base`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="hidden sm:block fixed top-0 inset-x-0 z-10">
        <div
          className={`max-w-screen-3xl mx-auto border-gray-800 3xl:border-l 3xl:border-r transition-colors bg-opacity-90 ${
            scrolled ? "bg-black" : ""
          }`}
        >
          <div className="container max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto">
            <nav className="flex justify-center lg:justify-end font-display">
              <ul className="flex items-center space-x-8 py-4">
                {renderMenuItems()}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden fixed inset-y-0 transition-all duration-300 ease-in-out ${
          expanded ? "left-0" : "-left-2/3"
        } w-2/3 bg-black z-10`}
      >
        <button
          className="absolute left-full top-6 bg-black p-3"
          onClick={(e) => {
            setExpanded(!expanded);
            e.stopPropagation();
          }}
        >
          <span
            className={`block text-gray-200 transform transition-transform duration-300 ease-in-out ${
              expanded ? "rotate-180" : ""
            }`}
          >
            <Chevron />
          </span>
        </button>
        <ul className="pt-12">{renderMenuItems()}</ul>
      </div>
    </>
  );
};

export default Nav;
