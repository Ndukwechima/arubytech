import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "../../assets/images/cta.jpg";

const FinalCTA = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="
      relative
      min-h-137.5
      bg-cover
      bg-center
      bg-fixed
      flex
      items-center
      "
    >
      {/* Overlay */}
      <div
        className="
      absolute
      inset-0
      bg-primary-navy/80
      "
      />

      <div
        className="
      container
      relative
      mx-auto
      px-6
      lg:px-12
      "
      >
        <motion.div
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
            duration: 0.7,
          }}
          className="
          mx-auto
          max-w-3xl
          text-center
          "
        >
          {/* Small Badge */}
          <span
            className="
            inline-flex
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-2
            text-sm
            font-semibold
            text-gold-accent
            "
          >
            LET'S BUILD SOMETHING GREAT
          </span>

          {/* Heading */}
          <h2
            className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            text-white
            md:text-5xl
            lg:text-6xl
            "
          >
            Ready to Grow Your
            <span className="block text-gold-accent">Business Online?</span>
          </h2>

          {/* Description */}
          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-relaxed
            text-body-text
            "
          >
            Let's create a modern, fast, and professional website that builds
            trust, attracts customers, and helps your business grow.
          </p>

          {/* Buttons */}
          <div
            className="
            mt-10
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
            "
          >
            <a
              href="#contact"
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-gold-accent
              px-8
              py-4
              font-semibold
              text-primary-navy
              transition
              hover:bg-yellow-300
              "
            >
              Let's Build Your Website
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#contact"
              className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              border
              border-white/30
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-white/10
              "
            >
              Book a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
