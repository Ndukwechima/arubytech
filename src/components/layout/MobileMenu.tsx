import { navigationLinks } from "../../data/navigation";
import { motion } from "framer-motion";
import Button from "../ui/Button";

interface Props {
  open: boolean;
}

const MobileMenu = ({ open }: Props) => {
  if (!open) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        height: 0,
      }}
      animate={{
        opacity: 1,
        height: "auto",
      }}
      className="
absolute
top-full
left-0
w-full
bg-primary-navy
border-t
border-border
lg:hidden
"
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
            className="
font-inter
text-white
"
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
