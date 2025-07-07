"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import { imageData } from "../blog/[id]/blogData"; 

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

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<Record<number, User>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch("/api/posts.json");
        const postsData: Post[] = await postsResponse.json();
        const limitedPosts = postsData.slice(0, 5);
        setPosts(limitedPosts);

        const usersResponse = await fetch("/api/users.json");
        const usersList: User[] = await usersResponse.json();

        const usersData: Record<number, User> = {};
        usersList.forEach((user) => {
          usersData[user.id] = user;
        });

        setUsers(usersData);
      } catch (error) {
        console.error("Data fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = () => {
    return new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getImageForPost = (postId: number) => {
    const imageObj = imageData.find((img) => img.id === postId);
    return imageObj?.src || "/c4.png"; 
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  const [latestPost, ...trendingPosts] = posts;

  return (
    <>
      <Head>
        <title>Car Blog | Latest Automotive News</title>
        <meta name="description" content="Discover the latest car reviews, news and trends" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="w-full bg-gray-900 text-white py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-8xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Auto Insights</h1>
            <p className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Your premier destination for the latest in automotive news, reviews, and trends
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-8xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Latest Post */}
            <div className="lg:w-[60%]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Latest Post</h2>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm sm:text-base">
                  View All
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {latestPost && (
                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full">
                    <Image
                      src={getImageForPost(latestPost.id)}
                      alt={latestPost.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      <span className="text-blue-600 font-medium">{users[latestPost.userId]?.name}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate()}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                      {latestPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-justify">
                      {latestPost.body.substring(0, 500)}...
                    </p>
                    <Link
                      href={`/blog/${latestPost.id}`}
                      className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 font-medium text-sm sm:text-base"
                    >
                      Read Full Article
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              )}
            </div>

            {/* Trending Posts */}
            <div className="lg:w-[40%]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Trending Now</h2>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm sm:text-base">
                  View All
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-4 sm:space-y-4 md:space-y-4">
                {trendingPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative h-40 sm:h-32 md:h-36 sm:w-1/3 lg:w-2/5">
                        <Image
                          src={getImageForPost(post.id)}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 40vw"
                        />
                      </div>
                      <div className="p-3 sm:p-4 md:p-5 sm:w-2/3 lg:w-3/5">
                        <div className="flex items-center text-xs text-gray-500 mb-1 sm:mb-2">
                          <span className="text-blue-600 font-medium">
                            {users[post.userId]?.name}
                          </span>
                          <span className="mx-1">•</span>
                          <span>{formatDate()}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-2">
                          <Link
                            href={`/blog/${post.id}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3">
                          {post.body.substring(0, 100)}...
                        </p>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium flex items-center"
                        >
                          Read more
                          <svg className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}