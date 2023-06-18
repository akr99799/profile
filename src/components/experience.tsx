import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./sectionTitle";
import { TiArrowForward } from "react-icons/ti";

type Experience = "Appointy-FT" | "Appointy-Intern";

export default function Experience() {
  const [active, setActive] = useState<Experience>("Appointy-FT");

  const handleClick = (value: Experience) => () => setActive(value);
  return (
    <section
      id="experience"
      className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have worked" titleOrder="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            className={`${
              active === "Appointy-FT"
                ? "border-l-textGreen text-textGreen"
                : " border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
            onClick={handleClick("Appointy-FT")}
          >
            Appointy
          </li>
          <li
            className={`${
              active === "Appointy-Intern"
                ? "border-l-textGreen text-textGreen"
                : " border-l-hoverColor text-textDark"
            } border-l-2 text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
            onClick={handleClick("Appointy-Intern")}
          >
            Appointy
          </li>
        </ul>
        <WorkDescription active={active} />
      </div>
    </section>
  );
}

function WorkDescription({ active }: { active: Experience }) {
  switch (active) {
    case "Appointy-FT": {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Software Developer{" "}
            <a
              href="https://www.linkedin.com/company/appointyindia/mycompany/"
              target="_blank"
              className="text-textGreen text-sm inline-flex items-center tracking-wide relative h-7 overflow-x-hidden group"
            >
              @Appointy
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            August 2021 - PRESENT
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Provide Clean and Efficient code review in the team.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Collaborate with internal teams and vendors to fix and improve,
              implement new features in the product, and create the best
              possible user experience.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Worked in an Agile-driven environment to effectively maintain
              project timelines and utilize available resources.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Researched and optimized code to reduce application latency and
              increase performance.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Became an integral part of the core design and development team.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Helped in developing and delivering multiple products/features to
              our enterprise clients within the time frame.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Helped in developing and delivering multiple products/features to
              our enterprise clients within the time frame.
            </li>
          </ul>
        </motion.div>
      );
    }
    case "Appointy-Intern": {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Software Developer Intern
            <a
              href="https://www.linkedin.com/company/appointyindia/mycompany/"
              target="_blank"
              className="text-textGreen text-sm inline-flex items-center tracking-wide relative h-7 overflow-x-hidden group"
            >
              @Appointy
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            May 2021 - July 2021
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Developed a feature that takes the zip code and coordinates of a
              location and when a customer searches for a zip code it shows the
              respective location in the search result as well as in Google Maps
              as a marker.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Developed and optimized web components.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Gain experience in unit testing and end-to-end testing of the
              application to measure its effectiveness.
            </li>
          </ul>
        </motion.div>
      );
    }
    default:
      return null;
  }
}
