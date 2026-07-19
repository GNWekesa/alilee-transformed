import { courses } from "../../data/coursesData";

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our Training Programs
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Practical hands-on training designed to help you start earning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((course) => (

            <div
              key={course.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
            >

              <h3 className="text-2xl font-bold mb-4">
                {course.title}
              </h3>

              <p className="text-gray-600">
                {course.description}
              </p>

              <button className="mt-6 bg-blue-800 text-white px-5 py-3 rounded-lg">
                Learn More
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Courses;