import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mx-5">
      <div className="flex justify-between mt-28 mb-10">
        <div>
          <p className="text-xs text-gray-600">Created by <strong>Juan David</strong> 2024 ©. All rights reserved.</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <a href="https://github.com/JuanDavidDV" target="_blank">
            <img src={github} className="w-5 pt-1 opacity-60 hover:opacity-100 rounded-xl"/>
          </a>
          <a href="https://www.linkedin.com/in/juan-david-dv/" target="_blank">
            <img src={linkedin} className="w-6 pt-1 opacity-60 hover:opacity-100 rounded-xl"/>
          </a>
          <a href="mailto:juandadazav@gmail.com">
            <MdOutlineEmail className="pt-1 text-2xl opacity-60 hover:opacity-100 rounded-xl" />
          </a>
        </div>
      </div>
      
    </footer>
  )
};

export default Footer;