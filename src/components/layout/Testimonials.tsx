import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import img from '../../assets/images/avatar.jpg'
import img2 from "../../assets/images/alex.jpg";
import img3 from "../../assets/images/testi.png";


import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    company: "Creative Studio",
    image: img,
    review:
      "Working with Chima was a great experience. He created a modern website that perfectly represented my brand and helped me attract more customers.",
  },

  {
    name: "Michael Brown",
    role: "Founder",
    company: "Tech Solutions",
    image: img2,
    review:
      "The website was fast, professional, and exactly what my business needed. Communication was clear throughout the entire process.",
  },

  {
    name: "David Williams",
    role: "Entrepreneur",
    company: "Growth Hub",
    image: img3,
    review:
      "Chima understood my vision and transformed my ideas into a beautiful website. I highly recommend his services.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-primary-navy py-24">
      <div className="container mx-auto px-6 lg:px-12">
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
            TESTIMONIALS
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
            What Clients Say About
            <span className="text-gold-accent"> My Work</span>
          </h2>

          <p
            className="
          mt-5
          text-body-text
          "
          >
            Building websites is not just about code. It is about creating
            solutions that help businesses succeed.
          </p>
        </div>

        {/* Carousel */}

        <motion.div
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
          className="mx-auto mt-16 max-w-4xl"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop
            spaceBetween={30}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                  rounded-3xl
                  bg-white
                  p-8
                  md:p-12
                  shadow-2xl
                  "
                >
                  {/* Quote Icon */}

                  <Quote
                    className="
                    h-12
                    w-12
                    text-royal-blue
                    "
                  />

                  {/* Review */}

                  <p
                    className="
                    mt-6
                    text-lg
                    leading-relaxed
                    text-slate-600
                    "
                  >
                    "{testimonial.review}"
                  </p>

                  {/* Rating */}

                  <div
                    className="
                  mt-6
                  flex
                  gap-1
                  "
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="
                        h-5
                        w-5
                        fill-gold-accent
                        text-gold-accent
                        "
                      />
                    ))}
                  </div>

                  {/* Client */}

                  <div
                    className="
                    mt-8
                    flex
                    items-center
                    gap-4
                    "
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="
                      h-14
                      w-14
                      rounded-full
                      object-cover
                      "
                    />

                    <div>
                      <h3
                        className="
                        font-bold
                        text-dark-text
                        "
                      >
                        {testimonial.name}
                      </h3>

                      <p
                        className="
                        text-sm
                        text-slate-500
                        "
                      >
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
