'use client'

import { motion } from 'framer-motion'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#800000] mb-4">
              Appointment Scheduled Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for scheduling an appointment. You will be contacted soon!
            </p>
            <Link href="/">
              <motion.button
                className="bg-[#800000] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFA500] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Return to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

