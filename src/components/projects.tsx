import Image from "next/image";
import { covidTracker } from "../../public/assets";
import SectionTitle from "./sectionTitle";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Projects() {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Build" titleOrder="03" />
      <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto"
            href="https://darling-clafoutis-11f7d4.netlify.app/"
            target="_blank"
          >
            <div>
              <Image src={covidTracker} alt="covid-tracker" />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Covid Tracker</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A COVID tracker app that provides real-time statistics on a global
              scale, including total cases, recoveries, and deaths worldwide, as
              well as country-specific data. Users can easily access and monitor
              the latest updates on the pandemic through this app.
            </p>
            <ul className="flex gap-4 justify-end text-textDark text-xs md:text-sm font-titleFont tracking-wide">
              <li>React</li>
              <li>Material-ui</li>
              <li>Typescript</li>
            </ul>
            <div className="text-2xl flex gap-2">
              <a
                href="https://github.com/akr99799/covid-tracker"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://darling-clafoutis-11f7d4.netlify.app/"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
