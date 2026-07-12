const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="uppercase tracking-widest text-yellow-300 font-semibold">
            Empower • Learn • Earn
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Alilee
            <span className="text-yellow-400"> Transformed</span>
          </h1>

          <h2 className="text-2xl mt-6 font-semibold">
            Jiajiri Kwa Kujitengenezea
          </h2>

          <p className="mt-8 text-xl leading-8 text-gray-200">
            We empower individuals with affordable DIY raw materials,
            practical skills training, business incubation, and AI-powered
            business support to help them start and grow sustainable businesses.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              Get Started
            </button>

            <button className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition">
              Explore Products
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800"
            alt="Entrepreneur"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;