"use client"

import { useEffect } from 'react';
import Header from '../../components/Header'; // Adjust the import path as needed
import Footer from '../../components/Footer'; // Adjust the import path as needed
import { motion } from 'framer-motion';
import { CreditCard, Shield } from 'lucide-react';

const PaymentPage = () => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    const Form = document.getElementById('donateForm');

    // Load Razorpay Payment Button Script
    const existingScript = Form.querySelector(
        "script[src='https://checkout.razorpay.com/v1/payment-button.js']"
      );
      if (!existingScript) {
    const Script = document.createElement('script');
    Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js');
    Script.setAttribute('data-payment_button_id', 'pl_Pka1duLyl1ufbr'); // Replace with actual ID


    if (Form) {
      Form.appendChild(Script);
    }
      }
    // Cleanup function
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md mx-auto border border-gray-200"
        >
          <div className="flex items-center justify-center mb-8">
            <CreditCard className="w-10 h-10 text-[#800000] mr-3" />
            <h2 className="text-3xl font-bold text-[#800000]">Secure Payment</h2>
          </div>
          <div className="bg-[#FFA500]/10 p-4 rounded-xl mb-8 border border-[#FFA500]/20">
            <div className="flex items-center justify-center text-[#800000]">
              <Shield className="w-5 h-5 mr-2" />
              <p className="text-sm font-medium">
                Your transaction is protected by Razorpay
              </p>
            </div>
          </div>
          <form
            id="donateForm"
            className="w-full flex justify-center items-center"
          ></form>
          <p className="mt-6 text-center text-sm text-gray-500">
            By proceeding, you agree to our <a href="#" className="text-[#800000] hover:underline">Terms of Service</a>
          </p>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};  

export default PaymentPage;
