import { MapPin, Clock, Calendar } from "lucide-react";

const ContactInfo = () => {
  const openingHours = [
    { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { days: "Saturday - Sunday", hours: "10:00 AM - 3:00 PM" },
  ];

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg max-w-md">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-orange-600" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">Where to Find Us</h2>
        </div>
        <p className="text-gray-600 text-lg ml-9">Karachi</p>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Clock className="text-orange-600" size={24} />
          <h3 className="text-2xl font-bold text-gray-900">Opening Hours</h3>
        </div>
        <div className="space-y-3 ml-9">
          {openingHours.map((schedule, index) => (
            <div key={index} className="flex items-center gap-4">
              <Calendar className="text-gray-400" size={16} />
              <div>
                <p className="text-gray-700 font-medium">{schedule.days}</p>
                <p className="text-gray-600">{schedule.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
