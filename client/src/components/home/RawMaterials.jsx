import { materials } from "../../data/materialsData";

const RawMaterials = () => {
  return (
    <section id="materials" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          DIY Raw Materials
        </h2>

        <p className="text-center mt-5 text-gray-600">
          Everything you need to start producing quality products.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {materials.map((item) => (

            <div
              key={item}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
            >
              <div className="text-5xl">
                📦
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item}
              </h3>

              <a
                href="https://wa.me/254785687846"
                target="_blank"
                className="inline-block mt-8 text-blue-900 font-bold"
              >
                Request Quotation →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default RawMaterials;