import { courses } from "../../data/coursesData";

const TrainingPrograms = () => {
  return (
    <section id="training" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Our Training Programs
        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto">
          Learn practical skills that can help you start your own business,
          create employment and increase your income.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {courses.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">🎓</div>

              <h3 className="text-2xl font-bold text-blue-900">
                {program.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {program.description}
              </p>

              <a
                href="https://wa.me/254785687846"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Enquire
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TrainingPrograms;