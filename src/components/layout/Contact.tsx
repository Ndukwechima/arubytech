import { Mail, Phone, MapPin, } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter, FaFacebook } from "react-icons/fa6";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <section className="bg-primary-navy py-24">
        <div className="container mx-auto px-6 lg:px-12 ">
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
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
              CONTACT ME
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
              Let's Build Something
              <span className="text-gold-accent"> Amazing Together</span>
            </h2>

            <p className="mt-5 text-body-text">
              Have a project in mind? Send me a message and let's discuss how I
              can help your business grow online.
            </p>
          </div>

          <div
            className="
        mt-16
        grid
        gap-12
        lg:grid-cols-2
        "
          >
            {/* Contact Details */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <h3
                className="
              text-2xl
              font-bold
              text-white
              "
              >
                Get In Touch
              </h3>

              <p
                className="
              mt-4
              leading-relaxed
              text-body-text
              "
              >
                Whether you need a new website, redesign, optimization, or
                ongoing support, I would love to hear about your project.
              </p>

              <div
                className="
            mt-8
            space-y-5
            "
              >
                <div className="flex gap-4">
                  <Mail className="text-gold-accent" />

                  <p className="text-body-text">hello@yourdomain.com</p>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-gold-accent" />

                  <p className="text-body-text">+234 XXX XXX XXXX</p>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-gold-accent" />

                  <p className="text-body-text">Nigeria</p>
                </div>
              </div>

              {/* Social */}

              <div
                className="
            mt-10
            flex
            gap-4
            "
              >
                {[FaLinkedin, FaGithub, FaXTwitter, FaFacebook].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition
                  hover:bg-gold-accent
                  hover:text-primary-navy
                  "
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                )}
              </div>
            </motion.div>

            {/* Form */}

            <motion.form
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
            rounded-3xl
            bg-white
            p-8
            shadow-2xl
            "
            >
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                w-full
                rounded-lg
                border
                border-border
                px-4
                py-3
                outline-none
                focus:border-royal-blue
                "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                w-full
                rounded-lg
                border
                border-border
                px-4
                py-3
                outline-none
                focus:border-royal-blue
                "
                />

                {/* <input
                  type="text"
                  placeholder="Service Needed"
                  className="
                w-full
                rounded-lg
                border
                border-border
                px-4
                py-3
                outline-none
                focus:border-royal-blue
                "
                /> */}

                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="
                w-full
                rounded-lg
                border
                border-border
                px-4
                py-3
                outline-none
                focus:border-royal-blue
                "
                />

                <button
                  type="submit"
                  className="
                w-full
                rounded-lg
                bg-gold-accent
                py-3
                font-semibold
                text-primary-navy
                transition
                hover:bg-yellow-300
                "
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      <div className="border-b border-border"></div>
    </section>
  );
};

export default Contact;
