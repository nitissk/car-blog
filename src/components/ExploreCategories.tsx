import {
  FaCar,
  FaTools,
  FaTachometerAlt,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

interface CategoryCard {
  title: string;
  description: string;
  image: string;
}

export const categoryCards = [
  {
    title: "Car Reviews",
    description:
      "Get in-depth reviews of the latest car models, including performance tests and interior quality assessments. Our expert reviewers provide comprehensive analysis.",
    image:
      "https://img.freepik.com/free-vector/customers-like-video-with-experts-modern-car-review-with-rating-stars-car-review-video-test-drive-channel-auto-video-advertising-concept_335657-2249.jpg?semt=ais_hybrid&w=740",
  },
  {
    title: "Car Maintenance",
    description:
      "Learn essential car maintenance tips to keep your vehicle running smoothly. We cover oil changes, tire rotations, and other upkeep to extend your car's lifespan.",
    image:
      "https://static.vecteezy.com/system/resources/previews/007/784/311/non_2x/car-maintenance-illustration-concept-vector.jpg",
  },
  {
    title: "Car Modification",
    description:
      "Explore car modifications with our guides on performance upgrades and aesthetic enhancements. Boost horsepower or personalize your ride with our expertise.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdA5_su4c3iV63O94RL4NR3pz0XXz_ZzgAg&s",
  },
  {
    title: "Driving Tips",
    description:
      "Improve your driving with expert advice on defensive techniques and fuel-efficient habits. Become a safer, more confident driver while saving money.",
    image:
      "https://az-ci-afde-prd-msds-01-b3emdzgtgackhzfw.z01.azurefd.net/-/media/feature/maruti-driving-school/blog/driving-tips/5-car-driving-tips-rev.png?rev=4f78d5327baf452baa810558a72dac04&h=377&w=842&la=en&hash=FCA5673B24F1B3B44CC9876F30DD3E55",
  },
];

export function ExploreCategories({
  categoryCards,
}: {
  categoryCards: CategoryCard[];
}) {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore <span className="text-blue-600">Our</span> Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categoryCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative h-60 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5 text-center relative z-10">
                {/* Icon Badge - Added z-20 to ensure it's above everything */}
                <div className="flex justify-center -mt-12 mb-4 z-20 relative">
                  <div className="w-16 h-16 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center text-blue-600 text-2xl z-20">
                    {index === 0 && <FaCar className="text-2xl" />}
                    {index === 1 && <FaTools className="text-2xl" />}
                    {index === 2 && <FaTachometerAlt className="text-2xl" />}
                    {index === 3 && <FaGraduationCap className="text-2xl" />}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                  {card.description}
                </p>

                {/* Button */}
                <div className="flex justify-center">
                  <button className="inline-flex items-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors duration-200 shadow-sm">
                    Explore
                    <FaArrowRight className="ml-2 text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
