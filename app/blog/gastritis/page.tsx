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
  question: "What is gastritis?",
  answer: "Gastritis is inflammation of the stomach lining. It can be acute (occurring suddenly) or chronic (developing over time). Various factors can cause gastritis, including bacterial infection, regular use of pain relievers, stress, and certain medical conditions."
},
{
  question: "What are the common symptoms of gastritis?",
  answer: `Common symptoms include:
  • Upper abdominal pain
  • Nausea and vomiting
  • Feeling full after eating
  • Indigestion
  • Loss of appetite
  • Black, tarry stools
  • Bloating`
},
{
  question: "How is gastritis treated with homeopathy?",
  answer: "Homeopathic treatment for gastritis focuses on addressing the root cause while providing relief from symptoms. Treatment includes personalized remedies based on individual symptoms, dietary guidance, and lifestyle modifications."
},
{
  question: "Can gastritis be prevented?",
  answer: `Yes, several preventive measures can help:
  • Eating smaller, more frequent meals
  • Avoiding trigger foods
  • Managing stress
  • Limiting alcohol consumption
  • Avoiding NSAIDs when possible
  • Maintaining good hygiene`
}
]

export default function Gastritis() {
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
            <h1 className="text-4xl font-bold text-[#800000] mb-6">Understanding Gastritis: Causes, Symptoms, and Treatment</h1>
            
            {/* <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
              src = "/gastritis.jpg"
              alt="Gastritis Illustration"
              fill
              className="object-cover"
              />
            </div> */}

            <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
              <h2>What is Gastritis?</h2>
              <p>
                Gastritis is inflammation of the protective lining of the stomach. This inflammation can be sudden (acute) or develop gradually over time (chronic). Understanding the causes and symptoms is crucial for effective treatment.
              </p>

              <h2>Common Causes</h2>
              <ul>
                <li>Helicobacter pylori (H. pylori) infection</li>
                <li>Regular use of pain relievers</li>
                <li>Excessive alcohol consumption</li>
                <li>Stress</li>
                <li>Autoimmune conditions</li>
                <li>Bile reflux</li>
              </ul>

              <h2>Types of Gastritis</h2>
              <h3>1. Acute Gastritis</h3>
              <ul>
                <li>Sudden onset</li>
                <li>Often triggered by stress or medications</li>
                <li>Usually temporary</li>
                <li>Responds well to treatment</li>
              </ul>

              <h3>2. Chronic Gastritis</h3>
              <ul>
                <li>Develops over time</li>
                <li>May be caused by H. pylori infection</li>
                <li>Can lead to complications if untreated</li>
                <li>Requires long-term management</li>
              </ul>

              <h2>Homeopathic Treatment Approach</h2>
              <p>
                Our homeopathic treatment plan includes:
              </p>
              <ul>
                <li>Individualized remedy selection</li>
                <li>Dietary modifications</li>
                <li>Stress management techniques</li>
                <li>Lifestyle adjustments</li>
                <li>Regular monitoring</li>
              </ul>

              <h2>Dietary Recommendations</h2>
              <p>
                A proper diet is essential for managing gastritis:
              </p>
              <ul>
                <li>Eat smaller, frequent meals</li>
                <li>Avoid spicy and acidic foods</li>
                <li>Limit caffeine and alcohol</li>
                <li>Include probiotic-rich foods</li>
                <li>Stay hydrated</li>
              </ul>
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

