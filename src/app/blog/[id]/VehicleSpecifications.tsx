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
  FaKey,
  FaWrench,
  FaBatteryHalf,
  FaBoxOpen,
  FaArrowAltCircleUp,
} from "react-icons/fa";

interface CarSpecs {
  modelYear: string;
  fuelType: string;
  engine: string;
  topSpeed: string;
  acceleration: string;
  price: string;
  transmission: string;
  drivetrain: string;
  fuelEfficiency: string;
  seatingCapacity: string;
  safetyRating: string;
  weight: string;
  colorOptions: string;
  warranty: string;
  maintenanceCost: string;
  bootSpace: string;
  groundClearance: string;
  batteryCapacity?: string;
}

interface SpecificationItem {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

interface SpecificationCardProps {
  title: string;
  icon: React.ReactNode;
  children: SpecificationItem[];
}

function SpecificationCard({ title, icon, children }: SpecificationCardProps) {
  return (
    <div className="h-full flex flex-col bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
      <div className="flex items-center mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-gray-100">
        <div className="p-2 sm:p-3 mr-2 sm:mr-3 rounded-md sm:rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm sm:shadow-md">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3 sm:space-y-4 flex-grow">
        {children.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex justify-between items-center group"
          >
            <span className="text-gray-600 flex items-center">
              <span
                className="p-1.5 sm:p-2 mr-2 sm:mr-3 rounded-md sm:rounded-lg bg-gray-50 text-blue-600 group-hover:bg-blue-50 transition-colors shadow-xs sm:shadow-sm"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-50 rounded-md sm:rounded-lg whitespace-nowrap">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function VehicleSpecifications({ carSpecs }: { carSpecs: CarSpecs }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl shadow-inner">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
          <FaCarSide className="mr-2 sm:mr-3 text-blue-600 w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Vehicle Specifications
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Card 1: Technical Details */}
          <SpecificationCard
            title="Technical Details"
            icon={
              <FaCogs className="w-4 h-4 sm:w-5 sm:h-5" aria-label="Technical Details Icon" />
            }
          >
            {[
              {
                icon: <FaTag className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Model Year",
                value: carSpecs.modelYear,
              },
              {
                icon: <FaGasPump className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Fuel Type",
                value: carSpecs.fuelType,
              },
              {
                icon: <FaCogs className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Engine",
                value: carSpecs.engine,
              },
              {
                icon: <FaOilCan className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Transmission",
                value: carSpecs.transmission,
              },
              {
                icon: <FaRoad className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Drivetrain",
                value: carSpecs.drivetrain,
              },
              {
                icon: <FaWeight className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Weight",
                value: carSpecs.weight,
              },
              {
                icon: <FaLeaf className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Fuel Efficiency",
                value: carSpecs.fuelEfficiency,
              },
            ]}
          </SpecificationCard>

          {/* Card 2: Performance & Features */}
          <SpecificationCard
            title="Performance & Features"
            icon={
              <FaTachometerAlt
                className="w-4 h-4 sm:w-5 sm:h-5"
                aria-label="Performance Icon"
              />
            }
          >
            {[
              {
                icon: (
                  <FaTachometerAlt className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                ),
                label: "Top Speed",
                value: carSpecs.topSpeed,
              },
              {
                icon: <FaBolt className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "0-60 Acceleration",
                value: carSpecs.acceleration,
              },
              {
                icon: <FaUsers className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Seating Capacity",
                value: carSpecs.seatingCapacity,
              },
              {
                icon: <FaShieldAlt className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Safety Rating",
                value: carSpecs.safetyRating,
              },
              {
                icon: <FaPalette className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Color Options",
                value: carSpecs.colorOptions,
              },
              {
                icon: <FaKey className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Warranty",
                value: carSpecs.warranty,
              },
              {
                icon: <FaTag className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />,
                label: "Starting Price",
                value: (
                  <span className="font-bold text-blue-600">
                    {carSpecs.price}
                  </span>
                ),
              },
            ]}
          </SpecificationCard>

          {/* Card 3: Additional Specifications */}
          <SpecificationCard
            title="Additional Specs"
            icon={
              <FaWrench
                className="w-4 h-4 sm:w-5 sm:h-5"
                aria-label="Additional Specifications Icon"
              />
            }
          >
            {[
              {
                icon: <FaWrench className="w-3 h-3 sm:w-4 sm:h-4" />,
                label: "Maintenance Cost",
                value: carSpecs.maintenanceCost,
              },
              {
                icon: <FaBoxOpen className="w-3 h-3 sm:w-4 sm:h-4" />,
                label: "Boot Space",
                value: carSpecs.bootSpace,
              },
              {
                icon: <FaArrowAltCircleUp className="w-3 h-3 sm:w-4 sm:h-4" />,
                label: "Ground Clearance",
                value: carSpecs.groundClearance,
              },
              ...(carSpecs.batteryCapacity
                ? [
                    {
                      icon: <FaBatteryHalf className="w-3 h-3 sm:w-4 sm:h-4" />,
                      label: "Battery Capacity",
                      value: carSpecs.batteryCapacity,
                    },
                  ]
                : []),
              {
                icon: <FaOilCan className="w-3 h-3 sm:w-4 sm:h-4" />,
                label: "Oil Change Interval",
                value:
                  carSpecs.fuelType === "Electric"
                    ? "Not Required"
                    : "10,000 miles",
              },
              {
                icon: <FaRoad className="w-3 h-3 sm:w-4 sm:h-4" />,
                label: "Turning Radius",
                value: carSpecs.fuelType === "Electric" ? "18.7 ft" : "19.4 ft",
              },
              {
                icon: <FaWeight className="w-3 h-3 sm:w-4 sm:h-4" />,
                label: "Payload Capacity",
                value:
                  carSpecs.fuelType === "Electric" ? "950 lbs" : "1,100 lbs",
              },
            ].slice(0, 7)}
          </SpecificationCard>
        </div>
      </div>
    </div>
  );
}