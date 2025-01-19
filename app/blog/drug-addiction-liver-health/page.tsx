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
  question: "How does drug use affect the liver?",
  answer: "Drug use can damage the liver in multiple ways: direct toxicity to liver cells, inflammation, reduced blood flow, and metabolic changes. Different drugs affect the liver differently, but most can cause both acute and chronic liver damage."
},
{
  question: "Can liver damage from drugs be reversed?",
  answer: "In many cases, early liver damage can be reversed if drug use is stopped and proper treatment is received. However, long-term drug use leading to cirrhosis may cause permanent damage. Early intervention is crucial for the best outcomes."
},
{
  question: "What are the signs of liver damage from drugs?",
  answer: (
    <>
        <p>Common signs include:</p>
        <ul>
            <li>-Jaundice (yellowing of skin/eyes)</li>
            <li>-Abdominal pain</li>
            <li>-Fatigue</li>
            <li>-Nausea and vomiting</li>
            <li>-Dark urine</li>
            <li>-Loss of appetite</li>
            <li>-Mental confusion</li>
        </ul>
    </>)
},
{
  question: "How can homeopathy help in recovery?",
  answer: "Homeopathic treatment supports liver healing through natural remedies that help detoxification, reduce inflammation, and support liver function. Combined with addiction treatment and lifestyle changes, it can aid in comprehensive recovery."
}
]

export default function DrugAddictionLiverHealth() {
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
            <h1 className="text-4xl font-bold text-[#800000] mb-6">Drug Addiction and Liver Health</h1>
            <p className="text-xl text-[#FFA500] mb-8"> Understanding the Impact</p>
            {/* 
            <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
              src="/drug_addiction.jpg"
              alt="Drug Addiction and Liver Impact"
              fill
              className="object-cover"
              />
            </div>
            */}

            <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
              <h2>The Connection Between Drug Use and Liver Health</h2>
              <p>
                The liver plays a crucial role in processing and filtering toxins from the body. Drug use, whether prescription or illicit, can significantly impact liver function and health. Understanding this relationship is essential for both prevention and treatment.
              </p>

              <h2>Types of Liver Damage from Drug Use</h2>
              <h3>1. Acute Liver Injury</h3>
              <ul>
                <li>Sudden onset of liver dysfunction</li>
                <li>Often reversible if caught early</li>
                <li>Can be severe or life-threatening</li>
                <li>Requires immediate medical attention</li>
              </ul>

              <h3>2. Chronic Liver Damage</h3>
              <ul>
                <li>Develops over time with continued drug use</li>
                <li>Can lead to cirrhosis</li>
                <li>May be permanent</li>
                <li>Requires long-term management</li>
              </ul>

              <h2>Common Drugs Affecting Liver Health</h2>
              <ul>
                <li>Prescription medications</li>
                <li>Over-the-counter drugs</li>
                <li>Illicit substances</li>
                <li>Herbal supplements (when misused)</li>
              </ul>

              <h2>Treatment Approach</h2>
              <p>
                Our comprehensive treatment plan includes:
              </p>
              <ul>
                <li>Liver function assessment</li>
                <li>Personalized homeopathic remedies</li>
                <li>Detoxification support</li>
                <li>Addiction recovery guidance</li>
                <li>Nutritional counseling</li>
                <li>Regular monitoring</li>
              </ul>

              <h2>Prevention and Recovery</h2>
              <p>
                Key steps for protecting liver health:
              </p>
              <ul>
                <li>Avoiding harmful substances</li>
                <li>Following prescribed medication guidelines</li>
                <li>Regular liver function monitoring</li>
                <li>Maintaining a healthy lifestyle</li>
                <li>Seeking early intervention</li>
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

