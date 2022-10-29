import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className=" sticky top-0   shadow-gray-700 shadow-sm z-50 ">
      <div
        className="flex  items-start justify-evenly max-w-7xl z-20 xl:items-center p-5
        
        "
      >
        {/* social icons */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex  
        
        "
        >
          <SocialIcon
            url="https://youtube.com/royalihasan_"
            bgColor="transparent"
            fgColor="gray"
            className="hover:scale-150 "
          />
          <SocialIcon
            url="https://instagram.com/royalihasan_"
            bgColor="transparent"
            fgColor="gray"
            className="hover:scale-150 "
          />
          <SocialIcon
            url="https://facebook.com/royalihasan_"
            bgColor="transparent"
            fgColor="gray"
            className="hover:scale-150 "
          />
          <SocialIcon
            url="https://linkedin.com/royalihasan_"
            bgColor="transparent"
            fgColor="gray"
            className="hover:scale-150 "
          />
          <SocialIcon
            url="https://linke.com/royalihasan_"
            bgColor="transparent"
            fgColor="gray"
            className="hover:scale-150 "
          />{" "}
          <SocialIcon
            url="https://snapchat.com/royalihasan_"
            bgColor="transparent"
            fgColor="gray"
            className="hover:scale-150 "
          />
        </motion.div>
        {/* mail */}
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-400 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer hover:scale-150 "
            network="email"
            bgColor="transparent"
            fgColor="gray"
          />
          <p className=" uppercase hidden md:inline-flex sm:inline-flex text-sm text-gray-400 ">
            Get In Touch
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
