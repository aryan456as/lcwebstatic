'use client'

import { motion } from 'framer-motion'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function NutritionForHealthyLiver() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.article
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-[#FFA500] hover:text-[#800000] transition-colors mb-6"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-4xl font-bold text-[#800000] mb-4">Nutrition for a Healthy Liver</h1>
              <p className="text-gray-500 mb-8">June 29, 2023</p>
              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
                <h2>Optimal Nutrition for Liver Health</h2>
                <p>A well-balanced diet is crucial for maintaining liver health. The right nutrients can help protect your liver and support its vital functions.</p>

                <h3>Best Foods for Liver Health</h3>
                <ul>
                  <li>Leafy green vegetables</li>
                  <li>Cruciferous vegetables</li>
                  <li>Berries and other antioxidant-rich fruits</li>
                  <li>Nuts and seeds</li>
                  <li>Fatty fish rich in omega-3</li>
                  <li>Whole grains</li>
                </ul>

                <h3>Foods to Avoid</h3>
                <p>Some foods can strain your liver and should be limited:</p>
                <ul>
                  <li>Processed foods high in preservatives</li>
                  <li>Foods high in saturated fats</li>
                  <li>Excess sugar and refined carbohydrates</li>
                  <li>Alcohol</li>
                </ul>

                <h2>Dietary Tips for Liver Health</h2>
                <ol>
                  <li>Eat regular, balanced meals</li>
                  <li>Stay hydrated with plenty of water</li>
                  <li>Choose organic when possible</li>
                  <li>Include fiber-rich foods</li>
                  <li>Limit portion sizes</li>
                </ol>

                <h2>Supplements for Liver Support</h2>
                <p>Consider these natural supplements (after consulting with a healthcare provider):</p>
                <ul>
                  <li>Milk thistle</li>
                  <li>Turmeric</li>
                  <li>Dandelion root</li>
                  <li>B-complex vitamins</li>
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
      <Footer />
    </main>
  )
}

