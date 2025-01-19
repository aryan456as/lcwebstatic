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
  question: "What is prediabetes?",
  answer: "Prediabetes is a condition where blood sugar levels are higher than normal but not high enough to be diagnosed as type 2 diabetes. It's a warning sign that you're at risk of developing diabetes if lifestyle changes aren't made."
},
{
  question: "What are the symptoms of prediabetes?",
  answer: `Common symptoms include:
  • Increased thirst
  • Frequent urination
  • Increased hunger
  • Fatigue
  • Blurred vision
  • Numbness or tingling in feet or hands
  • Slow-healing sores
  However, many people with prediabetes don't show any symptoms.`
},
{
  question: "What causes prediabetes?",
  answer: "The exact cause is unknown, but family history and genetics appear to play an important role. When your blood sugar levels start to rise, your pancreas produces insulin to help glucose enter your cells. However, your cells can become resistant to insulin over time, leading to prediabetes."
},
{
  question: "Can prediabetes be reversed?",
  answer: `Yes, prediabetes can often be reversed through lifestyle changes such as:
  • Maintaining a healthy diet
  • Regular exercise
  • Weight management
  • Stress reduction
  • Regular monitoring of blood sugar levels`
}
]

export default function Prediabetes() {
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
            <h1 className="text-4xl font-bold text-[#800000] mb-6">Understanding Prediabetes: Early Detection and Prevention</h1>
            
            {/* 
            <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src="/images/prediabetes.jpg"
                alt="Prediabetes Concept"
                fill
                className="object-cover"
              />
            </div>
            */}

            <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
              <h2>What is Prediabetes?</h2>
              <p>
                Prediabetes doesn't usually have any signs or symptoms. One possible sign is darkened skin on certain parts of the body, particularly the neck, armpits, and groin.
              </p>

              <h2>Understanding the Causes</h2>
              <p>
                The exact cause of prediabetes is unknown. But family history and genetics appear to play an important role. Most of the glucose in your body comes from the food you eat. When food is digested, sugar enters your bloodstream. Insulin allows sugar to enter your cells – and lowers the amount of sugar in your blood.
              </p>

              <h3>Classic Signs and Symptoms</h3>
              <ul>
                <li>Increased thirst</li>
                <li>Frequent urination</li>
                <li>Increased hunger</li>
                <li>Fatigue</li>
                <li>Blurred vision</li>
                <li>Numbness or tingling in the feet or hands</li>
                <li>Frequent infections</li>
                <li>Slow-healing sores</li>
                <li>Unintended weight loss</li>
              </ul>

              <h2>Prevention and Treatment</h2>
              <p>
                When you have prediabetes, this process doesn't work as well. Instead of fueling your cells, sugar builds up in your bloodstream. This can happen because:
              </p>
              <ul>
                <li>Your pancreas may not make enough insulin</li>
                <li>Your cells become resistant to insulin and don't allow as much sugar</li>
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

