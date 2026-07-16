import { hero } from "../../data/siteData";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-blue-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          {hero.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl mt-6 text-yellow-400 font-bold"
        >
          {hero.subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-3xl text-xl leading-9"
        >
          {hero.description}
        </motion.p>

        <div className="mt-10 flex gap-4 flex-wrap">

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold">
            {hero.primaryButton}
          </button>

          <button className="border border-white px-8 py-4 rounded-xl">
            {hero.secondaryButton}
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;