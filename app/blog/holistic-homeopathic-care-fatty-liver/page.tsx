'use client'

import { motion } from 'framer-motion'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

const faqs = [
{
  question: "What is fatty liver disease?",
  answer: "Fatty liver disease is a condition where excess fat builds up in the liver. It can occur due to poor diet and lifestyle choices, affecting your liver's ability to function properly. Many people with fatty liver disease might not show any symptoms initially."
},
{
  question: "What tests are available for fatty liver disease?",
  answer: `Our diagnostic services include:
  • Ultrasound-based Liver Elastography
  • Comprehensive Blood Tests
  • FibroScan
  • Liver Function Tests (LFTs)`
},
{
  question: "What is the treatment approach at LiverCure?",
  answer: `Our holistic treatment approach includes:
  • Personalized Remedy Selection
  • Detoxification Support
  • Holistic Lifestyle Guidance
  • Regular monitoring and adjustments`
},
{
  question: "Can fatty liver disease be reversed?",
  answer: "Yes, especially in its early stages. Lifestyle changes, proper diet, regular exercise, and homeopathic treatment can help reverse fatty liver disease. Our personalized treatment plans focus on addressing the root cause and promoting natural healing."
}
]

export default function HomeopathicCareForFattyLiver() {
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
            <h1 className="text-4xl font-bold text-[#800000] mb-6">Holistic Homeopathic Care for Fatty Liver: Comprehensive Solutions and Tests</h1>
            
            {/* <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src="/fatty-liver-comparison.jpg"
                alt="Fatty Liver Comparison"
                fill
                className="object-cover"
              />
            </div> */}

            <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
              <h2>Understanding Fatty Liver Disease</h2>
              <p>Fatty liver disease is a condition where excess fat builds up in the liver. It can occur due to poor diet and lifestyle choices, affecting your liver's ability to function properly. Many people with fatty liver disease might not show any symptoms initially.
                </p>
              <p>
                Welcome to LiverCure.org, where we offer natural and effective homeopathic treatments tailored to address liver health issues, including fatty liver disease. Our approach is rooted in holistic healing, focusing on restoring balance within the body and promoting optimal liver function.
              </p>

              <h2>Our Treatment Approach</h2>
              <ul>
                <li>Personalized Remedy Selection: Selected based on your unique symptoms and overall health</li>
                <li>Detoxification Support: Natural methods to cleanse and rejuvenate your liver</li>
                <li>Holistic Lifestyle Guidance: Dietary and lifestyle recommendations for liver health</li>
              </ul>

              <h2>Tests for Fatty Liver Disease</h2>
              <p>
                Early detection is crucial in managing fatty liver disease effectively. We offer a range of non-invasive tests for accurate diagnosis and monitoring:
              </p>

              <ul>
                <li>Ultrasound-based Liver Elastography</li>
                <li>Comprehensive Blood Tests</li>
                <li>Homeopathic Assessment</li>
                <li>Regular monitoring and progress evaluation</li>
              </ul>

              <h2>Why Choose LiverCure?</h2>
              <p>
                Our homeopathic approach offers a natural alternative that works with your body's healing processes. We utilize carefully selected remedies to reduce liver fat, alleviate inflammation, and promote overall liver health, all without the side effects commonly associated with conventional treatments.
              </p>
            </div>

            {/* FAQs Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#800000] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Disclosure key={index}>
                    {({ open }) => (
                      <div className="border border-gray-200 rounded-lg">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-50">
                          <span className="font-medium">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 ${
                              open ? 'transform rotate-180' : ''
                            }`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 py-3 text-gray-600 bg-gray-50">
                          {faq.answer}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
    <Footer />
  </main>
)
}

