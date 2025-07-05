"use client";

import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export default function NewTechnologyPage() {
  const articles: Article[] = [
    {
      id: 1,
      title: "A Review of Cars with Advanced Infotainment Systems",
      author: "Dasteen",
      date: "Jan 10, 2024",
      readTime: "3 min read",
      image: "/newT/image.png",
    },
    {
      id: 2,
      title: "The Future of Autonomous Driving Technology",
      author: "Maria Chen",
      date: "Feb 15, 2024",
      readTime: "4 min read",
      image: "/newT/image-copy.png",
    },
    {
      id: 3,
      title: "Electric Vehicle Battery Breakthroughs in 2024",
      author: "James Wilson",
      date: "Mar 5, 2024",
      readTime: "5 min read",
      image: "/newT/image-copy1.png",
    },
    {
      id: 4,
      title: "How AI is Revolutionizing Car Safety Features",
      author: "Sarah Johnson",
      date: "Apr 22, 2024",
      readTime: "4 min read",
      image: "/newT/image-copy2.png",
    },
  ];

  return (
    <div className="min-h-auto bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Page Heading with See All */}
        <div className="mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
            New <span className="text-blue-600">Technology</span>
          </h1>
          <Link
            href="/blog"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-blue-600 border border-blue-100 bg-white px-4 py-2 rounded-full shadow hover:bg-blue-50 transition"
          >
            See All
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group min-h-[360px] flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={article.id <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h2 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 leading-snug">
                  {article.title}
                </h2>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shadow-sm">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-600">
                      {article.author}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                      <span>{article.date}</span>
                      <span className="text-gray-300">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
