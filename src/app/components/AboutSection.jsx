"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
         <li>Spring Boot</li>
         <li>Node.js (TypeScript)</li>
        <li>NestJS</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Prisma</li>
        <li>React (TypeScript)</li>
        <li>Next.js</li>
        <li>AWS (EC2, S3, RDS, Lambda)</li>
        <li>Docker</li>
        <li>CI/CD (GitHub Actions / GitLab CI)</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        Master&apos;s Degree
        <li>National Advanced School of engineering yaoundé</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
Senior Software Engineer specializing in modern web application development, with strong expertise in JavaScript (Node.js, React) as well as Java.Throughout my career, I have worked on complex, high-traffic systems, designing robust, scalable, and maintainable architectures. I operate across the full stack, building efficient backend systems (APIs, microservices, distributed systems) and delivering high-performance, user-focused frontend applications.
I have solid experience with cloud environments and DevOps practices, including CI/CD pipeline implementation, automated deployments, and application performance and security optimization.Beyond technical skills, I bring a strong product-oriented mindset: understanding business needs, delivering efficient solutions, and focusing on impact. I’m comfortable collaborating with cross-functional teams and contributing to architectural decisions.
Autonomous, detail-oriented, and proactive, I can take ownership of projects end-to-end—from design to production—while also mentoring junior engineers and driving continuous improvement within teams.I am currently looking for ambitious projects where I can make a meaningful impact, particularly around scalability, system design, and performance optimization.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
