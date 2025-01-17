'use client'

import { motion } from 'framer-motion'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function CommonLiverDiseases() {
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
              <h1 className="text-4xl font-bold text-[#800000] mb-4">Common Liver Diseases</h1>
              <p className="text-gray-500 mb-8">June 22, 2023</p>
              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
                <h2>Understanding Common Liver Diseases</h2>
                <p>Liver diseases can affect anyone, regardless of age or lifestyle. Understanding these conditions is crucial for early detection and treatment.</p>

                <h3>Fatty Liver Disease</h3>
                <p>Fatty liver disease occurs when fat builds up in the liver. There are two main types:</p>
                <ul>
                  <li>Alcoholic fatty liver disease</li>
                  <li>Non-alcoholic fatty liver disease (NAFLD)</li>
                </ul>

                <h3>Viral Hepatitis</h3>
                <p>Hepatitis is inflammation of the liver, often caused by viruses:</p>
                <ul>
                  <li>Hepatitis A - typically spread through contaminated food or water</li>
                  <li>Hepatitis B - transmitted through blood and body fluids</li>
                  <li>Hepatitis C - primarily spread through blood contact</li>
                </ul>

                <h2>Symptoms and Detection</h2>
                <p>Common symptoms of liver diseases include:</p>
                <ul>
                  <li>Fatigue and weakness</li>
                  <li>Weight loss</li>
                  <li>Nausea</li>
                  <li>Jaundice</li>
                  <li>Abdominal pain</li>
                </ul>

                <h2>Homeopathic Approach to Treatment</h2>
                <p>Homeopathy offers various natural remedies for liver conditions, focusing on:</p>
                <ul>
                  <li>Supporting liver function</li>
                  <li>Reducing inflammation</li>
                  <li>Boosting immune response</li>
                  <li>Promoting natural healing</li>
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

