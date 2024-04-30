import React from "react";
import Image1 from "../../public/webhub/1.png";
import Image2 from "../../public/webhub/3.png";
import Image3 from "../../public/webhub/2.png";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "Developed a fully functional e-commerce website for a clothing brand.",
    imageUrl: Image1, // Replace with imported image
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    description:
      "Redesigned and revamped the corporate website for a multinational corporation.",
    imageUrl: Image2, // Replace with imported image
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Created a sleek and modern portfolio website for a freelance graphic designer.",
    imageUrl: Image3, // Replace with imported image
  },
];

const PastProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastProjectsPage;
