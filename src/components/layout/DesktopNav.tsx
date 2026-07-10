import { navigationLinks } from "../../data/navigation";
import { motion } from "framer-motion";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigationLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          whileHover={{
            y: -2,
          }}
          className="
relative
font-inter
text-sm
font-medium
text-white
group
"
        >
          {link.name}

          <span
            className="
absolute
left-0
bottom-2
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
