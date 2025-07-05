import { notFound } from "next/navigation";
import { carBlogContent } from "../../../data/carBlogContent";
import { carSpecsData, imageData } from "./blogData";
import {
  FaCar,
  FaShieldAlt,
  FaClock,
  FaCalendarAlt,
  FaEye,
  FaEnvelope,
  FaUserPlus,
  FaCalendarCheck,
  FaComment,
  FaNewspaper,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { VehicleSpecifications } from "./VehicleSpecifications";
import {
  categoryCards,
  ExploreCategories,
} from "@/components/ExploreCategories";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  joinDate: string;
  rating: number;
  postCount: number;
  id: number;
  name: string;
  email: string;
}

interface CarSpecs {
  warranty: string;
  transmission: string;
  drivetrain: string;
  fuelEfficiency: string;
  colorOptions: string;
  weight: string;
  safetyRating: string;
  seatingCapacity: string;
  modelYear: string;
  fuelType: string;
  engine: string;
  topSpeed: string;
  acceleration: string;
  price: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function getAllPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/posts.json`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch all posts");
    }
    return res.json();
  } catch (error) {
    throw error;
  }
}

async function getAllUsers(): Promise<User[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/users.json`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch all users");
    }
    return res.json();
  } catch (error) {
    throw error;
  }
}

async function getPost(id: number): Promise<Post> {
  const allPosts = await getAllPosts();
  const post = allPosts.find((p) => p.id === id);
  if (!post) {
    throw new Error(`Post with ID ${id} not found.`);
  }
  return post;
}

async function getUser(userId: number): Promise<User> {
  const allUsers = await getAllUsers();
  const user = allUsers.find((u) => u.id === userId);
  if (!user) {
    throw new Error(`User with ID ${userId} not found.`);
  }
  return user;
}

function generateCarSpecs(postId: number): CarSpecs {
  const index = postId % carSpecsData.length;
  return carSpecsData[index];
}

const rating = (Math.random() * 1.5 + 3).toFixed(1);
const ratingValue = parseFloat(rating);

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const postId = parseInt(id);

  let post: Post | undefined;
  try {
    post = await getPost(postId);
  } catch (error) {
    return {
      title: "Car Blog Detail - Not Found",
      description: "This car blog post could not be found.",
    };
  }

  return {
    title: post ? `${post.title} | Car Blog` : "Car Blog Detail",
    description: post ? post.body.substring(0, 160) : "Detailed car blog post",
  };
}

export default async function BlogDetail({ params }: PageProps) {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) {
    notFound();
  }

  let post: Post;
  let user: User;
  let carSpecs: CarSpecs;

  try {
    post = await getPost(postId);
    user = await getUser(post.userId);
    carSpecs = generateCarSpecs(post.id);
  } catch (error) {
    return notFound();
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-8xl mx-auto">
          <article className="bg-white">
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[750px] overflow-hidden bg-gray-100 shadow-sm p-0">
              <Image
                src={imageData[postId % imageData.length].src}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-102"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                unoptimized
              />
              <div className="absolute top-0 left-0 pl-5 pt-5 z-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-white font-medium bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-full text-sm backdrop-blur-md transition"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                  Back to All Blog Post
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="px-8 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl mb-8 relative overflow-hidden border border-gray-100 shadow-sm">
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 animate-pulse"></div>
                <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-indigo-100 opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-0"></div>

                <div className="relative max-w-4xl mx-auto text-center z-10">
                  <div className="inline-flex items-center px-3 py-0 mb-1 bg-white text-blue-600 text-sm font-semibold rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors cursor-pointer">
                    <FaCar className="mr-2" />
                    Automotive Review
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                      {post.title}
                    </span>
                  </h1>

                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-gray-600">
                    <span className="flex items-center bg-white/80 px-3 py-1.5 rounded-full text-sm shadow-xs">
                      <FaCalendarAlt className="mr-2 text-blue-500" />
                      {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center bg-white/80 px-3 py-1.5 rounded-full text-sm shadow-xs">
                      <FaClock className="mr-2 text-blue-500" />5 min read
                    </span>
                    <span className="flex items-center bg-white/80 px-3 py-1.5 rounded-full text-sm shadow-xs">
                      <FaEye className="mr-2 text-blue-500" />
                      1.2K views
                    </span>
                    <span className="flex items-center bg-white/80 px-3 py-1.5 rounded-full text-sm shadow-xs">
                      <FaComment className="mr-2 text-blue-500" />
                      24 comments
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 hover:shadow-sm transition-shadow">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between flex-wrap gap-6">
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 group-hover:shadow-md">
                      {user.name.charAt(0)}
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-300 transition-all duration-300"></div>
                  </div>

                  <div className="w-full sm:flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center flex-wrap gap-2">
                          <h3 className="text-lg font-semibold text-gray-900 cursor-pointer">
                            {user.name}
                          </h3>
                          <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full flex items-center cursor-pointer">
                            <FaShieldAlt className="mr-1.5" />
                            Verified Author
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 flex items-center mt-1 cursor-pointer">
                          <FaEnvelope className="mr-2 text-blue-400" />
                          {user.email}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button className="inline-flex items-center px-4 py-2 cursor-pointer bg-white border border-gray-200 text-sm font-medium rounded-full text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-colors">
                          <FaUserPlus className="mr-2" />
                          Follow
                        </button>
                        <button className="inline-flex items-center cursor-pointer px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
                          <FaEnvelope className="mr-2" />
                          Contact
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center mt-4 pt-4 border-t border-gray-100 gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FaCalendarCheck className="mr-2 text-blue-400" />
                        Member since{" "}
                        {new Date(user.joinDate).toLocaleDateString("en-US", {
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center">
                        <FaNewspaper className="mr-2 text-blue-400" />
                        {user.postCount} articles
                      </span>
                      <span className="flex items-center text-sm text-gray-700 space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => {
                          if (ratingValue >= star) {
                            return (
                              <FaStar
                                key={star}
                                className="text-yellow-400 w-4 h-4"
                              />
                            );
                          } else if (ratingValue >= star - 0.5) {
                            return (
                              <FaStarHalfAlt
                                key={star}
                                className="text-yellow-400 w-4 h-4"
                              />
                            );
                          } else {
                            return (
                              <FaRegStar
                                key={star}
                                className="text-gray-300 w-4 h-4"
                              />
                            );
                          }
                        })}
                        <span className="ml-2 font-medium text-gray-600">
                          {rating} rating
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-7xl mx-auto py-5">
              <h2 className="px-6 py-4 text-3xl font-bold mb-6 text-gray-900">
                {carBlogContent.title}
              </h2>
              <div className="prose max-w-none text-gray-800 px-6">
                {carBlogContent.body}
              </div>
            </div>

            <VehicleSpecifications carSpecs={carSpecs} />

            <ExploreCategories categoryCards={categoryCards} />
          </article>
        </div>
      </div>
    </>
  );
}
