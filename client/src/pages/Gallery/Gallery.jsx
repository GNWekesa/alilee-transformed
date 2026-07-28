import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { galleryItems } from "../../data/galleryData";

const Gallery = () => {
  return (
    <>
      <Navbar />

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-extrabold">
            Our DIY Process
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Learn practical skills, discover business opportunities and explore
            the products you can create using Alilee Transformed raw materials
            and training.
          </p>

        </div>
      </section>

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {galleryItems.map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">

                  <h2 className="text-2xl font-bold text-blue-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.caption}
                  </p>

                  <ul className="mt-6 space-y-2 text-gray-700">

                    <li>✅ Practical Training</li>

                    <li>✅ Raw Materials Available</li>

                    <li>✅ Business Support</li>

                  </ul>

                  <a
                    href="https://wa.me/254785687846"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Book this Training
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Gallery;