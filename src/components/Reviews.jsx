
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      text: "The food was absolutely incredible! Every dish was bursting with flavor and the presentation was stunning. The service was top-notch and made our evening truly special.",
      author: "Sam Jillani",
      rating: 5
    },
    {
      text: "What a delightful experience! The ambiance was perfect, and the chef's special recommendations were spot-on. Will definitely be coming back for more.",
      author: "Laiba Khan",
      rating: 5
    },
    {
      text: "A hidden gem! The attention to detail in both food and service is remarkable. Their signature dishes are must-tries for anyone visiting.",
      author: "Nick",
      rating: 5
    },
    {
      text: "Outstanding dining experience from start to finish. The menu variety is excellent, and the staff's knowledge about each dish is impressive.",
      author: "Sam",
      rating: 5
    }
  ];

  return (
    <div className="py-12 px-4 md:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight mb-12">
        What Our Customers Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex items-center justify-between pb-2">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">&quot;{review.text}&quot;</p>
            </CardContent>
            <CardFooter className="flex items-center space-x-4">
              <div className="relative h-12 w-12">
                <img
                  src="/api/placeholder/48/48"
                  alt={review.author}
                  className="rounded-full object-cover shadow-md"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-black/10" />
              </div>
              <div>
                <p className="font-semibold text-green-600">{review.author}</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Join thousands of satisfied customers who love our food
        </p>
      </div>
    </div>
  );
};

export default Reviews;