"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { CreditCard, Shield } from "lucide-react";
import PaymentButtonSkeleton from "../../components/PaymentButtonSkeleton";

const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState(false);  // New error state


  useEffect(() => {
    const loadRazorpayButton = () => {
      const Form = document.getElementById("donateForm");
      if (Form) {
        // Check if script already exists
        const existingScript = Form.querySelector(
          "script[src='https://checkout.razorpay.com/v1/payment-button.js']"
        );

        if (!existingScript) {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/payment-button.js";
          script.setAttribute("data-payment_button_id", "pl_Pka1duLyl1ufbr");

          script.onload = () => {
            setHasLoaded(true);  // Indicate that Razorpay button has loaded
          };

          Form.appendChild(script);
        } else {
          setHasLoaded(true);  // If the script is already there, we mark it as loaded
        }
      }
    };

    // Show the skeleton for at least 2 seconds
    const skeletonTimeout = setTimeout(() => {
      setIsLoading(false);
      setError(true);  // Show error after timeout

    }, 9000); // Set 2-second delay

    loadRazorpayButton();

    return () => {
      clearTimeout(skeletonTimeout);  // Clean up timeout on component unmount
      const script = document.querySelector(
        "script[src='https://checkout.razorpay.com/v1/payment-button.js']"
      );
      if (script) script.remove();
    };
  }, []);
  useEffect(() => {
    if (hasLoaded) {
      setIsLoading(false);  // Stop loading as soon as the button is loaded
    }
  }, [hasLoaded]);

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
          <div className="min-h-[60px] relative">
            {isLoading && !error && (
               <motion.div
               initial={{ opacity: 1 }}
               animate={{ opacity: 0 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.9 }}
               className="absolute inset-0 z-10 w-full flex justify-center items-center" >
                <PaymentButtonSkeleton />
                </motion.div>
            )}
            {error && !hasLoaded && (
              <div className="absolute inset-0 z-10 w-full flex justify-center items-center">
                <p className="text-red-500">Something went wrong, please refresh the page.</p>
              </div>
            )}
            <motion.form
                id="donateForm"
              className={`w-full flex justify-center items-center ${isLoading || !hasLoaded ? "opacity-0" : "opacity-100"}`}
              style={{ height: "60px" }}  // Set a fixed height to match the skeleton height
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            By proceeding, you agree to our{" "}
            <a href="#" className="text-[#800000] hover:underline">
              Terms of Service
            </a>
          </p>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};

export default PaymentPage;
