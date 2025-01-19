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
        question: "What is alcoholic liver disease (ALD)?",
        answer: "Alcoholic liver disease (ALD) is a liver condition caused by excessive alcohol consumption. It progresses through various stages, ranging from mild inflammation to severe liver damage such as cirrhosis."
    },
    {
        question: "Can homeopathy treat alcoholic liver disease?",
        answer: "Yes, homeopathy provides a holistic approach to managing ALD. It focuses on supporting liver function, reducing inflammation, and preventing further progression of the disease. Homeopathic remedies are personalized based on an individual’s symptoms and health status."
    },
    {
        question: "What are the symptoms of alcoholic liver disease?",
        answer: (
            <>
                <p>Symptoms vary based on the stage and may include:</p>
                <ul>
                    <li>-Fatigue and weakness</li>
                    <li>-Loss of appetite</li>
                    <li>-Jaundice</li>
                    <li>-Abdominal pain and swelling</li>
                    <li>-Nausea and vomiting</li>
                    <li>-Easy bruising</li>
                </ul>
            </>
        )
    },
    {
        question: "What lifestyle changes are recommended for ALD?",
        answer: (
            <ul>
                <li>-Complete cessation of alcohol consumption</li>
                <li>-Following a balanced, liver-friendly diet</li>
                <li>-Staying hydrated</li>
                <li>-Engaging in regular physical activity</li>
                <li>-Avoiding processed and high-fat foods</li>
            </ul>
        )
    }
]

export default function AlcoholicLiverDiseasePage() {
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
              <h1 className="text-4xl font-bold text-[#800000] mb-6">Alcoholic Liver Disease: Stages and Treatment</h1>
              <p className="text-xl text-[#FFA500] mb-8">Discover the progression of alcoholic liver disease and how homeopathic treatment can help. </p>
              
                {/* 
                <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/alcohol-liver-disease.png"
                  alt="Alcoholic Liver Disease"
                  fill
                  className="object-cover"
                />
                </div>
                */}

              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
                <h2>Understanding Alcoholic Liver Disease</h2>
                <p>
                  Alcoholic liver disease (ALD) results from prolonged and excessive alcohol consumption, leading to liver inflammation and damage. If left untreated, it can progress to more severe conditions, such as cirrhosis or liver failure.
                </p>

                <h2>Stages of ALD</h2>
                <ul>
                  <li><strong>Alcoholic Fatty Liver:</strong> The earliest stage, characterized by fat accumulation in the liver.</li>
                  <li><strong>Alcoholic Hepatitis:</strong> Inflammation of liver tissues, often accompanied by pain and jaundice.</li>
                  <li><strong>Alcoholic Cirrhosis:</strong> The most severe stage, involving extensive scarring and irreversible damage to the liver.</li>
                </ul>

                <p>
                  Early intervention is key to halting the progression of ALD. Homeopathic treatments focus on promoting liver healing, reducing inflammation, and managing symptoms effectively.
                </p>

                <h2>Our Homeopathic Treatment Approach</h2>
                <p>
                  At LiverCure, we offer a comprehensive treatment plan for ALD that addresses both symptoms and underlying causes. Our personalized remedies aim to enhance liver function and support natural recovery.
                </p>

                <h3>Key Elements of Treatment</h3>
                <ul>
                  <li>Customized Remedies: Tailored to individual symptoms and health conditions.</li>
                  <li>Detoxification Support: Promoting the elimination of toxins from the liver.</li>
                  <li>Symptom Management: Addressing fatigue, inflammation, and digestive issues.</li>
                  <li>Preventing Progression: Supporting liver regeneration and preventing further damage.</li>
                </ul>

                <h2>Your Path to Recovery</h2>
                <p>
                  If you or a loved one is battling ALD, our natural and holistic treatments provide a safe path to recovery. Contact LiverCure today to schedule a consultation and begin your journey to improved liver health.
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
