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
  question: "How is hepatitis transmitted?",
  answer: `Hepatitis can be transmitted through various means including:
  • Unprotected sexual contact with an infected person
  • Sharing needles or other drug-injecting equipment
  • Mother-to-child transmission during childbirth
  • Contact with blood or open sores of an infected person`
},
{
  question: "What are the common symptoms of hepatitis?",
  answer: `Common symptoms include:
  • Fatigue
  • Jaundice (yellowing of the skin and eyes)
  • Abdominal pain
  • Dark urine
  • Loss of appetite
  • Nausea and vomiting`
},
{
  question: "Is there a cure for hepatitis?",
  answer: "Treatment options vary depending on the type of hepatitis. While some forms can be cured with proper treatment, others may require long-term management. Our homeopathic approach focuses on supporting liver function and managing symptoms effectively."
},
{
  question: "How can I prevent hepatitis?",
  answer: `Prevention methods include:
  • Getting vaccinated (for Hepatitis A and B)
  • Practicing safe sex
  • Never sharing needles
  • Maintaining good hygiene
  • Regular health check-ups`
}
]

export default function UnderstandingHepatitis() {
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
            <h1 className="text-4xl font-bold text-[#800000] mb-6">Understanding Hepatitis B and C: Causes, Symptoms, and Treatment</h1>
            
            {/* <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src = "/hepatitis-virus-liver.jpg"
                alt="Hepatitis Virus and Liver"
                fill
                className="object-cover"
              />
            </div> */}

            <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
              <h2>What is Hepatitis?</h2>
              <p>
                Hepatitis B and C are viral infections that primarily affect the liver, causing inflammation and potentially leading to severe health complications. Both diseases are of significant global concern due to their high prevalence and the potential for long-term liver damage.
              </p>

              <h2>Hepatitis B</h2>
              <p>
                Hepatitis B is a viral infection caused by the hepatitis B virus (HBV) that attacks the liver and can cause both acute and chronic disease. Some people with hepatitis B never clear the virus, and many of these people appear healthy but can spread the virus to others.
              </p>

              <h3>Transmission Routes</h3>
              <ul>
                <li>Unprotected sexual contact</li>
                <li>Sharing needles</li>
                <li>Mother-to-child transmission</li>
                <li>Contact with infected blood</li>
              </ul>

              <h2>Hepatitis C</h2>
              <p>
                Hepatitis C is a contagious liver disease that ranges in severity from a mild illness lasting a few weeks to a serious, lifelong illness that attacks the liver. Unlike Hepatitis B, there is no vaccine for Hepatitis C.
              </p>

              <h3>Common Transmission Routes</h3>
              <ul>
                <li>Sharing contaminated needles during drug use</li>
                <li>Receiving unsafe blood transfusions or organ transplants</li>
                <li>Exposure to infected blood in healthcare settings</li>
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

