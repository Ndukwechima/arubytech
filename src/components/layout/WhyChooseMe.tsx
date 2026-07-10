import {
  Zap,
  RefreshCcw,
  DollarSign,
  Smartphone,
  Search,
  Palette,
  Headphones,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "I build efficiently while maintaining quality, helping you launch your website faster.",
  },

  {
    icon: RefreshCcw,
    title: "Unlimited Revisions",
    description:
      "Your satisfaction matters. I refine the website until it matches your vision.",
  },

  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Professional websites without unnecessary costs or complicated processes.",
  },

  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Websites that look and work perfectly across phones, tablets, and desktops.",
  },

  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Built with SEO-friendly structures to help your website get discovered.",
  },

  {
    icon: Palette,
    title: "Modern Design",
    description:
      "Clean, attractive interfaces designed to build trust with your audience.",
  },

  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Continued assistance after launch to keep your website running smoothly.",
  },

  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Regular updates and transparent communication throughout the project.",
  },
];

const WhyChooseMe = () => {
  return (
    <section className="relative overflow-hidden bg-primary-navy py-24">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-royal-blue/20 blur-3xl" />

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
          rounded-full
          border
          border-border
          bg-white/10
          px-5
          py-2
          text-sm
          font-semibold
          text-gold-accent
          "
          >
            WHY CHOOSE ME
          </span>

          <h2
            className="
          mt-6
          text-4xl
          font-bold
          text-white
          md:text-5xl
          "
          >
            Building Websites With
            <span className="text-gold-accent"> Quality & Purpose</span>
          </h2>

          <p
            className="
          mt-5
          text-body-text
          "
          >
            I don't just create websites. I build digital experiences that help
            businesses look professional, connect with customers, and grow
            online.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
        mt-16
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        "
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                group
                rounded-2xl
                border
                border-border
                bg-white/5
                p-6
                transition
                hover:-translate-y-2
                hover:bg-white/10
                "
              >
                <div
                  className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gold-accent
                "
                >
                  <Icon
                    className="
                  h-6
                  w-6
                  text-primary-navy
                  "
                  />
                </div>

                <h3
                  className="
                mt-6
                text-xl
                font-bold
                text-white
                "
                >
                  {reason.title}
                </h3>

                <p
                  className="
                mt-3
                text-sm
                leading-relaxed
                text-body-text
                "
                >
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
