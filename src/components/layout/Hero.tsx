import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "../../assets/images/portfolio heroImg.png"

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary-navy  to-[#071021]  min-h-screen flex items-center border-b border-b-primary-navy/50">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= Left Content ================= */}
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full
               border border-border bg-dark-text/40 px-4 py-2 my-6"
            >
              <Sparkles className="h-4 w-4 text-gold-accent" />

              <span className="text-sm font-medium text-body-text">
                Modern Websites, Real Results
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              I Build Websites That{" "}
              <span className="text-gold-accent">Help Businesses Grow</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-body-text"
            >
              I design and develop fast, modern, and mobile-friendly websites
              that build trust and generate more customers for your business.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center 
                gap-2 rounded-lg bg-gold-accent px-7 py-3 font-semibold
                 text-primary-navy transition hover:scale-105 hover:bg-yellow-300"
              >
                Let's Talk
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg
                 border border-border px-7 py-3 font-semibold text-white
                  transition hover:bg-dark-text"
              >
                View My Work
              </a>
            </motion.div>
          </div>

          {/* ================= Right Image ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={HeroImage}
              alt="Website Design Preview"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;