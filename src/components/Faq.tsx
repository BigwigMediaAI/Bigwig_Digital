import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of digital marketing services including SEO, content marketing, social media management, PPC advertising, and website optimization.",
    },
    {
      question: "How can digital marketing help my business?",
      answer:
        "Digital marketing helps increase your online visibility, drive targeted traffic to your website, and build lasting customer relationships through data-driven strategies.",
    },
    {
      question: "Do you create custom strategies for each business?",
      answer:
        "Yes, we tailor our strategies to fit the unique needs and goals of each client, ensuring maximum impact and return on investment.",
    },
    {
      question: "Can you help improve my website's SEO?",
      answer:
        "Absolutely! Our team specializes in optimizing website structure, content, and keywords to boost your rankings on search engines and drive organic traffic.",
    },
    {
      question: "Do you offer social media management services?",
      answer:
        "Yes, we manage and optimize social media accounts to increase engagement, grow your audience, and drive traffic through organic and paid strategies.",
    },
    {
      question: "What is the process for starting a project with your agency?",
      answer:
        "Getting started is easy! Reach out to us for a consultation, and we’ll work with you to develop a custom digital marketing plan tailored to your business needs.",
    },
    {
      question: "How do you measure the success of your campaigns?",
      answer:
        "We track key performance indicators (KPIs) like website traffic, conversion rates, engagement, and ROI to measure and optimize the success of our campaigns.",
    },
    {
      question: "Do you provide analytics and reporting?",
      answer:
        "Yes, we provide detailed analytics and regular reports to track the progress of your campaigns and ensure you are always informed of the results.",
    },
  ];
  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full mx-auto px-6 md:px-16 py-6 ">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="md:max-w-5xl  mx-auto ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-sm mb-5 bg-gray-50"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
