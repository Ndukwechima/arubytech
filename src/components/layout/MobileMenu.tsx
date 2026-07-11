 import { navigationLinks } from "../../data/navigation";
 import { motion } from "framer-motion";
 import Button from "../ui/Button";

interface Props {
  open: boolean;
  scrolled: boolean;
}

const MobileMenu = ({ open, scrolled }: Props) => {
  if (!open) return null;

  return (
    <motion.div
      className={`
absolute
top-full
left-0
right-0
w-full

lg:hidden

${scrolled ? "bg-[#091123] border-t border-[#202f54]" : "bg-[#e9edf7] border-t border-[#d9e0f1]"}

`}
    >
      <div
        className="
flex
flex-col
gap-6
px-6
py-8
"
      >
        {navigationLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
font-inter

${scrolled ? "text-white" : "text-primary-navy"}

`}
          >
            {link.name}
          </a>
        ))}

        <Button>Let's Talk</Button>
      </div>
    </motion.div>
  );
};

export default MobileMenu;