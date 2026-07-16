import { services } from "../../data/siteData";

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What We Offer
        </h2>

        <p className="text-center mt-4 text-gray-600">
          Everything you need to start and grow your own business.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;