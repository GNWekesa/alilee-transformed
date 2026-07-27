const faqs = [
  {
    q: "Do I need experience?",
    a: "No. Our training is designed for complete beginners."
  },
  {
    q: "Do you provide materials?",
    a: "Yes. We supply quality DIY raw materials."
  },
  {
    q: "Can I start a business after training?",
    a: "Yes. That's our main goal."
  },
  {
    q: "How do I register?",
    a: "Simply contact us on WhatsApp."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.q}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="font-bold text-xl">
                {faq.q}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.a}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;