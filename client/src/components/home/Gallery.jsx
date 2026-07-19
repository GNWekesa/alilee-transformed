import { galleryItems } from "../../data/galleryData";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            What You Can Create
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Explore some of the products our trainees learn to make.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;