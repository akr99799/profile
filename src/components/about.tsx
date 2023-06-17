import Image from "next/image";
import SectionTitle from "./sectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { profilePhoto } from "../../public/assets";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
      >
        <SectionTitle titleOrder="01" title="About Me" />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>
              Hello, I&apos;m Ankit Kumar Roshan, and I enjoy creating things
              that live on the internet. My primary focus and specialization lie
              in <span className="text-textGreen">ReactJS</span>. With a strong
              background in{" "}
              <span className="text-textGreen inline">JavaScript</span>, I am
              adept at crafting dynamic and interactive web interfaces.
            </p>
            <p>
              My journey as a developer has allowed me to expand my knowledge
              and work with a diverse set of technologies. I have hands-on
              experience with{" "}
              <span className="text-textGreen">TypeScript, HTML, and CSS</span>,
              enabling me to build robust and scalable applications.
            </p>
            <p>I have experience in these technologies:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                React
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                TypeScript, JavaScript(ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                HTML/CSS
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                GraphQL, React-relay
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                Material-UI, Formik, Yup validation
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                Jest, Cypress.io
              </li>
            </ul>
            <p>Currently, I&apos;m learning:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                Solid.js
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                Next.js
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt className="text-textGreen" />
                </span>
                Tailwindcss
              </li>
            </ul>
          </div>
          <div className="w-full lgl:w-1/3 h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
              <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                <Image
                  src={profilePhoto}
                  alt="profile-picture"
                  className="rounded-lg object-cover"
                  width={320}
                  height={320}
                />
                <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
              </div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </section>
    </>
  );
}
