import { FC, useEffect, useState } from "react";
import Link from "next/link";

const Nav: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const contentContainer = document.getElementById("content");
    if (contentContainer) {
      const handleWindowScroll = () => {
        setScrolled((contentContainer.scrollTop || 0) > 50);
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
              {["Home", "About Us", "Roadmap", "Disclaimer", "Team"].map(
                (menuItem) => {
                  return (
                    <li key={menuItem}>
                      <Link href="/">
                        <a className="transition-colors hover:text-primary duration-200 ease-in-out">
                          {menuItem}
                        </a>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
