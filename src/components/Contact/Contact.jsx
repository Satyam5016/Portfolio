import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ukulznu",
        "template_nxyu0o8",
        form.current,
        "-uqvuhOrUB16vio7W"
      )
      .then(
        () => {
          setIsSent(true);
          setIsSubmitting(false);
          form.current.reset();
          toast.success("Message sent successfully! ✨", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="section-padding relative">
      <ToastContainer toastClassName="!bg-[#0a0921] !text-white !border !border-white/10 !rounded-xl" />

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          <span className="text-white">Let's </span>
          <span className="gradient-text">Connect</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full mt-4"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          Open for opportunities and exciting projects. Let's build something amazing together.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-xl mx-auto glass-card p-8 md:p-10 rounded-3xl relative z-10"
      >
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="user_name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="John Doe"
              required
              className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="user_email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="john@example.com"
              required
              className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              required
              className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 resize-none custom-scrollbar"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-accent to-accent-dark py-4 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(130,69,236,0.4)] transition-all duration-300 flex justify-center mt-4 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && (
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              )}
            </span>
            {/* Button Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

