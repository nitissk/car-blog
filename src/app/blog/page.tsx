"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import Top from "../../components/blogTop";
import { imageData } from "../blog/[id]/blogData";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  category: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const POSTS_PER_PAGE = 5;
const categories = [
  "All",
  "SUV",
  "EV",
  "Luxury",
  "Sedan",
  "MUV",
  "Coupe",
  "MiniVan",
];

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<Record<number, User>>({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

 const fetchData = async () => {
  try {
    const postsResponse = await fetch("/api/posts.json");
    const postsData: Post[] = await postsResponse.json();

    const limitedPosts = postsData.slice(0, 50).map((post, idx) => ({
      ...post,
      category: categories[(idx % (categories.length - 1)) + 1], 
    }));
    setPosts(limitedPosts);

    const usersResponse = await fetch("/api/users.json");
    const allUsers: User[] = await usersResponse.json();

    const usersData: Record<number, User> = {};
    allUsers.forEach((user) => {
      usersData[user.id] = user;
    });

    setUsers(usersData);
  } catch (error) {
    console.error("Data fetch error:", error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchData();
}, []);


  const handleSearch = () => {
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
    window.scrollTo({ top: 800, behavior: "smooth" }); 
  }
};
  return (
    <>
      <Head>
        <title>Car Blog | Latest Automotive News</title>
        <meta
          name="description"
          content="Discover the latest car reviews, news and trends"
        />
      </Head>

      <Top />

      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center px-4 mb-6">
            <h1 className="text-5xl font-bold text-gray-900">
              All <span className="text-blue-600">Posts</span>
            </h1>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 px-4 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm border ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search posts or categories..."
                className="border border-gray-300 rounded-md px-4 py-2 w-72 pr-5 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white backdrop-blur-md rounded-md"
              >
                Search
              </button>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="space-y-8">
            {paginatedPosts.map((post, idx) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-[36%] h-64 md:h-auto relative bg-gray-100">
                    <Image
                      src={imageData[(startIndex + idx) % imageData.length].src}
                      alt={imageData[(startIndex + idx) % imageData.length].alt}
                      fill
                      className="object-cover rounded-xl shadow-lg z-10"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36vw"
                      unoptimized
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col m-5">
                    <h2 className="text-2xl font-bold mb-1 text-gray-800">
                      {post.title}
                    </h2>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded w-fit mb-2">
                      {post.category}
                    </span>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.body.substring(0, 150)}...
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                          {users[post.userId]?.name?.charAt(0) || "A"}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {users[post.userId]?.name || "Anonymous Author"}
                          </p>
                          <p className="text-xs text-gray-500">
                            {users[post.userId]?.email || "author@example.com"}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Read full article...
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        
        </div>
      </main>
    </>
  );
}
