const faqs = [
  {
    question: "Do I need experience?",
    answer: "No. Our training is beginner-friendly."
  },
  {
    question: "Do you provide raw materials?",
    answer: "Yes. We stock quality DIY materials and starter kits."
  },
  {
    question: "Can I start a business after training?",
    answer: "Yes. Our goal is to help you become self-employed."
  },
  {
    question: "Do you offer mentorship?",
    answer: "Yes. We continue supporting our trainees after graduation."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq) => (

          <div
            key={faq.question}
            className="mb-6 border rounded-xl p-6"
          >

            <h3 className="font-bold text-xl">
              {faq.question}
            </h3>

            <p className="mt-3 text-gray-600">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FAQ;