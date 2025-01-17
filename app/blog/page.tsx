'use client'

import { motion } from 'framer-motion'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "Understanding Liver Health",
    excerpt: "Learn about the importance of liver health and how to maintain it through lifestyle choices.",
    date: "June 15, 2023",
    link: "/blog/understanding-liver-health"
  },
  {
    id: 2,
    title: "Common Liver Diseases",
    excerpt: "Explore the most common liver diseases, their symptoms, and available homeopathic treatments.",
    date: "June 22, 2023",
    link: "/blog/common-liver-diseases"
  },
  {
    id: 3,
    title: "Nutrition for a Healthy Liver",
    excerpt: "Discover the best foods and dietary habits to support optimal liver function.",
    date: "June 29, 2023",
    link: "/blog/nutrition-for-healthy-liver"
  },
  {
    id: 4,
    title: "Homeopathy and Liver Care",
    excerpt: "Learn how homeopathic treatments can help in maintaining liver health and treating liver conditions.",
    date: "July 6, 2023",
    link: "/blog/homeopathy-and-liver-care"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            LiverCure Blog
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[#800000] mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={post.link}
                      className="text-[#FFA500] hover:text-[#800000] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

