import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

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
    <header
      className={`
      sticky
      top-0
      left-0
      right-0
      z-50
      w-full
      transition-all
      duration-300

      ${scrolled ? "bg-[#091123] shadow-lg" : "bg-white"}

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
          <Logo scrolled={scrolled} />

          <DesktopNav scrolled={scrolled} />

          <div className="hidden lg:block">
            <Button>Let's Talk</Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`
            lg:hidden
            ${scrolled ? "text-white" : "text-primary-navy"}
            `}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        <MobileMenu open={open} scrolled={scrolled} />
      </AnimatePresence>
    </header>
  );
};

export default Header;