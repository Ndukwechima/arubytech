import {
  MessageCircle,
  ClipboardList,
  Palette,
  Code2,
  Eye,
  Rocket,
  Headphones,
} from "lucide-react";

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We discuss your goals, business needs, target audience, and website requirements.",
    icon: MessageCircle,
  },

  {
    number: "02",
    title: "Planning",
    description:
      "I create a clear project roadmap, structure, and strategy for your website.",
    icon: ClipboardList,
  },

  {
    number: "03",
    title: "Design",
    description:
      "I create a modern design focused on user experience, branding, and conversions.",
    icon: Palette,
  },

  {
    number: "04",
    title: "Development",
    description:
      "The design is transformed into a fast, responsive, and functional website.",
    icon: Code2,
  },

  {
    number: "05",
    title: "Review",
    description:
      "You review the website and provide feedback for improvements and adjustments.",
    icon: Eye,
  },

  {
    number: "06",
    title: "Launch",
    description:
      "Your website goes live and becomes ready to serve your customers.",
    icon: Rocket,
  },

  {
    number: "07",
    title: "Support",
    description:
      "I provide assistance after launch to ensure your website keeps performing well.",
    icon: Headphones,
  },
];

const Process = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            rounded-full
            bg-white
            px-5
            py-2
            text-sm
            font-semibold
            text-royal-blue
            shadow-sm
            "
          >
            MY PROCESS
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-dark-text
            md:text-5xl
            "
          >
            From Idea To A
            <span className="text-royal-blue"> Successful Website</span>
          </h2>

          <p
            className="
          mt-5
          text-slate-600
          "
          >
            A simple and transparent process that keeps you informed from the
            first conversation to the final launch.
          </p>
        </div>

        {/* Timeline */}

        <div
          className="
        relative
        mt-20
        "
        >
          {/* Connecting Line Desktop */}

          <div
            className="
          absolute
          left-0
          right-0
          top-12
          hidden
          h-0.5
          bg-border
          lg:block
          "
          />

          <div
            className="
          grid
          gap-10
          lg:grid-cols-7
          "
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    delay: index * 0.1,
                  }}
                  className="
                  relative
                  text-center
                  "
                >
                  {/* Icon Circle */}

                  <div
                    className="
                    relative
                    mx-auto
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    border
                    border-border
                    shadow-md
                    "
                  >
                    <Icon
                      className="
                      h-9
                      w-9
                      text-royal-blue
                      "
                    />

                    <span
                      className="
                      absolute
                      -right-2
                      -top-2
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-gold-accent
                      text-sm
                      font-bold
                      text-primary-navy
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="
                    mt-6
                    font-bold
                    text-dark-text
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-600
                    "
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
