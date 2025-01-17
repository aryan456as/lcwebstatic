'use client'

import { motion } from 'framer-motion'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function HomeopathyAndLiverCare() {
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
              <h1 className="text-4xl font-bold text-[#800000] mb-4">Homeopathy and Liver Care</h1>
              <p className="text-gray-500 mb-8">July 6, 2023</p>
              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
                <h2>Homeopathy's Role in Liver Health</h2>
                <p>Homeopathy offers a gentle yet effective approach to liver care, focusing on stimulating the body's natural healing mechanisms.</p>

                <h3>Benefits of Homeopathic Treatment</h3>
                <ul>
                  <li>Natural and non-toxic approach</li>
                  <li>No side effects</li>
                  <li>Treats the root cause</li>
                  <li>Holistic healing</li>
                  <li>Personalized treatment plans</li>
                </ul>

                <h2>Common Homeopathic Remedies</h2>
                <p>Several homeopathic remedies are known to support liver health:</p>
                <ul>
                  <li>Chelidonium - for liver and gallbladder support</li>
                  <li>Lycopodium - for digestive issues</li>
                  <li>Nux Vomica - for overindulgence effects</li>
                  <li>Phosphorus - for fatty liver conditions</li>
                </ul>

                <h2>Treatment Approach</h2>
                <p>Homeopathic treatment for liver conditions involves:</p>
                <ol>
                  <li>Detailed case taking</li>
                  <li>Individual remedy selection</li>
                  <li>Lifestyle modifications</li>
                  <li>Regular monitoring</li>
                  <li>Dietary recommendations</li>
                </ol>

                <h2>When to Seek Treatment</h2>
                <p>Consider homeopathic treatment for:</p>
                <ul>
                  <li>Digestive issues</li>
                  <li>Liver function problems</li>
                  <li>Chronic liver conditions</li>
                  <li>Preventive care</li>
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

