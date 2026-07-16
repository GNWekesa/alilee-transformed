import { categories } from "../../data/siteData";

const Categories = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          DIY Business Opportunities
        </h2>

        <p className="text-center mt-4 text-gray-600">
          Learn practical skills and start earning.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow p-5 text-center hover:bg-blue-800 hover:text-white transition"
            >
              {category}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;