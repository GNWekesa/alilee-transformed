const services = [
  "DIY Raw Materials",
  "Business Training",
  "Starter Kits",
  "Plaster & Silicone Mould Crafts",
  "Resin & Epoxy Crafts",
  "Soap & Candle Making",
  "AI Business Advisor",
  "Marketplace",
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What We Offer
        </h2>

        <p className="text-center mt-4 text-gray-600">
          Everything you need to start your own income-generating business.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-14">
          {services.map((service) => (
            <div
              key={service}
              className="p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;