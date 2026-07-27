import { galleryItems } from "../../data/galleryData";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Products Made By Our Students
        </h2>

        <p className="text-center mt-5 text-gray-600">
          Every business starts with learning a practical skill.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {galleryItems.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
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