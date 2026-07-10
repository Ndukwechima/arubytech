import { Check, X, AlertCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  "No website for your business",
  "An outdated website that looks unprofessional",
  "A slow website that frustrates visitors",
  "A website that doesn't bring customers",
  "A website that isn't mobile-friendly",
];

const solutions = [
  "Modern websites that build trust",
  "Fast websites optimized for performance",
  "Mobile-friendly experiences on every device",
  "SEO-ready websites built for visibility",
  "Easy-to-manage websites for your business",
];

const ProblemSolution = () => {
  return (
    <section className="bg-light-gray py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-royal-blue" />

            <span className="text-sm font-medium text-dark-text">
              Website Challenges & Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl md:text-4xl font-bold text-dark-text"
          >
            Is Your Website Helping Your Business Grow?
          </motion.h2>

          <p className="mt-4 text-primary-navy">
            Many businesses lose customers because their website is slow,
            outdated, or doesn't clearly communicate their value.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-24 md:mt-40 grid gap-8 lg:grid-cols-2">
          {/* Problems Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-lg border border-gold-accent"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>

              <h3 className="text-2xl font-bold text-dark-text">
                Problems You Might Face
              </h3>
            </div>

            <div className="space-y-5">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>

                  <p className="text-primary-navy">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="rounded-3xl bg-primary-navy p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-accent">
                <Check className="h-6 w-6 text-primary-navy" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                How I Help You Grow
              </h3>
            </div>

            <div className="space-y-5">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-gold-accent" />
                  </div>

                  <p className="text-body-text">{solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
