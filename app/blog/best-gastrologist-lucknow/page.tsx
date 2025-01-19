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
  question: "What conditions does a gastroenterologist treat?",
  answer: (<>
    <p>A gastroenterologist treats various conditions including: </p>
  <ul>
  <li>• Liver diseases</li>
  <li>• Digestive disorders</li>
  <li>• Gastrointestinal issues</li>
  <li>• Hepatitis</li>
  <li>• Cirrhosis</li>
  <li>• Inflammatory bowel disease</li>
  <li>• Acid reflux and GERD</li>
  </ul> </>)
},
{
  question: "Why choose LiverCure's gastrologist in Lucknow ?",
  answer: "Our gastrologist combines modern medical knowledge with traditional homeopathic approaches, offering comprehensive care for liver and digestive issues. With years of experience and a patient-centered approach, we provide personalized treatment plans tailored to each individual's needs."
},
{
  question: "What diagnostic services are available?",
  answer: (<>
    <p>We offer comprehensive diagnostic services including:</p>
    <ul>
    <li>• Fibroscan</li>
    <li>• Liver function tests</li>
    <li>• Ultrasound scanning</li>
    <li>• Endoscopy</li>
    <li>• Blood tests</li>
    <li>• Nutritional assessments</li>
  <li>• Homeopathic consultations</li>
  </ul>
  </>)
},
{
  question: "How can I book an appointment?",
  answer: "You can book an appointment through our website's booking system, by calling our clinic directly, or by visiting our locations in Indira Nagar or near SGPGI, Lucknow. We offer both in-person and online consultations for patient convenience."
}
]

export default function BestGastrologistLucknow() {
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
            <h1 className="text-4xl font-bold text-[#800000] mb-4">Best Gastroenterologist in Lucknow Uttar Pradesh</h1>
            <p className="text-xl text-[#FFA500] mb-8">Discover Comprehensive Liver Care with Our Expert Gastroenterologist in Lucknow</p>
            
            {/* <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
              src="/gastroentrologist.jpg"
              alt="Best Gastroenterologist in Lucknow"
              fill
              className="object-cover"
              />
            </div> */}

            <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
              <h2>Expert Gastrological Care in Lucknow</h2>
              <p>
                At LiverCure, we pride ourselves on providing exceptional gastrological care through our experienced specialists. Our clinic in Lucknow offers comprehensive treatment for various liver and digestive system conditions, combining modern medical knowledge with traditional homeopathic approaches.
              </p>

              <h2>Our Expertise</h2>
              <ul>
                <li>Liver Disease Treatment</li>
                <li>Digestive Disorder Management</li>
                <li>Hepatitis Care</li>
                <li>Cirrhosis Treatment</li>
                <li>Gastrointestinal Health</li>
                <li>Preventive Care</li>
              </ul>

              <h2>Why Choose Our Gastroenterologist ?</h2>
              <ul>
                <li>Years of Specialized Experience</li>
                <li>Comprehensive Treatment Approach</li>
                <li>State-of-the-Art Facilities</li>
                <li>Personalized Care Plans</li>
                <li>Integration of Homeopathic Methods</li>
                <li>Proven Track Record of Success</li>
              </ul>

              <h2>Our Locations in Lucknow</h2>
              <p>We offer our services at two convenient locations in Lucknow:</p>
              <ul>
                <li>Indira Nagar: Sai Plaza, First Floor, B-Block Chauraha</li>
                <li>SGPGI: Shop No 1, Hotel Kunti International, Near SGPGI</li>
              </ul>

              <h2>Treatment Approach</h2>
              <p>
                Our gastroenterologist takes a holistic approach to treatment, considering not just the symptoms but the underlying causes of gastrointestinal and liver conditions. We combine modern diagnostic tools with traditional homeopathic wisdom to provide the most effective treatment plans.
              </p>

              <h3>Our Services Include:</h3>
              <ul>
                <li>Comprehensive Health Assessments</li>
                <li>Advanced Diagnostic Services</li>
                <li>Personalized Treatment Plans</li>
                <li>Regular Monitoring and Follow-up</li>
                <li>Dietary and Lifestyle Guidance</li>
                <li>Preventive Care Recommendations</li>
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

