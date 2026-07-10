import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img2 from "../../assets/images/restuarant.png";
import img3 from "../../assets/images/usher.png";
import img4 from "../../assets/images/modern.png";
import img5 from "../../assets/images/blog.png";


const projects = [
  {
    title: "Modern E-commerce Platform",
    industry: "E-commerce",
    image: img5,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    description:
      "A modern online store designed with a smooth shopping experience, responsive interface, and efficient product management.",
    live: "#",
    caseStudy: "#",
  },

  {
    title: "Business Landing Website",
    industry: "Business / Marketing",
    image: img2,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A high-converting business website created to improve online presence, build trust, and generate customer enquiries.",
    live: "#",
    caseStudy: "#",
  },

  {
    title: "Developer Portfolio Website",
    industry: "Personal Branding",
    image: img3,
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    description:
      "A professional portfolio platform focused on showcasing skills, projects, and creating strong personal branding.",
    live: "#",
    caseStudy: "#",
  },

  {
    title: "Developer Portfolio Website",
    industry: "Personal Branding",
    image: img4,
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    description:
      "A professional portfolio platform focused on showcasing skills, projects, and creating strong personal branding.",
    live: "#",
    caseStudy: "#",
  },
  {
    title: "Developer Portfolio Website",
    industry: "Personal Branding",
    image: img3,
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    description:
      "A professional portfolio platform focused on showcasing skills, projects, and creating strong personal branding.",
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
