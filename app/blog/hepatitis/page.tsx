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
        question: "What is hepatitis?",
        answer: "Hepatitis is an inflammation of the liver, often caused by viral infections, toxins, autoimmune conditions, or excessive alcohol consumption. It can range from mild to severe, with chronic cases potentially leading to liver damage."
    },
    {
        question: "What are the types of hepatitis?",
        answer: (
            <>
                <p>The five main types of hepatitis include:</p>
                <ul>
                    <li><strong>Hepatitis A:</strong> Spread through contaminated food or water.</li>
                    <li><strong>Hepatitis B:</strong> Transmitted through bodily fluids like blood or semen.</li>
                    <li><strong>Hepatitis C:</strong> Spread mainly through blood contact.</li>
                    <li><strong>Hepatitis D:</strong> Occurs as a co-infection with hepatitis B.</li>
                    <li><strong>Hepatitis E:</strong> Caused by consuming contaminated water.</li>
                </ul>
            </>
        )
    },
    {
        question: "Can homeopathy treat hepatitis?",
        answer: "Homeopathy offers supportive treatment for managing hepatitis. Remedies focus on reducing inflammation, relieving symptoms, and improving liver function naturally. Personalized treatment plans are created for each individual's condition."
    },
    {
        question: "What lifestyle changes are recommended for hepatitis patients?",
        answer: (
            <ul>
                <li>- Eating a nutrient-rich diet to support liver health</li>
                <li>- Avoiding alcohol and processed foods</li>
                <li>- Staying hydrated</li>
                <li>- Following prescribed medications or treatments</li>
                <li>- Practicing safe hygiene and avoiding sharing needles</li>
            </ul>
        )
    }
]

export default function HepatitisPage() {
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
              <h1 className="text-4xl font-bold text-[#800000] mb-6">Hepatitis: Types and Treatments</h1>
              {/* 
              <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/hepatitis-types-treatments.jpg"
                  alt="Hepatitis Types and Treatments"
                  fill
                  className="object-cover"
                />
              </div>
              */}

              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
                <h2>Understanding Hepatitis</h2>
                <p>
                  Hepatitis is a condition marked by inflammation of the liver. It can be caused by viral infections, toxins, autoimmune disorders, or alcohol use. Timely diagnosis and treatment are essential to prevent complications like cirrhosis or liver failure.
                </p>

                <h2>Types of Hepatitis</h2>
                <ul>
                  <li><strong>Hepatitis A:</strong> A short-term infection caused by consuming contaminated food or water.</li>
                  <li><strong>Hepatitis B:</strong> A chronic or acute condition spread through bodily fluids.</li>
                  <li><strong>Hepatitis C:</strong> Primarily transmitted via blood contact, often leading to chronic infection.</li>
                  <li><strong>Hepatitis D:</strong> Develops only in individuals infected with hepatitis B.</li>
                  <li><strong>Hepatitis E:</strong> A waterborne virus causing short-term illness.</li>
                </ul>

                <h2>Treatment Approaches</h2>
                <p>
                  Treatment depends on the type and severity of hepatitis. Homeopathy can complement traditional treatments by enhancing liver health and managing symptoms effectively. Vaccination is available for hepatitis A and B, which are preventive measures.
                </p>

                <h3>Homeopathic Approach</h3>
                <ul>
                  <li>Holistic remedies tailored to individual symptoms and health conditions.</li>
                  <li>Focus on reducing inflammation and enhancing detoxification.</li>
                  <li>Supportive care for better digestion and immunity.</li>
                  <li>Prevention of complications through personalized treatment plans.</li>
                </ul>

                <h2>Prevention and Lifestyle Changes</h2>
                <p>
                  Preventive measures and healthy lifestyle choices play a key role in managing hepatitis. Avoid risky behaviors, stay updated on vaccinations, and follow a balanced diet to maintain liver health.
                </p>

                <p>
                  At LiverCure, we provide natural and personalized treatment options to support your recovery from hepatitis. Reach out to us for a consultation and embark on your journey to better liver health.
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
