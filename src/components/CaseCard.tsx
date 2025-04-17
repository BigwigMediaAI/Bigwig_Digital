const CaseCard: React.FC = () => {
  const cases = [
    {
      image:
        "https://img.freepik.com/free-photo/people-tablet-with-bar-graph_1134-473.jpg?t=st=1734521827~exp=1734525427~hmac=a538c7ecac674ca88ab223133d3c932a78502f43944562a09b9eac8f82b860f6&w=900",
      title: "Driving 75% Growth in E-commerce",
      description:
        "We implemented a comprehensive SEO and performance marketing strategy for an e-commerce brand, boosting conversions by 75% and significantly increasing revenue.",
      tags: ["SEO", "Performance Marketing", "E-commerce"],
    },
    {
      image:
        "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063150.jpg?t=st=1734521679~exp=1734525279~hmac=62da27c16e954020d54a96e759573076fe3fa5f1d978970d95e0ca6db8fac276&w=900",
      title: "Social Media Engagement Growth",
      description:
        "For a fashion brand, we leveraged influencer marketing and compelling content to increase social media engagement and drive brand awareness from scratch.",
      tags: ["Social Media Management", "Influencer Marketing"],
    },
    {
      image:
        "https://img.freepik.com/premium-vector/viral-content-magnetic-attraction-people-communication_24908-2.jpg?w=740",
      title: "Scaling Lead Generation by 60%",
      description:
        "We boosted lead generation by 60% for a SaaS company by optimizing their website for SEO, running targeted ads, and delivering personalized content marketing strategies.",
      tags: ["SEO", "Lead Generation", "Content Marketing", "SaaS"],
    },
  ];

  // Define a mapping of tags to specific colors
  const tagColorMap: { [key: string]: string } = {
    "Organic growth": "bg-teal-200",
    Advertising: "bg-red-300",
    "Content creation": "bg-green-300",
    SEO: "bg-yellow-300",
    "Influencer Marketing": "bg-purple-300",
    "Lead Generation": "bg-blue-300",
    "Performance Marketing": "bg-pink-200",
    "Social Media Management": "bg-orange-300",
    "Brand Awareness": "bg-indigo-200",
    "Creative Innovations": "bg-gray-200",
  };

  return (
    <div className="p-8 min-h-screen w-11/12 mx-auto">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
        Why Bigwig?
      </h1>
      <p className="text-center mb-10 text-[#4a5568] font-base">
        Let us be your <strong>3rd Eye & 6th Sense</strong> and make your end
        results to be nothing but <strong>ROI</strong> spectacular.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cases.map((caseItem, index) => (
          <div key={index}>
            <img
              src={caseItem.image}
              alt={caseItem.title}
              className="w-full h-64 object-cover rounded-3xl transition-transform duration-300 hover:rotate-3 hover:scale-105 hover:shadow-2xl"
            />

            <div className="p-4">
              <h3 className="text-md md:text-xl font-semibold text-gray-900">
                {caseItem.title}
              </h3>
              <hr className="my-3 border-t-2" />
              <p className="text-gray-600 mt-2 text-sm md:text-md">
                {caseItem.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {caseItem.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-sm md:text-md font-medium px-4 py-2 rounded-full ${
                      tagColorMap[tag] || "bg-gray-200"
                    } text-gray-700`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseCard;
