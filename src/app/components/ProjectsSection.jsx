"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Procurement Platform – Government of Cameroon",
    description: "I contributed to the development of a digital e-procurement platform designed to modernize and streamline the public procurement process in Cameroon.The platform manages the full lifecycle of public tenders, ensuring transparency, efficiency, and compliance with government regulations. Government entities define and publish their annual procurement plans. Contracting authorities create tenders and publish them online for public access. Suppliers securely submit their bids through the platform within specified deadlines. Submitted bids are opened and evaluated based on predefined technical and financial criteria.The best bidder is selected, and the contract award is officially published.The system tracks contract execution, milestones, and compliance.",
    image: "/images/projects/coleps.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://marchespublics.cm",
  },
  {
    id: 2,
    title: "Mobile Money Platform (MoMo)",
    description: "Developed backend services for a mobile money platform enabling secure wallet-to-wallet transfers, bank integrations, and virtual card operations. Implemented scalable APIs for real-time transaction processing, ensuring reliability, data consistency, and seamless integration with external financial systems.",
    image: "/images/projects/momo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://youtu.be/dm3AdWdU1SE?si=d2AOsD2qvq0p4PK2",
  },

  {
    id: 3,
    title: "Payment Aggregator Platform (CtPay)",
    description: "CtPay is a payment aggregator platform that enables businesses to accept and manage payments across multiple channels, including mobile money, bank transfers, and card payments. I contributed to the backend development by building scalable APIs, handling transaction processing, and integrating with external payment providers to ensure secure, reliable, and seamless payment operations.",
    image: "/images/projects/ctpay.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://95.111.225.198:5007/landing",
  },
    {
    id: 1,
    title: "SMART DS  Tracking",
    description: "Object tracking solution for SmartDS, featuring real-time monitoring and subscription-based functionalities. The system allows users to track objects with precision while offering flexible subscription plans, ensuring scalability and enhanced user experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://95.111.225.198:5007/landing",
  },
  {
    id: 2,
    title: "NJNOOS",
    description: "NJNOOS offers unique access to a wide variety of fuel suppliers, gathered in a single platform. You can compare prices in real time, optimize your purchases and select the best offers available.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://njnoos-energies.com/",
  },
  {
    id: 4,
    title: "Autonomous Drone delivery muli stations platform",
    description: "Advanced drone delivery platform that integrates multiple stations across a city. The system is linked to a marketplace, enabling seamless order reception, drone mission planning, and obstacle detection. Leveraged algorithms to determine the nearest drone for pick-up and delivery, ensuring efficiency and customer satisfaction.",
    image: "/images/projects/4.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "E-commerce platform, Anais Market, connecting vendors and buyers in a seamless online marketplace. The application supports product listing, order management, secure payments, and delivery tracking to enhance the shopping experience. It also integrates advanced search and recommendation features for personalized user interaction.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://anais-market.com/fr",
  },
  {
    id: 5,
    title: "LOGORI",
    description: "Application for tracking government contributions and equity stakes in international organizations and financial institutions. The platform also monitors the outcomes and impacts of these contributions, providing detailed insights and reporting to support strategic decision-making.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
 {/*Here the project tag*/}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;