import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission, like sending an email or saving data.
    // For now, let's display a success message with animations.
    setSubmissionMessage("Thanks for reaching out! We'll get back to you soon.");

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Scroll to the success message
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-16"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        <p className="text-lg max-w-prose mx-auto mb-8">
          Have a question or project in mind? Drop me a message, and I'll get back to you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 h-36 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold transition duration-300 transform hover:scale-105 focus:outline-none"
          >
            Send Message
          </button>
        </form>
        {submissionMessage && (
          <motion.div
            className="mt-8 text-xl font-semibold text-green-400"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            {submissionMessage}
          </motion.div>
        )}
      </div>
    </section>
  );
}
