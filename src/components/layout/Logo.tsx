import { motion } from "framer-motion";
import logo from "../../assets/images/logo light.png";

const Logo = () => {
  return (
    <motion.a
      href="#home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <img
        src={logo}
        alt="ArubyTech Logo"
        className="
          h-36
          w-auto
          object-contain
        "
      />
    </motion.a>
  );
};

export default Logo;
