const categories = [
  "Plaster Crafts",
  "Silicone Moulds",
  "Epoxy Resin",
  "Candles",
  "Soap Making",
  "Leather Craft",
  "Fashion",
  "Jewellery",
  "Woodworking",
  "Laser Crafts",
  "Agribusiness",
  "Digital Products",
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          DIY Opportunities
        </h2>

        <div className="grid md:grid-cols-4 gap-5 mt-12">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl p-6 text-center shadow"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;