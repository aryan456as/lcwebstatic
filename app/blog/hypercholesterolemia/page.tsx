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
        question: "What is hypercholesterolemia?",
        answer: "Hypercholesterolemia is a condition characterized by high levels of cholesterol in the blood. This condition can increase the risk of cardiovascular diseases, liver damage, and other health complications. It often results from poor diet, lack of exercise, and genetic factors."
    },
    {
        question: "How does hypercholesterolemia affect liver health?",
        answer: "The liver plays a key role in regulating cholesterol levels in the body. When cholesterol levels are too high, the liver can become overwhelmed and struggle to manage excess cholesterol. This can lead to fatty liver disease, liver inflammation, and an increased risk of cirrhosis over time."
    },
    {
        question: "Can homeopathy treat hypercholesterolemia?",
        answer: "Yes, homeopathy can help manage hypercholesterolemia by addressing the root causes and improving liver function. Remedies are chosen based on individual symptoms, overall health, and specific cholesterol imbalances, promoting a holistic approach to treatment."
    },
    {
        question: "What lifestyle changes can help lower cholesterol and protect liver health?",
        answer: (
            <ul>
                <li>- Adopting a heart-healthy diet rich in fruits, vegetables, and healthy fats</li>
                <li>- Engaging in regular physical activity to improve cholesterol metabolism</li>
                <li>- Avoiding excessive alcohol and processed foods</li>
                <li>- Maintaining a healthy weight</li>
                <li>- Monitoring cholesterol levels regularly through medical checkups</li>
            </ul>
        )
    }
]

export default function HypercholesterolemiaPage() {
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
              <h1 className="text-4xl font-bold text-[#800000] mb-6">Hypercholesterolemia and Liver Health</h1>
              
              {/* <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/hypercholesterolemia-liver-health.jpg"
                  alt="Hypercholesterolemia and Liver Health"
                  fill
                  className="object-cover"
                />
              </div> */}

              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
                <h2>Understanding Hypercholesterolemia</h2>
                <p>
                  Hypercholesterolemia refers to high cholesterol levels in the blood, which can lead to various health problems. It is a major risk factor for heart disease, but it can also have significant effects on liver health. The liver is essential in metabolizing cholesterol, and an overload can cause serious damage.
                </p>

                <h2>Impact on Liver Health</h2>
                <p>
                  When cholesterol levels rise significantly, it can overwhelm the liver's capacity to process excess fat, leading to fatty liver disease. Over time, this condition can escalate into inflammation and even cirrhosis if not managed properly.
                </p>

                <h2>Cholesterol and Fatty Liver Disease</h2>
                <p>
                  Fatty liver disease occurs when fat builds up in the liver cells. This condition is commonly seen in individuals with hypercholesterolemia and can lead to liver dysfunction. The liver's ability to detoxify and manage cholesterol is impaired, which can increase the risk of further liver damage.
                </p>

                <h2>Treatment and Management</h2>
                <p>
                  Managing hypercholesterolemia involves both lifestyle modifications and medical interventions. Homeopathic remedies can be helpful in improving liver function, supporting cholesterol metabolism, and reducing inflammation naturally. It’s important to work with a healthcare professional to tailor a treatment plan based on individual needs.
                </p>

                <h3>Homeopathic Approach</h3>
                <ul>
                  <li>Improving cholesterol metabolism and liver detoxification</li>
                  <li>Reducing inflammation and enhancing liver function</li>
                  <li>Addressing underlying causes such as stress or poor diet</li>
                  <li>Personalized remedies to support overall well-being</li>
                </ul>

                <h2>Prevention and Lifestyle Changes</h2>
                <p>
                  Preventing and managing hypercholesterolemia involves adopting a healthy lifestyle. Eating a diet rich in fiber, healthy fats, and antioxidants can help regulate cholesterol levels. Regular physical activity is essential for maintaining a healthy weight and boosting heart and liver health.
                </p>

                <p>
                  At LiverCure, we focus on treating the root causes of hypercholesterolemia and its impact on liver health. Through a combination of homeopathic remedies, diet, and lifestyle changes, we help patients maintain a healthy liver and control cholesterol levels naturally.
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
