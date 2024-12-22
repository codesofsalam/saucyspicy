import { Quote } from "lucide-react";

const About = () => {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "50+", label: "Team Members" },
    { value: "1000+", label: "Happy Customers" },
    { value: "100+", label: "Special Dishes" },
  ];

  const reviews = [
    {
      text: "The most amazing culinary experience I've ever had. The attention to detail is remarkable.",
      author: "Sarah Johnson",
      role: "Food Critic",
    },
    {
      text: "A perfect blend of traditional and modern cuisine. Every dish tells a story.",
      author: "Michael Chen",
      role: "Regular Customer",
    },
    {
      text: "The atmosphere and service are as exceptional as the food. A true gem.",
      author: "Emily Davis",
      role: "Food Blogger",
    },
  ];

  const galleryImages = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-orange-100 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            A journey of passion, flavor, and tradition
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-gray-600 leading-relaxed mb-8">
              Our journey began with a simple passion for exceptional food and
              memorable dining experiences. What started as a small family
              kitchen has grown into a beloved culinary destination, where
              traditional recipes meet modern innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <img
                src="/about.jpg"
                alt="Our kitchen"
                className="rounded-xl shadow-lg object-cover h-full"
              />
              <img
                src="/about1.jpg"
                alt="Our team"
                className="rounded-xl shadow-lg object-cover h-full"
              />
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Every dish we serve is a reflection of our commitment to quality,
              creativity, and the joy of sharing good food with others. Our
              chefs combine years of expertise with the freshest local
              ingredients to create unforgettable culinary experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What People Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <Quote className="text-orange-500 mb-4" size={32} />
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
