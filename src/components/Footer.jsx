import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="px-5 bg-black">
      <div className="flex justify-between py-10">
        <div>
          <p className="text-xs text-gray-200">Created by <strong>Juan David</strong> 2025 ©. All rights reserved.</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <a href="https://github.com/JuanDavidDV" target="_blank">
            <img src={github} className="p-0.5 opacity-60 hover:opacity-100 bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full"/>
          </a>
          <a href="https://www.linkedin.com/in/juan-david-dv/" target="_blank">
            <img src={linkedin} className="p-0.5 opacity-60 hover:opacity-100 bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full"/>
          </a>
          <a href="mailto:juandadazav@gmail.com">
            <MdOutlineEmail className="p-0.5 opacity-60 hover:opacity-100 bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full" />
          </a>
        </div>
      </div>
      
    </footer>
  )
};

export default Footer;
