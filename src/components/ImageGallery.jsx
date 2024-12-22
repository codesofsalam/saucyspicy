const ImageGallery = () => {
  const images = [
    { id: 1, category: "Food" },
    { id: 2, category: "Interior" },
    { id: 3, category: "Dishes" },
    { id: 4, category: "Events" },
    { id: 5, category: "Kitchen" },
    { id: 6, category: "Dining" },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our culinary world and dining atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={`/api/placeholder/600/600`}
                alt={`Gallery image ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-lg font-semibold mb-2">
                    {image.category}
                  </p>
                  <div className="w-12 h-1 bg-orange-500 mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
