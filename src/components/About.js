import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="./profile-pic.png"
          alt="Innocent Makusa"
          className="rounded-full w-32 h-32 mb-4 border-4 border-white"
        />
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Innocent Makusa</h1>
        <p className="text-lg text-center max-w-prose mb-8">
          A<span className="text-pink-500"> passionate</span> web developer{" "}
          <span className="text-yellow-500">crafting</span> delightful{" "}
          <span className="text-green-500">online experiences</span>. I thrive on{" "}
          <span className="text-blue-400">creative challenges</span> and enjoy{" "}
          <span className="text-purple-500">solving complex problems</span> with{" "}
          <span className="text-indigo-500">elegant solutions</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg shadow-md bg-white text-gray-900 text-center">
            <h2 className="text-xl font-semibold mb-2">My Mission</h2>
            <p>
              To <span className="text-pink-500">inspire</span> and{" "}
              <span className="text-blue-400">empower</span> others by{" "}
              <span className="text-yellow-500">sharing knowledge</span> and{" "}
              <span className="text-green-500">creating exceptional</span>{" "}
              <span className="text-purple-500">web solutions</span>.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-white text-gray-900 text-center">
            <h2 className="text-xl font-semibold mb-2">My Hobbies</h2>
            <p>
              When I'm not coding, you can find me <span className="text-blue-400">exploring</span> the outdoors,{" "}
              <span className="text-green-500">reading sci-fi novels</span>,{" "}
              <span className="text-pink-500">strumming my guitar</span>, or{" "}
              <span className="text-yellow-500">baking</span> delicious{" "}
              <span className="text-indigo-500">desserts</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
