const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          About Alilee
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-9 text-center max-w-4xl mx-auto">
          Alilee Transformed empowers aspiring entrepreneurs through practical,
          hands-on training, affordable DIY raw materials, business mentorship,
          and continuous support. Our mission is to help individuals build
          sustainable businesses by turning skills into income.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To empower people with practical skills, quality materials and
              business knowledge that lead to self-employment and economic
              independence.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become Africa's leading entrepreneurship and DIY innovation
              hub, creating thousands of successful small businesses.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Promise
            </h3>

            <p className="text-gray-600">
              We don't just train you—we guide, mentor and support your journey
              from learning a skill to building a profitable business.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;