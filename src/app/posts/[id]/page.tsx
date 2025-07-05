import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface CarSpecs {
  modelYear: string;
  fuelType: string;
  engine: string;
  topSpeed: string;
  acceleration: string;
  price: string;
}

async function getPost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

function generateCarSpecs(postId: number): CarSpecs {
  const years = ['2023', '2022', '2024', '2021'];
  const fuels = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];
  const engines = ['2.0L Turbo', '3.5L V6', 'Electric Motor', '1.8L Hybrid'];
  const speeds = ['155 mph', '180 mph', '130 mph', '200 mph'];
  const accelerations = ['5.2s 0-60', '4.8s 0-60', '6.1s 0-60', '3.9s 0-60'];
  const prices = ['$42,500', '$38,200', '$54,300', '$47,800'];

  return {
    modelYear: years[postId % years.length],
    fuelType: fuels[postId % fuels.length],
    engine: engines[postId % engines.length],
    topSpeed: speeds[postId % speeds.length],
    acceleration: accelerations[postId % accelerations.length],
    price: prices[postId % prices.length],
  };
}

export default async function PostDetail({ params }: { params: { id: string } }) {
  const postId = Number(params.id);

  try {
    const post = await getPost(postId);
    const user = await getUser(post.userId);
    const carSpecs = generateCarSpecs(post.id);

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-96 relative bg-gray-100">
              <Image
                src={`https://source.unsplash.com/1600x900/?car,${post.id}`}
                alt={post.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>

              <div className="prose max-w-none text-gray-700 mb-12">
                {post.body.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Vehicle Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Details</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Model Year</span>
                        <span className="font-medium">{carSpecs.modelYear}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Fuel Type</span>
                        <span className="font-medium">{carSpecs.fuelType}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Engine</span>
                        <span className="font-medium">{carSpecs.engine}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Top Speed</span>
                        <span className="font-medium">{carSpecs.topSpeed}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">0-60 Acceleration</span>
                        <span className="font-medium">{carSpecs.acceleration}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Starting Price</span>
                        <span className="font-medium text-blue-600">{carSpecs.price}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
