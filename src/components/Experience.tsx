import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { TiArrowForward } from "react-icons/ti";

type Experience = "Appointy" | "Codesmith";

export default function Experience() {
  const [active, setActive] = useState<Experience>("Codesmith");
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
            className={`${active === "Codesmith"
              ? "border-l-textGreen text-textGreen"
              : " border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
            onClick={handleClick("Codesmith")}
          >
            Codesmith
          </li>
          <li
            className={`${active === "Appointy"
              ? "border-l-textGreen text-textGreen"
              : " border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
            onClick={handleClick("Appointy")}
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
    case "Codesmith": {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="flex gap-2 flex-wrap font-medium text-lg mdl:text-xl font-titleFont">
            Software Engineer
            <a
              href="https://www.linkedin.com/company/codesmithdev"
              target="_blank"
              className="text-textGreen text-sm inline-flex items-center tracking-wide relative h-7 overflow-x-hidden group"
            >
              @Codesmith
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            November 2023 - PRESENT
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Developed a calendar application allowing users to create, view, edit, delete,
              and reschedule events with drag-and-drop functionality for intuitive rescheduling.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Designed and implemented a customizable form builder enabling users
              to create and distribute forms for collecting responses efficiently.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Supervised the development of a client portal that allows customers to book
              appointments by selecting location, service, staff, and preferred date and time.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Developed a bulk import feature enabling users to upload CSV files containing
              customer information, with processes including uploading to Google Cloud Storage,
              scheduling backend services for file processing, and inserting data into the database.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Developed and implemented CRUD services for multiple entities—such as customers, staff, and
              locations—using proto3 schemas, connectrpc (gRPC-compatible HTTP APIs) for client communication,
              and Ent (entity framework for Go) for data persistence in PostgreSQL.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Managed a team of four developers, providing technical mentorship,conducting code reviews,
              and allocating tasks to ensure project alignment and quality.
            </li>
          </ul>
        </motion.div>
      );
    }
    case "Appointy": {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="flex gap-2 flex-wrap font-medium text-lg mdl:text-xl font-titleFont">
            Software Engineer
            <a
              href="https://www.linkedin.com/company/appointyindia/"
              target="_blank"
              className="text-textGreen text-sm inline-flex items-center tracking-wide relative h-7 overflow-x-hidden group"
            >
              @Appointy
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            August 2021 - October 2023
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Optimized report section by caching results of costly operations,
              reducing application latency by 75%, enhancing UI responsiveness,
              and significantly decreasing customer complaints about slow report rendering.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Developed an interactive map using a map library showcasing locations with detailed pop-ups and
              integrated Google Maps navigation links for easy directions.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Improved developer onboarding by creating comprehensive documentation for the web
              components, enabling faster integration and reducing development time.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Collaborated with cross-functional teams (product and design) to develop, improve,
              and troubleshoot features, focusing on user experience and delivering optimal outcomes.
            </li>
            <li className="flex gap-2 text-textDark text-base">
              <span>
                <TiArrowForward className="text-textGreen mt-1" />
              </span>
              Implemented accessibility best practices in client-facing apps, improving user experience for
              individuals with disabilities and helping secure a new enterprise customer.
            </li>
          </ul>
          <h3 className="flex gap-2 flex-wrap mt-8 font-medium text-lg mdl:text-xl font-titleFont">
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
