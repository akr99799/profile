import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section
      id="home"
      className="mx-auto py-10 mdl:py-24 mdl:px-10 xl:px-4 flex flex-col gap-4 lgl:gap-8 max-w-contentContainer"
    >
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-textGreen text-lg font-titleFont tracking-wide"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-textLight text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Ankit Kumar Roshan.
        <span className="text-textDark text-2xl lgl:text-4xl font-semibold mt-2 lgl:mt-4">
          I build things for the web
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-textDark text-base md:max-w-[650px] font-medium"
      >
        Experienced web developer with a passion for building dynamic
        web applications. Skilled in JavaScript, HTML/CSS,
        and Go. Eager to contribute to your
        projects and stay updated with the latest technologies in web
        development. Let&apos;s connect and collaborate for success.{" "}
        <a
          href="https://www.linkedin.com/in/ankit-kumar-roshan"
          target="_blank"
          className="text-textGreen inline-flex relative h-7 overflow-x-hidden group"
        >
          Learn More
          <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500" />
        </a>
      </motion.p>
      <motion.button
        onClick={() => window.open("https://github.com/akr99799", "_blank")}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-500"
      >
        Check out my projects!
      </motion.button>
    </section>
  );
}
