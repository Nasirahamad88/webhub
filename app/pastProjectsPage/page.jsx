import React from "react";
import Image1 from "../../public/webhub/1.png";
import Image2 from "../../public/webhub/3.png";
import Image3 from "../../public/webhub/2.png";
import Image4 from "../../public/webhub/Garman.png";
import Image5 from "../../public/webhub/5.png";
import Image6 from "../../public/webhub/6.png";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Germany client Website",
    description:
      "🌐 Our team poured creativity and expertise into crafting a captivating online presence tailored to their unique needs",
    imageUrl: Image4, // Replace with imported image
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
    title: "Corporate Website Redesign",
    description:
      "Apparel Accessories Manufacturer and Supplier from Bangaldesh.",
    imageUrl: Image5, // Replace with imported image
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "Developed a fully functional e-commerce website for a clothing brand.",
    imageUrl: Image1, // Replace with imported image
  },

  {
    id: 6,
    title: "Agency Website",
    description:
      "Created a sleek and modern Agency Website for a freelance web development designer.",
    imageUrl: Image6, // Replace with imported image
  },
   {
    id: 5,
    title: "Portfolio Website",
    description:
      "Created a sleek and modern portfolio website for a freelance graphic designer.",
    imageUrl: Image3, // Replace with imported image
  },
];


 

const PastProjectsPage = () => {
  return (
    <section className='bg-white'>
    <div className="container  mx-auto px-4 py-8">
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
    </div></section>
  );
};

export default PastProjectsPage;
