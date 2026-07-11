import { motion } from "framer-motion";

import logoForDarkBg from "../../assets/images/logo light.png";
import logoForLightBg from "../../assets/images/logo dark.png";

interface Props {
  scrolled?: boolean;
}

const Logo = ({ scrolled = true }: Props) => {
  return (
    <motion.a
      href="#home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <img
        src={scrolled ? logoForDarkBg : logoForLightBg}
        alt="ArubyTech Logo"
        className="
        h-36
        w-auto
        object-contain
        transition-all
        duration-300
        "
      />
    </motion.a>
  );
};

export default Logo;