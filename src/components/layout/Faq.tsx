import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a website project take?",
    answer:
      "The timeline depends on the size and complexity of the project. A simple landing page can take 1-2 weeks, while larger business websites may take several weeks. After discussing your requirements, I will provide a clear timeline.",
  },

  {
    question: "How much does a website cost?",
    answer:
      "Every website is different, so pricing depends on your goals, features, and requirements. My packages start from a base price, and I customize the solution based on your business needs.",
  },

  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. I help businesses transform outdated websites into modern, fast, mobile-friendly experiences that better represent their brand and improve user experience.",
  },

  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every website I build is responsive and optimized to provide a smooth experience across mobile phones, tablets, and desktop devices.",
  },

  {
    question: "Can you maintain my website after launch?",
    answer:
      "Yes. I offer website maintenance services including updates, improvements, performance checks, and technical support to keep your website running smoothly.",
  },

  {
    question: "Can you help me buy hosting and set up my domain?",
    answer:
      "Yes. I can guide you through choosing the right hosting provider, purchasing a domain, connecting everything, and making sure your website goes live properly.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
            <HelpCircle className="h-4 w-4" />
            FAQ
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
            Frequently Asked
            <span className="text-royal-blue"> Questions</span>
          </h2>

          <p className="mt-5 text-slate-600">
            Everything you need to know before starting your website project.
            Can't find your answer? Feel free to contact me.
          </p>
        </div>

        {/* FAQ List */}

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-white
                "
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                  "
                >
                  <span
                    className="
                  pr-6
                  font-semibold
                  text-dark-text
                  "
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                    h-5
                    w-5
                    text-royal-blue
                    transition-transform
                    ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <p
                        className="
                      border-t
                      border-border
                      px-6
                      py-5
                      text-sm
                      leading-relaxed
                      text-slate-600
                      "
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      
      </div>
    </section>
  );
};

export default FAQ;
