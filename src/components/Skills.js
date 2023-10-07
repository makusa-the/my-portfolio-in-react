import React from "react";
import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/20/solid";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-r from-blue-400 to-indigo-600 py-16 text-white">
      <div className="container mx-auto text-center">
        <CpuChipIcon className="w-12 h-12 mx-auto mb-6 text-green-400" />
        <h1 className="text-4xl font-bold mb-6">My Skills & Technologies</h1>
        <p className="text-lg mb-12">
          Here are some of the skills and technologies I specialize in.
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition duration-300"
            >
              <CheckBadgeIcon className="w-8 h-8 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2">{skill}</h3>
              <p className="text-gray-400">Expertise Level</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
