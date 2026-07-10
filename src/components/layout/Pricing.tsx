import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Starting from $400",
    description:
      "Perfect for individuals and small businesses that need a professional online presence.",
    features: [
      "Landing page or small website",
      "Modern responsive design",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact form integration",
    ],
    button: "Get Started",
    popular: false,
  },

  {
    name: "Business",
    price: "Starting from $800",
    description:
      "Ideal for businesses that want a complete website designed to attract customers.",
    features: [
      "Multi-page business website",
      "Custom UI/UX design",
      "Performance optimization",
      "SEO-friendly structure",
      "Content management setup",
      "Post-launch support",
    ],
    button: "Choose Business",
    popular: true,
  },

  {
    name: "Premium",
    price: "Custom Pricing",
    description:
      "For brands that need advanced features and a complete digital solution.",
    features: [
      "Advanced website features",
      "Custom integrations",
      "Advanced SEO setup",
      "Priority support",
      "Website strategy consultation",
      "Ongoing improvements",
    ],
    button: "Let's Discuss",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-light-gray py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
          inline-flex
          items-center
          gap-2
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
            <Sparkles className="h-4 w-4" />
            PRICING PLANS
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
            Simple Packages,
            <span className="text-royal-blue"> Flexible Solutions</span>
          </h2>

          <p
            className="
          mt-5
          text-slate-600
          "
          >
            Every business is different. Choose a package that fits your goals,
            and we can customize the details after discussing your project.
          </p>
        </div>

        {/* Pricing Cards */}

        <div
          className="
        mt-16
        grid
        gap-8
        lg:grid-cols-3
        "
        >
          {plans.map((plan, index) => (
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
                delay: index * 0.15,
              }}
              className={`
              relative
              rounded-3xl
              border
              p-8
              ${
                plan.popular
                  ? "border-royal-blue bg-primary-navy text-white shadow-2xl scale-105"
                  : "border-border bg-white"
              }
              `}
            >
              {plan.popular && (
                <div
                  className="
                absolute
                -top-4
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-gold-accent
                px-5
                py-2
                text-sm
                font-bold
                text-primary-navy
                "
                >
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`
              text-2xl
              font-bold
              ${plan.popular ? "text-white" : "text-dark-text"}
              `}
              >
                {plan.name}
              </h3>

              <p
                className={`
              mt-4
              text-2xl
              font-bold
              ${plan.popular ? "text-gold-accent" : "text-royal-blue"}
              `}
              >
                {plan.price}
              </p>

              <p
                className={`
              mt-5
              text-sm
              leading-relaxed
              ${plan.popular ? "text-body-text" : "text-slate-600"}
              `}
              >
                {plan.description}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <Check
                      className="
                    mt-1
                    h-5
                    w-5
                    text-gold-accent
                    flex-shrink-0
                    "
                    />

                    <span
                      className={`
                    text-sm
                    ${plan.popular ? "text-body-text" : "text-slate-600"}
                    `}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`
                mt-10
                block
                rounded-lg
                px-6
                py-3
                text-center
                font-semibold
                transition

                ${
                  plan.popular
                    ? "bg-gold-accent text-primary-navy hover:bg-yellow-300"
                    : "bg-primary-navy text-white hover:bg-slate-800"
                }
                `}
              >
                {plan.button}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}

        <p
          className="
        mt-12
        text-center
        text-sm
        text-slate-500
        "
        >
          Need something different? Every project can be customized based on
          your specific business needs.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
