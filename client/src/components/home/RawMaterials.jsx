import { materials } from "../../data/materialsData";

const RawMaterials = () => {
  return (
    <section
      id="materials"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            DIY Raw Materials
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We supply quality materials to help you start and grow your DIY business.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {materials.map((item) => (
            <div
              key={item}
              className="bg-blue-50 rounded-xl p-6 text-center shadow hover:bg-blue-900 hover:text-white transition"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RawMaterials;