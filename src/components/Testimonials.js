import React from "react";
import { CommandLineIcon, UsersIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16"
    >
      <div className="container mx-auto text-center">
        <UsersIcon className="w-12 h-12 mx-auto mb-6 text-green-400" />
        <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
        <p className="text-lg mb-12">
          See what my clients have to say about working with me.
        </p>
        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
            hidden: { opacity: 0 },
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <CommandLineIcon className="w-8 h-8 mx-auto mb-4 text-green-400" />
              <p className="text-gray-400 mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-center mr-3"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
