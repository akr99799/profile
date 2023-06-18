import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/akr99799" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/ankit-kumar-roshan" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://www.instagram.com/im__.__ankit/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
          <SlSocialInstagram />
        </span>
      </a>
    </div>
  );
}
