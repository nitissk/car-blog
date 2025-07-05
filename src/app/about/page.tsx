import Image from "next/image";
import Logo from "@/components/Logo";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">About CarBlog</h1>

      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Logo />
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold">CarBlog</span>, your
          ultimate destination for all things automotive. We're passionate about
          cars and committed to bringing you the latest news, in-depth reviews,
          and expert advice to fuel your automotive enthusiasm.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Why We Exist</h2>
        <p className="text-gray-700 mb-4">
          In a world where the automotive industry is evolving faster than ever,
          we saw a need for a reliable, comprehensive source of car information
          that caters to both casual enthusiasts and hardcore gearheads alike.
        </p>
        <p className="text-gray-700 mb-4">Our mission is to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Demystify car technology for everyday drivers</li>
          <li>Provide unbiased reviews you can trust</li>
          <li>Help you make informed purchasing decisions</li>
          <li>Share maintenance tips to extend your vehicle's life</li>
          <li>Cover the exciting transition to electric vehicles</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">What We Cover</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Vehicle Reviews</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Electric Vehicles (EVs) and hybrids</li>
              <li>• SUVs and crossovers</li>
              <li>• Luxury and performance cars</li>
              <li>• Budget-friendly options</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Maintenance & Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• DIY maintenance guides</li>
              <li>• Seasonal car care</li>
              <li>• Troubleshooting common issues</li>
              <li>• Cost-saving maintenance tips</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Industry News</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Latest car reveals</li>
              <li>• Automotive technology trends</li>
              <li>• Industry analysis</li>
              <li>• Future mobility concepts</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Buying Guides</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• New vs. used considerations</li>
              <li>• Lease vs. buy analysis</li>
              <li>• Best cars by category</li>
              <li>• Negotiation tips</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Our Tech Stack
        </h2>
        <p className="text-gray-700 mb-6">
          CarBlog is built with modern web technologies to deliver a fast,
          responsive, and enjoyable reading experience:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <TechCard
            name="Next.js"
            description="React framework for server-rendered applications"
          />
          <TechCard
            name="TypeScript"
            description="Typed JavaScript for more reliable code"
          />
          <TechCard
            name="Tailwind CSS"
            description="Utility-first CSS framework for rapid UI development"
          />
          <TechCard
            name="React"
            description="JavaScript library for building user interfaces"
          />
          <TechCard
            name="Vercel"
            description="Platform for deploying and hosting Next.js apps"
          />
          <TechCard
            name="Responsive Design"
            description="Fully optimized for all device sizes"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Join Our Community</h3>
        <p className="text-gray-700 mb-4">
          We're more than just a blog - we're a community of car enthusiasts.
          Subscribe to our newsletter to stay updated on the latest posts and
          join the conversation.
        </p>
      </div>
    </div>
  );
}

function TechCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h4 className="font-bold text-lg text-blue-600 mb-2">{name}</h4>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}
