import { FC, useEffect, useState } from "react";

const Nav: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-10 transition-colors ${
        scrolled ? "bg-black" : ""
      }`}
    >
      <div className="container max-w-screen-lg mx-auto">
        <nav className="flex justify-end font-display">
          <ul className="flex items-center space-x-8 py-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Roadmap</li>
            <li>Disclaimer</li>
            <li>Team</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
