const products = [
  "Candles",
  "Liquid Soap",
  "Bar Soap",
  "Plaster Flower Pots",
  "Decorative Trays",
  "Wall Décor",
  "Epoxy Resin Trays",
  "Jewellery",
  "Candle Holders",
  "Coasters",
  "Gift Boxes",
  "Home Accessories",
];

const Products = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            What Can You Make?
          </h2>

          <p className="mt-4 text-gray-600">
            Learn practical skills and create products people buy every day.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {products.map((product) => (

            <div
              key={product}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:bg-blue-900 hover:text-white transition"
            >
              {product}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Products;