import { Menu, X } from "lucide-react";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import Container from "./Container";
import Button from "../ui/Button";

import useScroll from "../../hooks/useScroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrolled = useScroll();

  return (
    <motion.header
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
fixed
top-0
left-0
z-50
w-full
transition-all
duration-300

${
  scrolled
    ? " bg-[#091123] "
    : "bg-transparent backdrop-blur-md shadow-lg border-b border-border"
}

`}
    >
      <Container>
        <div
          className="
flex
h-20
items-center
justify-between
"
        >
          <Logo />

          <DesktopNav />

          <div
            className="
hidden
lg:block
"
          >
            <Button>Let's Talk</Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="
text-white
lg:hidden
"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        <MobileMenu open={open} />
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
