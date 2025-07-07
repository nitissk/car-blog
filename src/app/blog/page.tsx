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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

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

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              All <span className="text-blue-600">Posts</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search */}
              <div className="relative flex-1 md:w-72">
                <input
                  type="text"
                  placeholder="Search posts or categories..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto py-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          <div className="space-y-6 sm:space-y-8">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post, idx) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-[40%] h-48 sm:h-56 md:h-64 relative bg-gray-100">
                      <Image
                        src={imageData[(startIndex + idx) % imageData.length].src}
                        alt={imageData[(startIndex + idx) % imageData.length].alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </div>
                    <div className="p-4 sm:p-6 md:w-[60%] flex flex-col">
                      <div className="flex flex-col h-full">
                        <div>
                          <span className="inline-block text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full mb-2">
                            {post.category}
                          </span>
                          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 line-clamp-2">
                            <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                              {post.title}
                            </Link>
                          </h2>
                          <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2 sm:line-clamp-3">
                            {post.body.substring(0, 150)}...
                          </p>
                        </div>
                        <div className="mt-auto">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm sm:text-base mr-3">
                              {users[post.userId]?.name?.charAt(0) || "A"}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 text-sm sm:text-base">
                                {users[post.userId]?.name || "Anonymous Author"}
                              </p>
                              <p className="text-xs text-gray-500">
                                {users[post.userId]?.email || "author@example.com"}
                              </p>
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base text-center sm:text-left"
                          >
                            Read full article
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-700">No posts found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 gap-4">
              <div className="text-sm text-gray-500">
                Showing {startIndex + 1}-{Math.min(startIndex + POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} posts
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 hover:bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <div className="flex items-center space-x-1">
                  {[...Array(Math.min(3, totalPages))].map((_, i) => {
                    const page = currentPage <= 3 
                      ? i + 1 
                      : currentPage >= totalPages - 2 
                        ? totalPages - 4 + i 
                        : currentPage - 2 + i;
                    if (page < 1 || page > totalPages) return null;
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base ${
                          currentPage === page 
                            ? "bg-blue-600 text-white" 
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="px-2 text-gray-500">...</span>
                  )}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm sm:text-base"
                    >
                      {totalPages}
                    </button>
                  )}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 hover:bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base flex items-center gap-1"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}