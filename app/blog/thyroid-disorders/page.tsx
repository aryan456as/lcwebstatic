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
        question: "What are thyroid disorders?",
        answer: "Thyroid disorders refer to conditions that affect the thyroid gland, which is responsible for regulating metabolism, energy production, and hormone levels. These disorders can lead to an overproduction or underproduction of thyroid hormones, causing various health issues."
    },
    {
        question: "What are the common symptoms of thyroid disorders?",
        answer: "The symptoms of thyroid disorders vary depending on whether the thyroid is overactive (hyperthyroidism) or underactive (hypothyroidism). Common symptoms include fatigue, weight changes, mood swings, hair loss, and temperature sensitivity."
    },
    {
        question: "How are thyroid disorders diagnosed?",
        answer: "Thyroid disorders are diagnosed through blood tests that measure levels of thyroid hormones such as TSH, T3, and T4. Imaging tests, such as ultrasounds, may also be used to assess the thyroid's structure."
    },
    {
        question: "What treatments are available for thyroid disorders?",
        answer: "Treatment options depend on the type of thyroid disorder. Hypothyroidism is typically treated with thyroid hormone replacement therapy, while hyperthyroidism may require medications, radioactive iodine therapy, or surgery. Homeopathic remedies can also be considered as complementary treatments to support thyroid function."
    }
]

export default function ThyroidDisordersPage() {
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
              <h1 className="text-4xl font-bold text-[#800000] mb-6">Understanding Thyroid Disorders: Symptoms and Treatment</h1>
              
              {/* 
              <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/thyroid-disorders.jpg"
                  alt="Thyroid Disorders"
                  fill
                  className="object-cover"
                />
              </div>
              */}

              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
                <h2>What is a Thyroid Disorder?</h2>
                <p>
                  Thyroid disorders are conditions that affect the thyroid gland, which is a butterfly-shaped organ located in the neck. The thyroid produces hormones that regulate metabolism, energy levels, and overall growth. When the thyroid malfunctions, it can cause a variety of symptoms affecting many body systems.
                </p>

                <h2>Types of Thyroid Disorders</h2>
                <p>
                  The most common thyroid disorders are:
                  <ul>
                    <li><strong>Hypothyroidism:</strong> An underactive thyroid that produces too little thyroid hormone.</li>
                    <li><strong>Hyperthyroidism:</strong> An overactive thyroid that produces too much thyroid hormone.</li>
                    <li><strong>Goiter:</strong> An enlargement of the thyroid gland, often associated with iodine deficiency.</li>
                    <li><strong>Thyroid Nodules:</strong> Lumps that can form in the thyroid, which may be benign or cancerous.</li>
                  </ul>
                </p>

                <h2>Symptoms of Thyroid Disorders</h2>
                <p>
                  The symptoms of thyroid disorders vary based on the condition. For hypothyroidism, common symptoms include:
                  <ul>
                    <li>Fatigue and weakness</li>
                    <li>Weight gain</li>
                    <li>Cold intolerance</li>
                    <li>Dry skin and hair</li>
                    <li>Constipation</li>
                  </ul>
                  For hyperthyroidism, symptoms may include:
                  <ul>
                    <li>Unexplained weight loss</li>
                    <li>Increased heart rate or palpitations</li>
                    <li>Excessive sweating</li>
                    <li>Tremors or shaking</li>
                    <li>Difficulty sleeping</li>
                  </ul>
                </p>

                <h2>Diagnosis and Tests</h2>
                <p>
                  Thyroid disorders are usually diagnosed with blood tests that measure levels of thyroid hormones, such as Thyroid Stimulating Hormone (TSH), T3, and T4. These tests can help identify whether the thyroid is functioning properly or if a disorder is present. Imaging tests like ultrasound or a biopsy may be used if thyroid nodules are suspected.
                </p>

                <h2>Treatment for Thyroid Disorders</h2>
                <p>
                  Treatment for thyroid disorders depends on the type and severity of the condition:
                  <ul>
                    <li><strong>Hypothyroidism:</strong> The primary treatment for hypothyroidism is synthetic thyroid hormone replacement, typically in the form of levothyroxine.</li>
                    <li><strong>Hyperthyroidism:</strong> Treatments for hyperthyroidism may include antithyroid medications, radioactive iodine therapy, or thyroid surgery.</li>
                    <li><strong>Goiter:</strong> Treatment for goiter depends on the cause and may involve iodine supplementation or surgery in severe cases.</li>
                  </ul>
                  Homeopathic remedies can also be used to complement conventional treatments. Remedies may help balance thyroid hormone levels, alleviate symptoms, and improve overall well-being.
                </p>

                <h2>Prevention and Lifestyle</h2>
                <p>
                  While thyroid disorders are often related to genetic factors, lifestyle changes can support thyroid health. Eating a balanced diet, rich in iodine, selenium, and zinc, can help maintain thyroid function. Regular exercise, stress management, and adequate sleep are also essential for optimal thyroid health.
                </p>

                <p>
                  It's important to consult with a healthcare provider to diagnose and manage thyroid disorders effectively. Early detection and treatment can prevent complications and improve quality of life.
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
