import React from "react";

const ContactMe = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center gap-5 my-20 text-center">
        <p className="text-2xl text-purple-300">(*)</p>
        <h1 className="text-4xl md:text-6xl">{"<connect_with_me>"}</h1>
        <p className="text-xl text-yellow-300 md:w-[800px] mx-auto">
          ...Ready to turn your ideas into reality? Let's work together to
          create exceptional digital experiences. Whether you're looking for a
          React developer, want to discuss potential projects, or just want to
          say hello, I'm here and excited to connect. Feel free to reach out,
          and let's explore the possibilities.
        </p>
      </div>
      <div className="text-center">
        <div className="px-5 py-10 text-5xl transition-all duration-300 bg-opacity-50 border border-gray-600 hover:bg-green-500">
          {"{"}"Front End Developer"{"}"}
        </div>
        <div className="px-5 py-10 text-5xl transition-all duration-300 bg-opacity-50 border border-gray-600 hover:bg-blue-500">
          {"{"}"Full Stack Developer"{"}"}
        </div>
        <div className="px-5 py-10 text-5xl transition-all duration-300 bg-opacity-50 border border-gray-600 hover:bg-cyan-500">
          {"{"}"Web Developer"{"}"}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
