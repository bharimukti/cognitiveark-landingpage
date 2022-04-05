import { FC, useCallback, useEffect, useState } from "react";

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

  return (
    <div className="hidden sm:block fixed top-0 inset-x-0 z-10">
      <div
        className={`max-w-screen-3xl mx-auto border-gray-800 3xl:border-l 3xl:border-r transition-colors bg-opacity-90 ${
          scrolled ? "bg-black" : ""
        }`}
      >
        <div className="container max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto">
          <nav className="flex justify-center lg:justify-end font-display">
            <ul className="flex items-center space-x-8 py-4">
              {JUMP_TO_SECTIONS.map((section) => {
                const isActive = scrollPosition === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleJumpToSection(section.id);
                      }}
                      className={`${
                        isActive ? "text-primary" : ""
                      } transition-colors hover:text-primary duration-200 ease-in-out`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
