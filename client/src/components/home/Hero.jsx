import { hero } from "../../data/siteData";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            {hero.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-400 text-2xl mt-6 font-bold"
          >
            {hero.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg leading-8 text-gray-100"
          >
            {hero.description}
          </motion.p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="https://wa.me/254785687846"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-bold transition"
            >
              Book Training
            </a>

            <a
              href="#training"
              className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition"
            >
              View Programs
            </a>

          </div>

        </div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/hero.jpg"
            alt="Alilee Training"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;