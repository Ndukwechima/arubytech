import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
flex
items-center
gap-2
rounded-lg
bg-gold-accent
px-6
py-3
font-inter
font-semibold
text-primary-navy
shadow-lg
transition
hover:bg-yellow-300
"
    >
      {children}

      <ArrowRight size={18} />
    </motion.button>
  );
};

export default Button;
