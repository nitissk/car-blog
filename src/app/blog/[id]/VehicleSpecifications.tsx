import { 
  FaCarSide, 
  FaCogs, 
  FaTachometerAlt, 
  FaBolt, 
  FaTag, 
  FaGasPump, 
  FaOilCan, 
  FaWeight, 
  FaRoad, 
  FaShieldAlt, 
  FaPalette, 
  FaUsers, 
  FaLeaf, 
  FaKey 
} from "react-icons/fa";

interface CarSpecs {
  warranty: React.ReactNode;
  transmission: React.ReactNode;
  drivetrain: React.ReactNode;
  fuelEfficiency: React.ReactNode;
  colorOptions: React.ReactNode;
  weight: React.ReactNode;
  safetyRating: React.ReactNode;
  seatingCapacity: React.ReactNode;
  modelYear: string;
  fuelType: string;
  engine: string;
  topSpeed: string;
  acceleration: string;
  price: string;
}

export function VehicleSpecifications({ carSpecs }: { carSpecs: CarSpecs }) {
  return (
    <div className="p-8 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <FaCarSide className="mr-3 text-blue-600" />
        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Vehicle Specifications
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-5 pb-3 border-b border-blue-50">
            <div className="p-2 mr-3 rounded-lg bg-blue-100 text-blue-600">
              <FaCogs className="text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Technical Details
            </h3>
          </div>

          <ul className="space-y-4">
            {[
              { icon: <FaTag />, label: "Model Year", value: carSpecs.modelYear },
              { icon: <FaGasPump />, label: "Fuel Type", value: carSpecs.fuelType },
              { icon: <FaCogs />, label: "Engine", value: carSpecs.engine },
              { icon: <FaOilCan />, label: "Transmission", value: carSpecs.transmission },
              { icon: <FaRoad />, label: "Drivetrain", value: carSpecs.drivetrain },
              { icon: <FaWeight />, label: "Weight", value: carSpecs.weight },
              { icon: <FaLeaf />, label: "Fuel Efficiency", value: carSpecs.fuelEfficiency },
            ].map((item, index) => (
              <li key={index} className="flex justify-between items-center group">
                <span className="text-gray-600 flex items-center">
                  <span className="p-2 mr-3 rounded-md bg-blue-50 text-blue-500 group-hover:bg-blue-100 transition-colors">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
                <span className="font-medium text-gray-800 px-3 py-1 bg-gray-50 rounded-md">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-5 pb-3 border-b border-blue-50">
            <div className="p-2 mr-3 rounded-lg bg-blue-100 text-blue-600">
              <FaTachometerAlt className="text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Performance & Features
            </h3>
          </div>

          <ul className="space-y-4">
            {[
              { icon: <FaTachometerAlt />, label: "Top Speed", value: carSpecs.topSpeed },
              { icon: <FaBolt />, label: "0-60 Acceleration", value: carSpecs.acceleration },
              { icon: <FaUsers />, label: "Seating Capacity", value: carSpecs.seatingCapacity },
              { icon: <FaShieldAlt />, label: "Safety Rating", value: carSpecs.safetyRating },
              { icon: <FaPalette />, label: "Color Options", value: carSpecs.colorOptions },
              { icon: <FaKey />, label: "Warranty", value: carSpecs.warranty },
              { 
                icon: <FaTag />, 
                label: "Starting Price", 
                value: <span className="font-bold text-blue-600">{carSpecs.price}</span> 
              },
            ].map((item, index) => (
              <li key={index} className="flex justify-between items-center group">
                <span className="text-gray-600 flex items-center">
                  <span className="p-2 mr-3 rounded-md bg-blue-50 text-blue-500 group-hover:bg-blue-100 transition-colors">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
                <span className="font-medium text-gray-800 px-3 py-1 bg-gray-50 rounded-md">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}