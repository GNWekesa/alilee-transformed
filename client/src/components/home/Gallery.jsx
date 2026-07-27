import { galleryItems } from "../../data/galleryData";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Our DIY Process
        </h2>

        <p className="text-center mt-5 text-gray-600">
          Explore the practical skills, products and entrepreneurship opportunities offered through Alilee Transformed.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {galleryItems.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >

              <img
  src="/gallery/candle-making.jpg"
  alt="test"
  className="h-72 w-full object-cover border-4 border-red-500"
/>

              <div className="p-6">

                <h3 className="text-xl font-bold text-blue-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {item.caption}
              </p>

              <a
                href="https://wa.me/254785687846"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
              >
                Enquire on WhatsApp
              </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;