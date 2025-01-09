import React from "react";

const Authorcard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn ">
        <img
          src="../images/me.jpg"
          alt="authur"
          className="w-25 h-25 rounded-s-full mr-4 object-cover border-2 border-red-500 "
        />

        <div>
          <h3 className="text-xl font-bold">Jareer Shafiq</h3>
          <p className="text-slate-500">
            {" "}
            Web-developer | Web Desinger | Youtuber{" "}
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed  font-bold">
        Jareer Shafiq is a professianoal  web developer is a skilled professional who designs, builds, and maintains websites and web applications. They specialize in programming languages like HTML, CSS, and JavaScript, ensuring user-friendly designs and functionality. Web developers optimize site performance, implement responsive designs, and often collaborate with designers to create visually appealing, high-performing digital solutions.
      </p>
      <div className="mt-4 flex space-x-3">
      <a href="#"
      className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all ">
        Twitter

      </a>

      <a href="#"
      className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all ">
        Linkedin

      </a>

      <a href="#"
      className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all ">
        GitHub

      </a>
      </div>
    </div>
  );
};

export default Authorcard;
