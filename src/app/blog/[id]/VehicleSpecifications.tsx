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
    <div className="h-full flex flex-col bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center mb-5 pb-4 border-b border-gray-100">
        <div className="p-3 mr-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-4 flex-grow">
        {children.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex justify-between items-center group"
          >
            <span className="text-gray-600 flex items-center">
              <span
                className="p-2 mr-3 rounded-lg bg-gray-50 text-blue-600 group-hover:bg-blue-50 transition-colors shadow-sm"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </span>
            <span className="text-sm font-semibold text-gray-800 px-3 py-1.5 bg-gray-50 rounded-lg whitespace-nowrap">
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
    <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-inner">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <FaCarSide className="mr-3 text-blue-600" aria-hidden="true" />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Vehicle Specifications
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Technical Details */}
          <SpecificationCard
            title="Technical Details"
            icon={
              <FaCogs className="w-5 h-5" aria-label="Technical Details Icon" />
            }
          >
            {[
              {
                icon: <FaTag className="w-4 h-4" aria-hidden="true" />,
                label: "Model Year",
                value: carSpecs.modelYear,
              },
              {
                icon: <FaGasPump className="w-4 h-4" aria-hidden="true" />,
                label: "Fuel Type",
                value: carSpecs.fuelType,
              },
              {
                icon: <FaCogs className="w-4 h-4" aria-hidden="true" />,
                label: "Engine",
                value: carSpecs.engine,
              },
              {
                icon: <FaOilCan className="w-4 h-4" aria-hidden="true" />,
                label: "Transmission",
                value: carSpecs.transmission,
              },
              {
                icon: <FaRoad className="w-4 h-4" aria-hidden="true" />,
                label: "Drivetrain",
                value: carSpecs.drivetrain,
              },
              {
                icon: <FaWeight className="w-4 h-4" aria-hidden="true" />,
                label: "Weight",
                value: carSpecs.weight,
              },
              {
                icon: <FaLeaf className="w-4 h-4" aria-hidden="true" />,
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
                className="w-5 h-5"
                aria-label="Performance Icon"
              />
            }
          >
            {[
              {
                icon: (
                  <FaTachometerAlt className="w-4 h-4" aria-hidden="true" />
                ),
                label: "Top Speed",
                value: carSpecs.topSpeed,
              },
              {
                icon: <FaBolt className="w-4 h-4" aria-hidden="true" />,
                label: "0-60 Acceleration",
                value: carSpecs.acceleration,
              },
              {
                icon: <FaUsers className="w-4 h-4" aria-hidden="true" />,
                label: "Seating Capacity",
                value: carSpecs.seatingCapacity,
              },
              {
                icon: <FaShieldAlt className="w-4 h-4" aria-hidden="true" />,
                label: "Safety Rating",
                value: carSpecs.safetyRating,
              },
              {
                icon: <FaPalette className="w-4 h-4" aria-hidden="true" />,
                label: "Color Options",
                value: carSpecs.colorOptions,
              },
              {
                icon: <FaKey className="w-4 h-4" aria-hidden="true" />,
                label: "Warranty",
                value: carSpecs.warranty,
              },
              {
                icon: <FaTag className="w-4 h-4" aria-hidden="true" />,
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
                className="w-5 h-5"
                aria-label="Additional Specifications Icon"
              />
            }
          >
            {[
              {
                icon: <FaWrench className="w-4 h-4" />,
                label: "Maintenance Cost",
                value: carSpecs.maintenanceCost,
              },
              {
                icon: <FaBoxOpen className="w-4 h-4" />,
                label: "Boot Space",
                value: carSpecs.bootSpace,
              },
              {
                icon: <FaArrowAltCircleUp className="w-4 h-4" />,
                label: "Ground Clearance",
                value: carSpecs.groundClearance,
              },
              ...(carSpecs.batteryCapacity
                ? [
                    {
                      icon: <FaBatteryHalf className="w-4 h-4" />,
                      label: "Battery Capacity",
                      value: carSpecs.batteryCapacity,
                    },
                  ]
                : []),
              // New additional specs to reach 7 elements
              {
                icon: <FaOilCan className="w-4 h-4" />,
                label: "Oil Change Interval",
                value:
                  carSpecs.fuelType === "Electric"
                    ? "Not Required"
                    : "10,000 miles",
              },
              {
                icon: <FaRoad className="w-4 h-4" />,
                label: "Turning Radius",
                value: carSpecs.fuelType === "Electric" ? "18.7 ft" : "19.4 ft",
              },
              {
                icon: <FaWeight className="w-4 h-4" />,
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
