import {
  FaTools,
  FaUsers,
  FaRobot,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTools />,
    title: "Affordable DIY Resources",
  },
  {
    icon: <FaUsers />,
    title: "Community Empowerment",
  },
  {
    icon: <FaLightbulb />,
    title: "Practical Skills",
  },
  {
    icon: <FaRobot />,
    title: "AI Business Support",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Alilee Transformed?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-14">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="shadow-lg rounded-xl p-8 text-center"
            >
              <div className="text-5xl text-blue-700 flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="font-bold text-xl">
                {feature.title}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;