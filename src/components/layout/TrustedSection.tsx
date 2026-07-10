import {
  BriefcaseBusiness,
  Users,
  Clock3,
  Headphones,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: BriefcaseBusiness,
    number: "50+",
    text: "Projects Completed",
  },
  {
    icon: Users,
    number: "50+",
    text: "Happy Clients",
  },
  {
    icon: Clock3,
    number: "100%",
    text: "On Time Delivery",
  },
  {
    icon: Headphones,
    number: "Ongoing",
    text: "Support",
  },
  {
    icon: BadgeCheck,
    number: "100%",
    text: "Satisfaction Guaranteed",
  },
];

const Trusted = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm md:text-base font-semibold tracking-widest text-dark-text"
        >
          TRUSTED BY BUSINESSES & BRANDS
        </motion.h2>

        {/* Trust Items */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <Icon className="h-6 w-6 text-royal-blue" />
                </div>
                <div className="flex flex-col">
                  {/* Number */}
                  <h3 className="text-2xl font-bold text-dark-text">
                    {item.number}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-sm text-slate-500">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
