const About = () => {
  return (
    <section id="about" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h2 className="text-4xl font-bold mb-6">
            About Alilee Transformed
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Alilee Transformed is an empowerment platform helping people build
            sustainable livelihoods through practical skills, affordable DIY
            raw materials, entrepreneurship training, and innovative
            technology.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe every individual has the potential to create products,
            generate income, and transform their future with the right
            resources and support.
          </p>

        </div>

        <div>

          <img
            src="/images/about-training.jpg"
            alt="Training"
            className="rounded-3xl shadow-xl"
          />

        </div>

      </div>

    </section>
  );
};

export default About;