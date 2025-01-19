'use client'

import { motion } from 'framer-motion'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
 {
  id: 1,
  title: "Best Gastroenterologist in Lucknow",
  excerpt: "Discover comprehensive liver care with our expert gastroenterologist in Lucknow, offering specialized treatment for various conditions.",
  date: "January 19, 2024",
  //image: "/gastroentrologist.jpg",
  link: "/blog/best-gastrologist-lucknow"
},
  {
    id: 2,
    title: "Common Liver Diseases",
    excerpt: "Explore the most common liver diseases, their symptoms, and available homeopathic treatments.",
    date: "June 22, 2023",
    //image: "/stages-liver-damage1.png",
    link: "/blog/common-liver-diseases"
  },
  {
    id: 3,
    title: "Nutrition for a Healthy Liver",
    excerpt: "Discover the best foods and dietary habits to support optimal liver function.",
    date: "June 29, 2023",
    //image: "/liver_nutrition.jpg",
    link: "/blog/nutrition-for-healthy-liver"
  },
  {
    id: 4,
    title: "Homeopathy and Liver Care",
    excerpt: "Learn how homeopathic treatments can help in maintaining liver health and treating liver conditions.",
    date: "July 6, 2023",
    //image: "/homeopathy.jpg",
    link: "/blog/homeopathy-and-liver-care"
  },
  {
    id: 5,
    title: "Understanding Liver Cirrhosis",
    excerpt: "Learn about the causes, symptoms, and treatment options for liver cirrhosis through our comprehensive guide.",
    date: "January 19, 2024",
    //image: "/cirrhosis.jpg",
    link: "/blog/liver-cirrhosis"
  },
  {
    id:6,
    title: "Alcoholic Liver Disease: Stages and Treatment",
    excerpt: "Discover the progression of alcoholic liver disease and how homeopathic treatment can help.",
    date: "January 19, 2024",
    //image: "/alcohol-liver-disease.png",
    link: "/blog/alcoholic-liver-disease"
  },
  {
    id: 7,
    title: "Drug Addiction and Liver Health",
    excerpt: "Understanding the impact of drug use on liver health and available treatment options.",
    date: "January 19, 2024",
    //image: "/drug_addiction.jpg",
    link: "/blog/drug-addiction-liver-health"
  },
  {
    id: 8,
    title: "Understanding Gastritis",
    excerpt: "Learn about the causes, symptoms, and treatment options for gastritis.",
    date: "January 19, 2024",
    link: "/blog/gastritis"
  },
  {
    id: 9,
    title: "Hepatitis: Types and Treatments",
    excerpt: "A comprehensive guide to understanding different types of hepatitis and treatment approaches.",
    date: "January 19, 2024",
    link: "/blog/hepatitis"
  },
  {
    id: 10,
    title: "Hypercholesterolemia and Liver Health",
    excerpt: "Understanding the relationship between cholesterol levels and liver health.",
    date: "January 19, 2024",
    link: "/blog/hypercholesterolemia"
  },
  {
    id: 11,
    title: "Understanding Thyroid Disorders",
    excerpt: "Learn about different thyroid conditions, their symptoms, and available homeopathic treatments.",
    date: "January 19, 2024",
    link: "/blog/thyroid-disorders"
  },
  {
    id: 12,
    title: "Understanding Prediabetes",
    excerpt: "Early detection and prevention strategies for prediabetes through homeopathic care.",
    date: "January 19, 2024",
    link: "/blog/prediabetes"
  },
  {
    id: 13,
    title: "Holistic Homeopathic Care for Fatty Liver",
    excerpt: "Comprehensive solutions and tests for fatty liver disease through homeopathic care.",
    date: "January 19, 2024",
    link: "/blog/holistic-homeopathic-care-fatty-liver"
  },
  {
    id: 14,
    title: "Understanding Hepatitis B and C",
    excerpt: "Learn about the causes, symptoms, and treatment options for Hepatitis B and C.",
    date: "January 19, 2024",
    link: "/blog/understanding-hepatitis"
  },
  {
    id: 15,
    title: "Home Remedies for Fatty Liver Disease",
    excerpt: "Discover natural approaches to heal your liver and improve overall liver health.",
    date: "January 19, 2024",
    link: "/blog/home-remedies-liver-health"
  },
  {
    
    id: 16,
    title: "Understanding Liver Health",
    excerpt: "Learn about the importance of liver health and how to maintain it through lifestyle choices.",
    date: "June 15, 2023",
    link: "/blog/understanding-liver-health"
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
                className="bg-white rounded-lg shadow-lg overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
              >
                {/* <div className="relative h-48">
                  <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  />
                </div> */}
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

