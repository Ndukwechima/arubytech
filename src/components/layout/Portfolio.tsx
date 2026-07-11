import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/real-estate.png";
import img2 from "../../assets/images/skincare.png";
import img3 from "../../assets/images/fitness.png";
import img4 from "../../assets/images/usher.png";
import img5 from "../../assets/images/hungsmeal.png";
import img6 from "../../assets/images/portfolio.png";
import img7 from "../../assets/images/vitaboost.png";



const projects = [
  {
    title: "Real Estate Landing Page",
    industry: "Real Estate",
    image: img1,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    description:
      "A high-converting real estate website featuring property highlights, agent information, customer testimonials, and clear call-to-action sections to increase inquiries and bookings.",
    live: "#",
    caseStudy: "#",
  },

  {
    title: "Lumora Skincare Landing Page",
    industry: "Beauty & Skincare",
    image: img2,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "A clean and visually engaging landing page designed to highlight Lumora's skincare products, communicate the brand's values, and encourage visitors to explore the product collection.",
    live: "#",
    caseStudy: "#",
  },

  {
    title: "RyanFitness Landing Page",
    industry: "Personal Fitness & Coaching",
    image: img3,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "A conversion-focused landing page built for a personal fitness trainer to attract new clients through compelling service highlights, success stories, and clear calls to action for booking one-on-one coaching sessions.",
    live: "#",
    caseStudy: "#",
  },

  {
    title: "Business Landing Website",
    industry: "Business / Marketing",
    image: img4,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A high-converting business website created to improve online presence, build trust, and generate customer enquiries.",
    live: "#",
    caseStudy: "#",
  },

  {
    title: "HungsMeal Hotel Landing Page",
    industry: "Hospitality",
    image: img5,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "A modern hotel landing page designed to showcase comfortable accommodations, premium amenities, and exceptional guest experiences while encouraging visitors to book their stay with confidence.",
    live: "#",
    caseStudy: "#",
  },

  {
    title: "Web Designer & Developer Portfolio Website",
    industry: "Personal Branding",
    image: img6,
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    description:
      "A professional portfolio platform focused on showcasing skills, projects, and creating strong personal branding.",
    live: "#",
    caseStudy: "#",
  },
  {
    title: "VitaBoost Landing Page",
    industry: "Health & Wellness",
    image: img7,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "A high-converting wellness landing page built to highlight VitaBoost's value proposition, showcase product benefits, build credibility through testimonials, and drive customer engagement with strategic calls to action.",
    live: "#",
    caseStudy: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-light-gray py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-royal-blue shadow-sm">
            MY PORTFOLIO
          </span>

          <h2 className="mt-6 text-4xl font-bold text-dark-text md:text-5xl">
            Projects That Show
            <span className="text-royal-blue"> What I Can Build</span>
          </h2>

          <p className="mt-5 text-slate-600">
            A collection of websites and applications designed with modern
            technologies, strong user experience, and business goals in mind.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-20 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className='grid items-center gap-12 lg:grid-cols-2'
               
            >
              {/* Screenshot */}
              <div className="group overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  transition
                  duration-500
                  group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div>
                <span
                  className="
                inline-block
                rounded-full
                bg-royal-blue/10
                px-4
                py-2
                text-sm
                font-semibold
                text-royal-blue
                "
                >
                  {project.industry}
                </span>

                <h3
                  className="
                mt-5
                text-3xl
                font-bold
                text-dark-text
                "
                >
                  {project.title}
                </h3>

                {/* Technologies */}

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                      rounded-full
                      bg-white
                      px-4
                      py-2
                      text-sm
                      text-slate-600
                      shadow-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p
                  className="
                mt-6
                leading-relaxed
                text-slate-600
                "
                >
                  {project.description}
                </p>

                {/* Buttons */}

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-royal-blue
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    "
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href={project.caseStudy}
                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-border
                    px-6
                    py-3
                    font-semibold
                    text-dark-text
                    transition
                    hover:bg-white
                    "
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
