// import { CheckCircle, Code2, Layout, Rocket } from "lucide-react";
// import { motion } from "framer-motion";
// import myImage from "../../assets/images/me.jpeg"

// const highlights = [
//   {
//     icon: Code2,
//     text: "React, TypeScript & Next.js Development",
//   },
//   {
//     icon: Layout,
//     text: "Modern Responsive Website Design",
//   },
//   {
//     icon: Rocket,
//     text: "Fast Performance & Better User Experience",
//   },
// ];

// const About = () => {
//   return (
//     <section className="bg-white py-24">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative flex justify-center"
//           >
//             <div className="absolute h-72 w-72 rounded-full bg-royal-blue/10 blur-3xl" />

//             <img
//               src={myImage}
//               alt="Chima frontend developer"
//               className="relative z-10 w-full max-w-md rounded-3xl object-cover"
//             />

//             <div className="absolute bottom-6 left-6 z-20 rounded-xl bg-primary-navy px-5 py-4 shadow-xl">
//               <p className="text-sm text-body-text">Frontend Developer</p>

//               <p className="font-semibold text-white">
//                 Wordpress • React • TypeScript
//               </p>
//             </div>
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="rounded-full bg-light-gray px-4 py-2 text-sm font-semibold text-royal-blue">
//               ABOUT ME
//             </span>

//             <h2 className="mt-6 text-3xl font-bold text-dark-text md:text-5xl">
//               Building Digital Experiences That Help Businesses Grow
//             </h2>

//             <p className="mt-6 leading-relaxed text-slate-600">
//               I design and develop modern websites that help businesses create
//               trust, showcase their brand, and connect with more customers
//               online.
//             </p>

//             <div className="mt-8 space-y-4">
//               {highlights.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div key={index} className="flex items-center gap-3">
//                     <Icon className="h-5 w-5 text-royal-blue" />

//                     <p className="text-dark-text">{item.text}</p>
//                   </div>
//                 );
//               })}
//             </div>

//             <a
//               href="#contact"
//               className="mt-10 inline-flex rounded-lg bg-gold-accent px-7 py-3 font-semibold text-primary-navy transition hover:bg-yellow-300"
//             >
//               Let's Work Together
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { Code2, Layout, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import myImage from "../../assets/images/me.jpeg";

const highlights = [
  {
    icon: Code2,
    text: "React, TypeScript & Next.js Development",
  },
  {
    icon: Layout,
    text: "Modern Responsive Website Design",
  },
  {
    icon: Rocket,
    text: "Fast Performance & Better User Experience",
  },
];

const industries = [
  "Construction",
  "Healthcare",
  "Restaurants",
  "Law Firms",
  "Churches",
  "Real Estate",
  "Schools",
  "Beauty & Wellness",
  "Consultants",
  "Nonprofits",
];

const About = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-72 w-72 rounded-full bg-royal-blue/10 blur-3xl" />

            <img
              src={myImage}
              alt="Chima frontend developer"
              className="relative z-10 w-full max-w-md rounded-3xl object-cover"
            />

            <div className="absolute bottom-6 left-6 z-20 rounded-xl bg-primary-navy px-5 py-4 shadow-xl">
              <p className="text-sm text-body-text">Frontend Developer</p>

              <p className="font-semibold text-white">
                WordPress • React • TypeScript
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-light-gray px-4 py-2 text-sm font-semibold text-royal-blue">
              ABOUT ME
            </span>

            <h2 className="mt-6 text-3xl font-bold text-dark-text md:text-5xl">
              Building Digital Experiences That Help Businesses Grow
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600">
              I design and develop modern websites that help businesses create
              trust, showcase their brand, and connect with more customers
              online. My goal is to build websites that are not only visually
              appealing but also fast, user-friendly, and designed to support
              business growth.
            </p>

            {/* Highlights */}

            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-royal-blue" />

                    <p className="text-dark-text">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Industries */}

            <div className="mt-10">
              <h3 className="text-lg font-bold text-dark-text">
                Industries I Serve
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                I help businesses and organizations across different industries
                establish a strong online presence with professional websites
                tailored to their goals.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="
                    rounded-full
                    bg-light-gray
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-dark-text
                    transition
                    hover:bg-royal-blue
                    hover:text-white
                    "
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="
              mt-10
              inline-flex
              rounded-lg
              bg-gold-accent
              px-7
              py-3
              font-semibold
              text-primary-navy
              transition
              hover:bg-yellow-300
              "
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
