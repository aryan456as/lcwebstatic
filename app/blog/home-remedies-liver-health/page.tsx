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
  question: "What are the best foods for liver health?",
  answer: `Beneficial foods include:
  • Leafy greens and vegetables
  • Whole grains
  • Healthy fats (omega-3)
  • Herbal spices like turmeric and garlic
  • Green tea`
},
{
  question: "How much water should I drink for liver health?",
  answer: "Water plays an essential role in flushing toxins out of your system. Aim to drink at least eight glasses of water throughout the day to help cleanse your liver and keep it functioning smoothly."
},
{
  question: "Can exercise help improve liver health?",
  answer: "Yes, regular physical activity is one of the best ways to reduce liver fat and improve overall liver health. Aim for at least 30 minutes of moderate-intensity exercise most days of the week."
},
{
  question: "What lifestyle changes can help protect my liver?",
  answer: `Key lifestyle changes include:
  • Maintaining a healthy diet
  • Regular exercise
  • Adequate sleep (7-9 hours)
  • Stress management
  • Limiting alcohol consumption
  • Avoiding processed foods`
}
]

export default function HomeRemediesLiverHealth() {
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
            <h1 className="text-4xl font-bold text-[#800000] mb-6">Home Remedies For Fatty Liver Disease: How To Heal Your Liver Naturally</h1>
            {/* 
            <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src = "/natural-liver-care.jpg"
                alt="Natural Liver Care"
                fill
                className="object-cover"
              />
            </div>
            */}

            <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
              <h2>Natural Approaches to Liver Health</h2>
              <p>
                There are natural approaches that can help reverse the effects and promote liver health. Here, we'll explore how you can heal your liver naturally through effective lifestyle changes and home remedies.
              </p>

              <h2>Essential Dietary Changes</h2>
              <ol>
                <li>Adopt a Liver-Friendly Diet
                  <ul>
                    <li>Include leafy greens and vegetables</li>
                    <li>Choose whole grains</li>
                    <li>Include healthy fats</li>
                    <li>Add herbal spices</li>
                  </ul>
                </li>
                <li>Stay Hydrated: Drink plenty of water throughout the day</li>
                <li>Limit Sugar and Processed Foods</li>
              </ol>

              <h2>Lifestyle Modifications</h2>
              <ul>
                <li>Regular Exercise: Include at least 30 minutes of physical activity daily</li>
                <li>Adequate Sleep: Get 7-9 hours of quality sleep</li>
                <li>Stress Management: Practice relaxation techniques</li>
                <li>Avoid Alcohol: Reduce or eliminate alcohol consumption</li>
              </ul>

              <h2>Natural Supplements</h2>
              <p>Consider these natural supplements (after consulting with a healthcare provider):</p>
              <ul>
                <li>Milk Thistle</li>
                <li>Dandelion Root</li>
                <li>Green Tea</li>
                <li>Turmeric</li>
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

