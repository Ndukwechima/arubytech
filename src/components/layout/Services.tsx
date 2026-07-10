import {
  LayoutTemplate,
  Building2,
  UserRound,
  RefreshCcw,
  Globe,
  Wrench,
  Server,
  Link,
  Gauge,
  Search,
} from "lucide-react";

import { motion } from "framer-motion";

const serviceGroups = [
  {
    title: "Website Design & Development",
    description:
      "Beautiful, modern websites designed to attract visitors and turn them into customers.",
    services: [
      {
        title: "Landing Pages",
        description:
          "High-converting pages designed for campaigns, products, and business offers.",
        icon: LayoutTemplate,
      },
      {
        title: "Business Websites",
        description:
          "Professional websites that build credibility and help your business grow.",
        icon: Building2,
      },
      {
        title: "Portfolio Websites",
        description:
          "Showcase your work with a modern portfolio that makes a strong impression.",
        icon: UserRound,
      },
      {
        title: "Website Redesign",
        description:
          "Transform outdated websites into modern and engaging experiences.",
        icon: RefreshCcw,
      },
      {
        title: "WordPress Websites",
        description:
          "Flexible WordPress websites that are easy to manage and update.",
        icon: Globe,
      },
    ],
  },

  {
    title: "Website Growth & Support",
    description:
      "Keep your website fast, secure, visible, and working effectively.",
    services: [
      {
        title: "Website Maintenance",
        description:
          "Regular updates, fixes, and improvements to keep your website healthy.",
        icon: Wrench,
      },
      {
        title: "Hosting Setup",
        description:
          "Reliable hosting configuration for better website performance.",
        icon: Server,
      },
      {
        title: "Domain Setup",
        description: "Complete domain connection and professional setup.",
        icon: Link,
      },
      {
        title: "Speed Optimization",
        description:
          "Improve loading speed and create a smoother user experience.",
        icon: Gauge,
      },
      {
        title: "SEO Setup",
        description:
          "Optimize your website structure to improve search visibility.",
        icon: Search,
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-primary-navy py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-border bg-white/10 px-5 py-2">
            <span className="text-sm font-medium text-gold-accent">
              MY SERVICES
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
            Complete Website Solutions
            <span className="block text-gold-accent">For Your Business</span>
          </h2>

          <p className="mt-5 text-body-text">
            From building your first website to improving performance and
            visibility, I provide everything your business needs online.
          </p>
        </div>

        {/* Service Groups */}
        <div className="mt-16 space-y-20">
          {serviceGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-xl text-body-text">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 50,
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
                    p-7
                    backdrop-blur-sm
                    transition
                    hover:-translate-y-2
                    hover:bg-white/10
                    "
                    >
                      <div
                        className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    "
                      >
                        <Icon className="h-7 w-7 text-royal-blue" />
                      </div>

                      <h4
                        className="
                    mt-6
                    text-xl
                    font-bold
                    text-white
                    "
                      >
                        {service.title}
                      </h4>

                      <p
                        className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-body-text
                    "
                      >
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
