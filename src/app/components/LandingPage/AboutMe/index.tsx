import React from "react";

const AboutMe = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center gap-5 my-20 text-center">
        <p className="text-2xl text-purple-300">{"{/}"}</p>
        <h1 className="text-4xl md:text-6xl">{"<about_me>"}</h1>
        <p className="text-xl text-yellow-300 md:w-[800px] mx-auto">
          ...A full stack developer is a versatile professional proficient in
          both front-end and back-end technologies, capable of designing,
          developing, and maintaining complete web applications.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-5 text-lg border-t border-r border-gray-600">
          ...as a 2-year full stack developer with 4 years of experience as a
          front-end developer, I have cultivated a strong skill set in ReactJS,
          NestJS, and Next.js. With my expertise in these technologies, I am
          proficient in building dynamic and responsive web applications from
          scratch.
        </div>
        <div className="flex-1 p-5 text-yellow-300 border-t border-l border-gray-600">
          ...as a seasoned full stack developer, I have successfully completed
          multiple projects using ReactJS, Next.js, and NestJS, two notable
          examples being Ticketnation Philippines and Pahiram.Ph. In the
          development of Ticketnation Philippines, I employed ReactJS to create
          an engaging user interface and integrated Next.js to optimize
          performance and SEO. Additionally, I utilized NestJS to build a robust
          backend with efficient APIs for seamless ticket purchasing and
          management. Similarly, in the case of Pahiram.Ph, I leveraged my full
          stack expertise to develop an intuitive user interface using ReactJS
          and Next.js, while implementing NestJS for secure backend
          functionalities and database integration. These projects exemplify my
          ability to deliver comprehensive web solutions using cutting-edge
          technologies, ensuring optimal user experiences and efficient system
          performance.
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-5 py-2 text-2xl bg-sky-400">{`{read_more}`}</button>
      </div>
    </div>
  );
};

export default AboutMe;
