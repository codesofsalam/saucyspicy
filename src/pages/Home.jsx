import { ChevronRight, Clock, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const foodItems = [
    { name: "English Breakfast", price: 12 },
    { name: "Spicy Beef", price: 15 },
    { name: "Spaghetti Bolognese", price: 10 },
  ];

  const drinkItems = [
    { name: "Coffee", price: 2 },
    { name: "Juice", price: 1 },
    { name: "Spirits", price: 5 },
  ];

  return (
    <div className="w-full">
      <header
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/saucy.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl font-semibold text-black mb-2">Welcome To</h2>
          <h1 className="text-6xl font-bold text-black mb-8">Saucy Spicy</h1>
          <Link to="/menu">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors duration-300">
              View Our Menu
            </button>
          </Link>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/about.jpg"
              alt="Restaurant ambiance"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              At Saucy Spicy, we serve an unforgettable culinary experience with
              bold flavors and a cozy atmosphere. Our menu combines the finest
              ingredients to create dishes that are both comforting and
              exciting, perfect for every palate. Join us and discover why our
              food is as vibrant as our passion for cooking!
            </p>
            <button className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              <Link to="/menu" className="flex items-center gap-2">
                Learn More <ChevronRight size={20} />
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Favorites
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-center mb-8">Food</h3>
              <div className="space-y-6">
                {foodItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-700 pb-4"
                  >
                    <span className="text-xl">{item.name}</span>
                    <span className="text-xl text-orange-600">
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-center mb-8">
                Drinks
              </h3>
              <div className="space-y-6">
                {drinkItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-700 pb-4"
                  >
                    <span className="text-xl">{item.name}</span>
                    <span className="text-xl text-orange-600">
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-orange-600" />
                <span className="text-gray-600">+923300000000</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-orange-600" />
                <span className="text-gray-600">Karachi</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-orange-600" />
                <span className="text-gray-600">
                  Mon-Sun: 9:00 AM - 11:00 PM
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/contact.jpg"
              alt="Restaurant exterior"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
