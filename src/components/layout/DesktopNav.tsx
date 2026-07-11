import { navigationLinks } from "../../data/navigation";
import { motion } from "framer-motion";

interface Props {
  scrolled: boolean;
}

const DesktopNav = ({ scrolled }: Props) => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigationLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          whileHover={{
            y: -2,
          }}
          className={`
          relative
          font-inter
          text-sm
          font-medium
          transition-colors
          duration-300
          group

          ${scrolled ? "text-white" : "text-primary-navy"}
          `}
        >
          {link.name}

          <span
            className="
            absolute
            left-0
            bottom-0
            h-0.5
            w-0
            bg-gold-accent
            transition-all
            duration-300
            group-hover:w-full
            "
          />
        </motion.a>
      ))}
    </nav>
  );
};

export default DesktopNav;