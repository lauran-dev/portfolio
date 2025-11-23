export const profile = {
  name: "Maria Laura Nombrado",
  title: "Senior Software Engineer",
  tagline:
    "Full-stack engineer with a strong DevOps and cloud infrastructure background — building responsive web applications and the pipelines that ship them.",
  location: "Naga City, Philippines",
  email: "lauran.developer@gmail.com",
  phone: "+63 976 594 6953",
  social: {
    github: "https://github.com/lauran-dev",
    linkedin: "https://www.linkedin.com/in/lauranombrado",
  },
  about: [
    "I like building things — whether that's a React interface, infrastructure configured as code with Terraform or CloudFormation, or the CI/CD pipeline and tests that ship them. That curiosity is what's carried me across the stack.",
    "I'm a software engineer with over a decade of experience spanning full-stack web development, cloud infrastructure, and DevOps automation. My work ranges from building responsive React and Next.js interfaces to designing the AWS, Azure, and OpenStack infrastructure and CI/CD pipelines that support them.",
    "I've worked across the stack — from Node.js, Django, and Flask APIs to Kubernetes and OpenShift orchestration — and I enjoy the parts of engineering where product and infrastructure meet. Earlier in my career I worked as an RTL/digital IC design engineer, which shaped a deep appreciation for rigor, testing, and getting the fundamentals right.",
  ],
} as const;

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Web Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Node.js",
      "Django",
      "Flask",
      "REST APIs",
    ],
  },
  {
    category: "Languages & Scripting",
    skills: ["Python", "TypeScript/JavaScript", "Bash", "Shell"],
  },
  {
    category: "Cloud Providers",
    skills: ["AWS", "Azure", "OpenStack"],
  },
  {
    category: "Containerization & Orchestration",
    skills: [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "VMware PKS",
      "AWS EKS",
      "Mesos / Marathon",
      "Helm",
    ],
  },
  {
    category: "CI/CD",
    skills: ["Jenkins", "GitLab CI", "Azure DevOps", "AWS Developer Tools"],
  },
  {
    category: "Infrastructure as Code",
    skills: ["Ansible", "Terraform", "AWS CloudFormation", "Azure ARM"],
  },
  {
    category: "Version Control & OS",
    skills: ["Git", "Linux", "Unix (macOS)", "Windows"],
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  start: string;
  end: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Quonderbox IT Solutions",
    start: "March 2021",
    end: "Present",
    highlights: [
      "Developed and implemented highly responsive user interface components using React, Next.js, and TypeScript, ensuring a seamless user experience.",
      "Collaborated with other developers to design and develop a well-structured, scalable, and flexible application architecture.",
      "Designed and implemented backend services with Node.js and Express.js, developing and managing REST APIs.",
      "Integrated third-party APIs and services.",
      "Ensured seamless integration between user interface components and backend services, fostering efficient communication and data flow.",
      "Successfully provisioned, managed and automated environments, deploying applications on AWS.",
      "Designed, developed, and implemented automated CI/CD pipelines.",
      "Executed the seamless refactoring and migration of a Flask application codebase to AWS Lambda functions, improving application scalability and performance.",
    ],
  },
  {
    title: "Cloud DevOps Engineer",
    company: "Stratpoint Technologies, Inc.",
    start: "October 2019",
    end: "February 2021",
    highlights: [
      "Built, monitored, and managed the cloud infrastructure and workloads.",
      "Worked with cross-functional design teams to create software solutions that improved overall functionality and performance.",
      "Automated the provisioning of cloud infrastructure in AWS using CloudFormation, configuration management and deployment tools.",
      "Designed, developed, and implemented automated CI/CD pipelines using GitLab CI.",
      "Provisioned, managed, and maintained Kubernetes clusters for development and production environments.",
      "Performed cloud native migrations, application containerization and optimizations.",
      'Led "Landing Zone," a cloud center-of-excellence initiative delivering reusable AWS/EKS provisioning, automation, and migration patterns.',
      "Delivered multiple Globe Telecom projects: migrated workloads to VMware Tanzu (PKS) and AWS EKS, ran Azure DevOps and blue-green deployment proofs of concept, and containerized the Pay2Globe platform.",
      "Handled cloud migrations, application refactoring, and containerization across multiple client applications, including the Globe UNI/UPS project — provisioning AWS, PKS, EKS, and ECS environments, implementing CI/CD pipelines and automations, and providing ongoing support.",
      "Researched best practices in DevOps technologies, tools, trends, and innovations then analyzed, implemented, and evaluated them.",
      "Mentored and guided other team members in their technical direction and goals.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "ING Business Share Services BV Branch",
    start: "February 2019",
    end: "September 2019",
    highlights: [
      "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
      "Supported an agile development process with CI/CD automation, and Azure cloud environments.",
      "Collaborated with dev and test teams to design, build, deploy and automate environment platforms for development, UAT and production.",
      "Developed and maintained CI/CD GitLab pipelines, ensuring smooth release and rollbacks.",
      "Automated the provisioning, scaling, and management of OpenShift clusters using Ansible scripts.",
      "Provisioned Azure and OpenShift environments and supported release management for the ING Digital Mobile Bank application.",
      "Diagnosed and resolved issues in environments and deployments, providing crucial support to development squads.",
    ],
  },
  {
    title: "R&D Engineer / Software Engineer",
    company: "Nokia Technology Center Philippines, Inc.",
    start: "July 2014",
    end: "January 2019",
    highlights: [
      "Contributed to the architecture planning workshop held in Finland.",
      "Led overall feature development from planning to delivery.",
      "Analyzed feature specifications and created acceptance criteria, software design and test plan documents.",
      "Designed and developed microservices and tests using Python and JavaScript frameworks for AVA, Nokia's open analytics framework for telecom operators, including data-visualization use cases (Mapbox/Tippecanoe, Arcadia) and third-party service-broker integrations.",
      "Contributed C/TDD feature development for the Nokia TRX base transceiver station component.",
      "Developed solutions for integrating 3rd party applications to the platform.",
      "Led the release of software, upgrades, and hotfixes to development, staging and production environments.",
      "Automated Docker image builds, tests and deployments using Ansible scripts, Mesos configurations and Jenkins/GitLab CI tools.",
      "Automated the provisioning and deployment of infrastructure on an OpenStack cloud platform using Terraform scripts.",
      "Conducted upgrades and maintenance for the development platform (OpenStack) and infrastructure (Mesos/Marathon).",
      "Provided root cause analysis and delivered corrections for issues.",
      "Identified and implemented process improvements and best practices, ensuring efficient workflows and high-quality features.",
    ],
  },
  {
    title: "System Developer",
    company: "Octal Philippines, Inc.",
    start: "July 2013",
    end: "July 2014",
    highlights: [
      "Developed ERP system modules for different business processes: HRIS, payroll, purchasing, warehouse, accounting, project management.",
      "Analyzed business requirements and collaborated with clients and the system analyst group on the design and formulation of rules to help users utilize and maximize system efficiency.",
      "Performed NetSuite project-specific configurations and created customization scripts, reports, and searches for engagements including the GMA demo and the Freyfil client system.",
      "Developed scripts using JavaScript and the SuiteScript library.",
      "Performed system tests to ensure usability and quality.",
      "Provided technical support for client-related issues.",
    ],
  },
  {
    title: "RTL Engineer / Assistant Logic Integration Engineer",
    company: "ROHM LSI Design Philippines, Inc.",
    start: "November 2010",
    end: "January 2013",
    highlights: [
      "Led multiple projects through overall development stages, from estimates and planning to implementation, integration, and testing.",
      "Completed high-quality digital IC designs, developed RTL code (Verilog/VHDL), and created behavioral models for testing.",
      "Developed behavioral models and simulation environments used for testing the code.",
      "Designed a hardware development board to test the capabilities and functionalities of the IC chip design.",
      "Conducted peer reviews and code analysis, ensuring structural optimization and compliance with standards.",
      "Delivered product documentation, contributing to the overall success of projects.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Loggy",
    description:
      'Contributed as part of the development team behind Loggy, a vehicle maintenance and ownership app spanning a React Native mobile app, an Express/PostgreSQL API, and a React admin panel — including "Loggy AI", a voice and chat assistant that turns natural-language input into structured maintenance, fuel, and expense log entries.',
    tags: ["React Native", "Node.js", "PostgreSQL", "AWS Bedrock"],
  },
  {
    title: "Gurulytics",
    description:
      "Contributed to the NestJS backend powering the SEO and marketing dashboard for Online Marketing Gurus, aggregating SEO, PPC, and social ad performance from Google, Meta, Bing, Ahrefs, and SEMrush into unified, client-configurable reporting dashboards.",
    tags: ["NestJS", "TypeScript", "MongoDB", "Redis"],
  },
  {
    title: "Boreco",
    description:
      "Part of the team building Boreco, a project management web tool built with React, Next.js, and TypeScript for planning, tracking, and collaborating on client work.",
    tags: ["React", "Next.js", "TypeScript", "CSS"],
  },
  {
    title: "Malabon Enrollment Hub",
    description:
      "Contributed to a student enrollment platform built for the City of Malabon, Philippines, digitizing public school enrollment across a four-role workflow with an AI plus rules-based school-recommendation engine and geo-aware hub matching.",
    tags: ["Next.js", "TypeScript", "MongoDB", "OpenAI"],
  },
  {
    title: "SalesLights",
    description:
      "Contributed as part of the development team behind SalesLights, an AI sales automation platform pairing a LinkedIn-scraping Chrome extension with a multi-provider LLM pipeline (OpenAI and Anthropic via LangChain) to generate personalized outreach emails and sequences, backed by a Next.js dashboard, AWS Lambda, and Stripe billing.",
    tags: ["Next.js", "Chrome Extension", "LangChain", "AWS Lambda"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "April 2020",
    href: "https://www.credly.com/badges/8e8f1f73-480f-43e0-85aa-2ae1e45cb30c",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "December 2019",
    href: "https://www.credly.com/badges/cb740b59-f980-46c1-94dc-e02b32be8d2d",
  },
  {
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    date: "December 2021",
    href: "https://www.credly.com/badges/42bc5906-8ff2-4226-bb15-e694ba25a4a2",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "July 2021",
    href: "https://www.credly.com/badges/58878cd4-da36-42e3-b39b-ac6a10352ea6/public_url",
  },
  {
    name: "Certified SAFe Practitioner",
    issuer: "Scaled Agile, Inc.",
    date: "September 2018",
    href: "https://www.credly.com/badges/04af2e46-9154-4970-b636-f23adea28d06",
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  awards?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "BS Computer Engineering",
    school: "Ateneo de Naga University",
    location: "Naga City, Philippines",
    start: "2005",
    end: "2010",
    awards: ["Dean's Lister"],
  },
];

export const awsSkillBuilderProfileHref =
  "https://skillsprofile.skillbuilder.aws/user/lauranombrado";

export const resumeFileHref = "/resume.pdf";

export type RoleConfig = {
  slug: string;
  label: string;
  heroTitle: string;
  heroTagline: string;
  aboutIntro: string;
  skillOrder?: string[];
  projectOrder?: string[];
};

export const roles: RoleConfig[] = [
  {
    slug: "full-stack",
    label: "Full-Stack",
    heroTitle: "Full-Stack Engineer",
    heroTagline:
      "Building end-to-end web applications — from responsive React and Next.js interfaces to the Node.js, Django, and Flask APIs and databases behind them.",
    aboutIntro:
      "I like building things — turning designs into responsive, accessible interfaces and building the APIs and data layers that power them. My focus is full-stack product development, backed by enough DevOps and cloud experience to ship and run what I build.",
    skillOrder: [
      "Web Development",
      "Languages & Scripting",
      "Version Control & OS",
      "Cloud Providers",
      "Containerization & Orchestration",
      "CI/CD",
      "Infrastructure as Code",
    ],
    projectOrder: [
      "Boreco",
      "Loggy",
      "AI-AERS — Malabon Enrollment Hub",
      "SalesLights",
      "Gurulytics",
    ],
  },
  {
    slug: "senior-software-engineer",
    label: "Senior SWE",
    heroTitle: "Senior Software Engineer",
    heroTagline:
      "A decade-plus building and leading software across the stack — from product engineering to the cloud infrastructure and CI/CD that ships it — with a focus on architecture, mentorship, and getting the fundamentals right.",
    aboutIntro:
      "I like building things, and I like leading the people and systems around them. I've delivered features end-to-end and mentored other engineers along the way, working across web development, cloud infrastructure, and DevOps automation without staying confined to any one layer of the stack.",
  },
  {
    slug: "devops",
    label: "DevOps",
    heroTitle: "DevOps / Cloud Engineer",
    heroTagline:
      "Designing and automating the cloud infrastructure, CI/CD pipelines, and container platforms that reliably ship product teams' code — across AWS, Azure, and OpenStack.",
    aboutIntro:
      "I like building infrastructure as much as product — provisioning and automating environments with Terraform, Ansible, and CloudFormation, building CI/CD pipelines, and running Kubernetes, OpenShift, and EKS workloads in production — with enough full-stack background to work closely with the product teams I support.",
    skillOrder: [
      "Cloud Providers",
      "Containerization & Orchestration",
      "CI/CD",
      "Infrastructure as Code",
      "Version Control & OS",
      "Languages & Scripting",
      "Web Development",
    ],
    projectOrder: [
      "SalesLights",
      "Loggy",
      "Gurulytics",
      "Enrollment Hub",
      "Boreco",
    ],
  },
];

export function getRole(slug: string): RoleConfig | undefined {
  return roles.find((role) => role.slug === slug);
}

export function orderByPriority<T>(
  items: T[],
  key: (item: T) => string,
  priority?: string[],
): T[] {
  if (!priority) return items;
  return [...items].sort((a, b) => {
    const indexA = priority.indexOf(key(a));
    const indexB = priority.indexOf(key(b));
    const rankA = indexA === -1 ? priority.length : indexA;
    const rankB = indexB === -1 ? priority.length : indexB;
    return rankA - rankB;
  });
}
