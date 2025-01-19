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
        question: "What is liver cirrhosis?",
        answer: "Liver cirrhosis is a late-stage liver condition characterized by the progressive scarring (fibrosis) of liver tissue. This scarring occurs when the liver tries to repair itself after long-term damage caused by various diseases or chronic conditions. As healthy liver cells are replaced by scar tissue, the liver's ability to function properly diminishes."
    },
    {
        question: "Can homeopathy treat liver cirrhosis?",
        answer: "Yes, homeopathy offers a natural, holistic approach to managing liver cirrhosis. While homeopathy may not reverse the scar tissue, it can help slow the progression of the disease, manage symptoms, and improve liver function. Homeopathic remedies are chosen based on your specific symptoms and overall health, promoting the body's natural healing abilities."
    },
    {
        question: "What are the symptoms of liver cirrhosis?",
        answer: (
            <>
                <p>Common symptoms include:</p>
                <ul>
                    <li>-Fatigue and Weakness</li>
                    <li>-Jaundice (yellowing of the skin and eyes)</li>
                    <li>-Abdominal swelling (ascites)</li>
                    <li>-Loss of Appetite</li>
                    <li>-Nausea and Vomiting</li>
                    <li>-Easy Bruising or Bleeding</li>
                </ul>
            </>
        )
    },
    {
        question: "What lifestyle changes can help manage liver cirrhosis?",
        answer: (
            <ul>
                <li>-Following a healthy, balanced diet rich in fruits, vegetables, and lean proteins</li>
                <li>-Avoiding alcohol and processed foods</li>
                <li>-Staying hydrated</li>
                <li>-Regularly engaging in moderate physical activity</li>
                <li>-Managing stress through relaxation techniques</li>
            </ul>
        )
    }
]

export default function LiverCirrhosisPage() {
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
              <h1 className="text-4xl font-bold text-[#800000] mb-6">Understanding Liver Cirrhosis</h1>
              
                {/* <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/cirrhosis.jpg"
                  alt="Liver Cirrhosis Comparison"
                  fill
                  className="object-cover"
                />
                </div> */}

              <div className="prose max-w-none prose-headings:text-[#800000] prose-a:text-[#FFA500] hover:prose-a:text-[#800000]">
               
             
                <h2>What is Liver Cirrhosis?</h2>
                <p>
                  Liver cirrhosis is a chronic condition where healthy liver tissue is gradually replaced by scar tissue, impairing the liver's ability to function. This progressive condition can result from various factors and requires proper medical attention and lifestyle modifications.
                </p>

                <h2>Common Causes</h2>
                <ul>
                  <li>Alcohol Abuse</li>
                  <li>Viral Hepatitis</li>
                  <li>Fatty Liver Disease</li>
                </ul>

                <p>
                  Early intervention is crucial in preventing irreversible damage and maintaining quality of life. Our homeopathic treatments are designed to address the underlying causes of liver cirrhosis and help restore liver health naturally.
                </p>

<h2>Symptoms of Liver Cirrhosis:</h2>
<ul>  
<li>Fatigue and Weakness</li>
<li>Jaundice (yellowing of the skin and eyes) Abdominal Swelling (ascites) </li>
<li>Loss of Appetite </li>
<li>Nausea and Vomiting </li>
<li>Easy Bruising or Bleeding </li>
</ul>
                <h2>Treatment Approach at LiverCure</h2>
                <p>
                  Our homeopathic treatment for liver cirrhosis focuses on supporting the liver's natural healing process and preventing further damage. Each patient receives a personalized treatment plan based on their specific condition, symptoms, and overall health.
                </p>

                <h3>Key Elements of Treatment</h3>
                <ul>
                  <li>Personalized Remedies: Selected based on individual symptoms and constitution</li>
                  <li>Liver Detoxification: Focus on eliminating toxins and enhancing liver function</li>
                  <li>Symptom Management: Addressing fatigue, digestive issues, and discomfort</li>
                  <li>Prevention of Complications: Supporting liver regeneration</li>
                </ul>
<p>For those seeking the liver cirrhosis best treatment in India, our holistic approach ensures personalized care and effective management of the condition.
</p>
                <h2>Effective Homeopathic Treatment for Liver Cirrhosis: Comprehensive Care in India </h2>
                  <p>At LiverCure, we provide specialized homeopathic treatment for liver cirrhosis, a condition that can lead to severe liver damage if not managed properly. Our holistic approach aims to support liver function, reduce symptoms, and prevent further progression of the disease.
                     We offer the best liver cirrhosis treatment in India, focusing on natural remedies that stimulate the body’s healing mechanisms without harmful side effects.</p>


                   <h2>Liver Cirrhosis Best Treatment in India:</h2>  
<p>At LiverCure, we take pride in offering one of the best homeopathic treatments for liver cirrhosis in India. Our approach is rooted in a deep understanding of the body’s natural healing capacity, and we tailor our treatments to each patient’s unique condition. Whether you’re in the early stages of cirrhosis or managing advanced symptoms, our treatments are designed to provide relief, promote liver health, and enhance your quality of life.</p>
<h2>Why Choose Us for Liver Cirrhosis Treatment?</h2>
<ul>
  <li>Expertise in Homeopathy: With years of experience treating liver conditions, our homeopathic practitioners are skilled at diagnosing and managing cirrhosis using natural remedies.</li>
<li>Holistic Care: We don’t just treat the symptoms; we address the root causes of liver cirrhosis to promote long-term health and recovery.</li>
<li>Customized Treatment Plans: Every patient receives a personalized treatment plan tailored to their specific needs.</li>
</ul>     

<h2>Your Path to Recovery</h2>
<p>At LiverCure, we believe in providing patients with a path to recovery that is safe, natural, and effective. Our homeopathic treatments for liver cirrhosis are designed to help you manage your symptoms, improve liver function, and live a healthier, more vibrant life.</p>
<p>
With our comprehensive care, you can expect compassionate support and a treatment plan that addresses your unique needs.</p>
<p>
If you or a loved one is suffering from liver cirrhosis, don’t wait for the condition to worsen. Contact LiverCure today to schedule a consultation and learn more about how our personalized homeopathic treatments can help manage liver cirrhosis and support liver health. We are committed to providing the best liver cirrhosis treatment in India through our natural and holistic approach.</p>
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

