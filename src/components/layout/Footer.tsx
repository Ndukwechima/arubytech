import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter, FaFacebook } from "react-icons/fa6";
import Logo from "./Logo";

const quickLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

const services = [
  "Landing Pages",
  "Business Websites",
  "Website Redesign",
  "WordPress Websites",
  "SEO Setup",
];

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white">
      <div
        className="
      container
      mx-auto
      px-6
      py-16
      lg:px-12
      "
      >
        <div
          className="
        grid
        gap-10
        md:grid-cols-2
        lg:grid-cols-4
        "
        >
          {/* Brand */}

          <div>
            <div>
              <Logo />
            </div>

            <p
              className="
            mt-5
            max-w-xs
            leading-relaxed
            text-body-text
            "
            >
              I create fast, modern, and responsive websites that help
              businesses build trust and grow online.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className="
            text-lg
            font-semibold
            "
            >
              Quick Links
            </h3>

            <ul
              className="
            mt-5
            space-y-3
            "
            >
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                    text-body-text
                    transition
                    hover:text-gold-accent
                    "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3
              className="
            text-lg
            font-semibold
            "
            >
              Services
            </h3>

            <ul
              className="
            mt-5
            space-y-3
            "
            >
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="
                    text-body-text
                    transition
                    hover:text-gold-accent
                    "
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3
              className="
            text-lg
            font-semibold
            "
            >
              Contact
            </h3>

            <div
              className="
            mt-5
            space-y-4
            "
            >
              <a
                href="mailto:hello@example.com"
                className="
                flex
                items-center
                gap-3
                text-body-text
                hover:text-gold-accent
                "
              >
                <Mail className="h-5 w-5" />
                hello@example.com
              </a>

              <a
                href="tel:+123456789"
                className="
                flex
                items-center
                gap-3
                text-body-text
                hover:text-gold-accent
                "
              >
                <Phone className="h-5 w-5" />
                +234 8106 7064 60
              </a>

              <p
                className="
                flex
                items-center
                gap-3
                text-body-text
                "
              >
                <MapPin className="h-5 w-5" />
                Nigeria
              </p>

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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div
        className="
      border-t
      border-border
      "
      >
        <div
          className="
        container
        mx-auto
        flex
        flex-col
        gap-4
        px-6
        py-6
        text-sm
        text-body-text
        md:flex-row
        md:items-center
        md:justify-between
        lg:px-12
        "
        >
          <p>© {new Date().getFullYear()} ArubyTech. All Rights Reserved.</p>

          <div
            className="
          flex
          gap-6
          "
          >
            <a
              href="#"
              className="
              hover:text-gold-accent
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
              hover:text-gold-accent
              "
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
