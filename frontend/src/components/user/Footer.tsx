import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import logo from "../../assets/logoipsum-224.svg";

const Footer = () => {
  return (
    <footer className='w-full bg-black h-[70px] flex justify-between items-center px-8 text-white'>
      <div className='flex items-center gap-3'>
        <img src={logo} alt='logo' className='w-14 h-14' />
        <h3>Code_Blog</h3>
      </div>
      <div className='text-sm text-center'>
        <p>All rights reserved. Copyright @code_blog</p>
      </div>
      <div className='flex items-center gap-3 cursor-pointer'>
        <LinkedinIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
};

export default Footer;
