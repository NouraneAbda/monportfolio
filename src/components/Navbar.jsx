import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/nourane-abda-a0241b293"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/NouraneAbda"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://facebook.com/kira.nourane"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/nouraneabda"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
