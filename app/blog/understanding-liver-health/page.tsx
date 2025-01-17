'use client'

import { motion } from 'framer-motion'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function UnderstandingLiverHealth() {
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
              <h1 className="text-4xl font-bold text-[#800000] mb-4">Understanding Liver Health</h1>
              <p className="text-gray-500 mb-8">June 15, 2023</p>
              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
                <h2>The Importance of Liver Health</h2>
                <p>Your liver is one of the most vital organs in your body, performing hundreds of essential functions. From filtering toxins and processing nutrients to producing proteins and regulating hormones, the liver is truly remarkable in its capabilities and importance to overall health.</p>

                <h3>Key Functions of the Liver</h3>
                <ul>
                  <li>Filtering blood and removing toxins</li>
                  <li>Processing nutrients from food</li>
                  <li>Producing bile for fat digestion</li>
                  <li>Storing vitamins and minerals</li>
                  <li>Regulating blood sugar levels</li>
                  <li>Supporting immune system function</li>
                </ul>

                <h3>Maintaining Liver Health</h3>
                <p>There are several key ways to maintain optimal liver health:</p>
                <ol>
                  <li>Maintain a healthy diet rich in fruits, vegetables, and whole grains</li>
                  <li>Limit alcohol consumption</li>
                  <li>Exercise regularly</li>
                  <li>Stay hydrated</li>
                  <li>Avoid exposure to toxins</li>
                </ol>

                <h2>Warning Signs of Liver Problems</h2>
                <p>It's important to be aware of potential signs of liver issues:</p>
                <ul>
                  <li>Yellowing of skin or eyes (jaundice)</li>
                  <li>Abdominal pain or swelling</li>
                  <li>Dark urine color</li>
                  <li>Chronic fatigue</li>
                  <li>Nausea or loss of appetite</li>
                </ul>

                <h2>The Role of Homeopathy in Liver Care</h2>
                <p>Homeopathic medicine offers natural and gentle support for liver health. Various homeopathic remedies can help maintain liver function and support the body's natural healing processes.</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
      <Footer />
    </main>
  )
}

