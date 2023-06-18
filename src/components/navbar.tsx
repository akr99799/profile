import Image from "next/image";
import { logo } from "../../public/assets";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="shadow-navbarShadow w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <nav className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#home">
            <Image src={logo} alt="logo" className="w-14 h-14" />
          </a>
        </motion.div>
        <div className="hidden mdl:inline-flex gap-7 items-center">
          <ul className="flex text-[13px] gap-7">
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <a
                href="#about"
                className="flex gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
              >
                <span className="text-textGreen">01.</span>About
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <a
                href="#experience"
                className="flex gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
              >
                <span className="text-textGreen">02.</span>Experience
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <a
                href="#project"
                className="flex gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
              >
                <span className="text-textGreen">03.</span>Project
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="flex gap-1 font-medium text-textDark hover:text-textGreen duration-300 nav-link"
              >
                <span className="text-textGreen">04.</span>Contact
              </a>
            </motion.li>
          </ul>
          <a href="/assets/Resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Icon section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </nav>
    </header>
  );
}
