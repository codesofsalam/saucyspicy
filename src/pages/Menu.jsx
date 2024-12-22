import breakfastBg from "../utils/images/breakfast.jpg";
import lunchBg from "../utils/images/lunch.jpg";
import dinnerBg from "../utils/images/dinner.jpg";
import dessertBg from "../utils/images/dessert.jpg";

const Menu = () => {
  const menuSections = [
    {
      title: "Breakfast",
      items: [
        { id: 1, name: "English Breakfast", description: "Sausage, tomato, mushrooms, eggs", price: "$12" },
        { id: 2, name: "Avocado Toast", description: "Avocado, onion, tomatoes, poached egg, bread", price: "$8" },
        { id: 3, name: "Breakfast Burrito", description: "Cheese, potatoes, tortilla", price: "$11" },
      ],
      bgColor: "bg-white",
      textColor: "text-gray-900",
      bgImage: breakfastBg, // Add Breakfast specific image
    },
    {
      title: "Lunch",
      items: [
        { id: 1, name: "Lunch Special", description: "Sausage, tomato, mushrooms, eggs", price: "$12" },
        { id: 2, name: "Avocado Toast", description: "Avocado, onion, tomatoes, poached egg, bread", price: "$8" },
        { id: 3, name: "Burrito", description: "Cheese, potatoes, tortilla", price: "$11" },
      ],
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      bgImage: lunchBg, // Add Lunch specific image
    },
    {
      title: "Dinner",
      items: [
        { id: 1, name: "Dinner Delight", description: "Sausage, tomato, mushrooms, eggs", price: "$12" },
        { id: 2, name: "Evening Toast", description: "Avocado, onion, tomatoes, poached egg, bread", price: "$8" },
        { id: 3, name: "Evening Burrito", description: "Cheese, potatoes, tortilla", price: "$11" },
      ],
      bgColor: "bg-white",
      textColor: "text-gray-900",
      bgImage: dinnerBg, // Add Dinner specific image
    },
    {
      title: "Dessert",
      items: [
        { id: 1, name: "Sweet Delight", description: "Sausage, tomato, mushrooms, eggs", price: "$12" },
        { id: 2, name: "Fruit Paradise", description: "Avocado, onion, tomatoes, poached egg, bread", price: "$8" },
        { id: 3, name: "Ice Cream Dream", description: "Cheese, potatoes, tortilla", price: "$11" },
      ],
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      bgImage: dessertBg, // Add Dessert specific image
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-100 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, prepared with love and the finest ingredients
          </p>
        </div>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section) => (
        <section key={section.title} className={`${section.bgColor} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-orange-600">
                {section.title}
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Menu Items */}
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-xl font-bold text-orange-600">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={section.bgImage}
                    alt={`${section.title} dishes`}
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;
