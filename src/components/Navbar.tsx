import { MouseEvent, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../../public/assets";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import Footer from "./Footer";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const isMobileView = useMobileView();

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement?.scrollIntoView({
        behavior: "smooth",
      });
      const links = document.querySelectorAll(".nav-link");
      links.forEach((linkElement) => linkElement.classList.remove("active"));
      e.currentTarget.classList.contains("nav-link")
        ? e.currentTarget.classList.add("active")
        : null;
      if (showMenu) setShowMenu(false);
    }
  };

  return (
    <header className="shadow-navbarShadow w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <nav className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link href="#home" onClick={handleScroll}>
            <Image src={logo} alt="logo" width={80} height={80} />
          </Link>
        </motion.div>
        {!isMobileView && (
          <Links isMobileView={false} handleScroll={handleScroll} />
        )}
        {/* Icon section */}
        {isMobileView && (
          <div
            onClick={() => setShowMenu(true)}
            className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          >
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          </div>
        )}
        {showMenu && (
          <div className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-hidden bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <Links isMobileView handleScroll={handleScroll} />
              <Footer />
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
}

const Links = ({
  isMobileView,
  handleScroll,
}: {
  isMobileView: boolean;
  handleScroll: (e: MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <div
      className={`flex ${isMobileView ? "flex-col" : null} gap-7 items-center`}
    >
      <ul
        className={`flex ${isMobileView ? "flex-col" : null} text-[13px] gap-7`}
      >
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <Link
            href="#about"
            className="flex gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
            onClick={handleScroll}
          >
            <span className="text-textGreen">01.</span>About
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.2 }}
        >
          <Link
            href="#experience"
            className="flex gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
            onClick={handleScroll}
          >
            <span className="text-textGreen">02.</span>Experience
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <Link
            href="#contact"
            className="flex gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
            onClick={handleScroll}
          >
            <span className="text-textGreen">03.</span>Contact
          </Link>
        </motion.li>
      </ul>
      <Link href="/assets/Resume.pdf" target="_blank">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          Resume
        </motion.button>
      </Link>
    </div>
  );
};

const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileView = () => {
    setIsMobile(window.innerWidth < 667);
  };

  useEffect(() => {
    checkMobileView();

    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);
  return isMobile;
};
