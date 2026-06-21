import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionHeading from "../SectionHeading";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm("service_ukulznu", "template_nxyu0o8", form.current, "-uqvuhOrUB16vio7W");
      form.current.reset();
      toast.success("Message sent. I’ll get back to you soon.");
    } catch {
      toast.error("The message couldn’t be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-white/[.06] bg-white/[.015]">
      <ToastContainer position="bottom-right" theme="dark" toastClassName="!rounded-2xl !border !border-white/10 !bg-[#0b111a] !text-sm" />
      <div className="section-shell">
        <div className="surface overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#66f3d1]/10 blur-[90px]" />
              <SectionHeading eyebrow="Contact" title={<>Let&apos;s build<br />something useful.</>} copy="Have an opportunity, a product idea, or a difficult technical problem? Send the details and let’s start with a focused conversation." />

              <div className="mt-10 space-y-4 text-sm text-slate-400">
                {["Open to full-time roles", "Available for product collaborations", "Usually responds within 24–48 hours"].map((item) => (
                  <p key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#66f3d1]/10 text-[#66f3d1]"><FiCheck /></span>{item}</p>
                ))}
              </div>

              <div className="mt-12 flex gap-3">
                <a href="https://github.com/Satyam5016" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#66f3d1]/35 hover:text-[#66f3d1]"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/satyam-yadav-7bb434263/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#66f3d1]/35 hover:text-[#66f3d1]"><FaLinkedinIn /></a>
              </div>
            </div>

            <motion.form ref={form} onSubmit={sendEmail} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} className="p-7 sm:p-10 lg:p-14">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-xs font-bold text-slate-300">Name
                  <input name="user_name" required placeholder="Your name" className="mt-3 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#66f3d1]" />
                </label>
                <label className="block text-xs font-bold text-slate-300">Email
                  <input type="email" name="user_email" required placeholder="you@example.com" className="mt-3 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#66f3d1]" />
                </label>
              </div>
              <label className="mt-7 block text-xs font-bold text-slate-300">Subject
                <input name="subject" required placeholder="What would you like to discuss?" className="mt-3 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-[#66f3d1]" />
              </label>
              <label className="mt-7 block text-xs font-bold text-slate-300">Message
                <textarea name="message" required rows="5" placeholder="A little context goes a long way..." className="mt-3 w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm leading-7 text-white outline-none transition placeholder:text-slate-700 focus:border-[#66f3d1]" />
              </label>
              <button type="submit" disabled={isSubmitting} className="primary-button mt-9 disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? "Sending..." : "Send message"} {isSubmitting ? <FiSend className="animate-pulse" /> : <FiArrowUpRight />}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
