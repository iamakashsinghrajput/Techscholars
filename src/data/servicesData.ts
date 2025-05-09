export interface ServiceFeature {
    title: string;
    description: string;
    icon?: string;
  }
  
  export interface ServiceProcessStep {
    step: number;
    title: string;
    description: string;
  }
  
  export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    icon: string;
    longDescription: string;
    imageUrl?: string;
    features?: ServiceFeature[];
    process?: ServiceProcessStep[];
    technologies?: string[];
  }
  
  export const servicesData: Service[] = [
    {
      slug: 'custom-software-development',
      title: 'Custom Software Development',
      shortDescription: 'We design and develop bespoke software solutions meticulously tailored to your unique business processes, driving efficiency, innovation, and scalable growth.',
      icon: '💻',
      imageUrl: '/images/CustomSoftwareDevelopment.png',
      longDescription: `At Techscholars, we understand that off-the-shelf software doesn't always fit. Our custom software development service is dedicated to creating solutions that precisely match your unique operational needs and strategic goals. We partner with you to understand your vision, challenges, and workflows, translating them into robust, scalable, and intuitive software. Whether it's a complex enterprise platform, a specialized business tool, or integrating disparate systems, our experienced team delivers excellence at every stage of the development lifecycle, from ideation and design to deployment and ongoing support. We build software that not only solves today's problems but also anticipates tomorrow's growth.`,
      features: [
        { title: 'Tailored to Your Needs', description: 'Software built from the ground up to match your exact specifications and business logic.' },
        { title: 'Scalable Architectures', description: 'Solutions designed to grow with your business, handling increased load and evolving requirements.' },
        { title: 'Enhanced Efficiency', description: 'Automate manual processes and streamline operations for significant productivity gains.' },
        { title: 'Seamless Integrations', description: 'Connect your new software with existing systems and third-party services for a unified ecosystem.' },
      ],
      process: [
        { step: 1, title: 'Discovery & Planning', description: 'In-depth consultation to understand your requirements, goals, and success metrics. We create a detailed project roadmap.' },
        { step: 2, title: 'Design & Prototyping', description: 'Crafting intuitive UI/UX designs and interactive prototypes to visualize the end product and gather feedback.' },
        { step: 3, title: 'Agile Development', description: 'Iterative development cycles with regular updates, ensuring flexibility and alignment with your evolving needs.' },
        { step: 4, title: 'Rigorous Testing', description: 'Comprehensive quality assurance to identify and fix issues, ensuring a reliable and bug-free application.' },
        { step: 5, title: 'Deployment & Support', description: 'Smooth deployment to your chosen environment, followed by ongoing maintenance and support.' },
      ],
      technologies: ['Java', 'Python', '.NET', 'Node.js', 'React', 'Angular', 'SQL', 'NoSQL', 'AWS', 'Azure'],
    },
    {
      slug: 'web-application-development',
      title: 'Web Application Development',
      shortDescription: 'Leverage our expertise in building modern, responsive, and secure web applications. We create intuitive user interfaces and robust back-end systems.',
      icon: '🌐',
      imageUrl: '/images/WebApplicationDevelopment.png',
      longDescription: `In today's digital-first world, a compelling web presence is non-negotiable. Techscholars specializes in crafting high-performance, secure, and scalable web applications that deliver exceptional user experiences. We utilize the latest front-end and back-end technologies to build everything from dynamic single-page applications (SPAs) and progressive web apps (PWAs) to complex enterprise portals and e-commerce platforms. Our focus is on creating solutions that are not only visually appealing but also functionally rich, reliable, and optimized for performance across all devices.`,
      features: [
        { title: 'Modern Tech Stack', description: 'Utilizing cutting-edge frameworks like React, Angular, Vue.js, and Node.js for robust solutions.' },
        { title: 'Responsive Design', description: 'Ensuring optimal viewing and interaction experience across a wide range of devices.' },
        { title: 'Security First', description: 'Implementing best practices for application security to protect your data and users.' },
        { title: 'Performance Optimized', description: 'Building fast-loading and efficient applications for better user engagement and SEO.' },
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'Node.js', 'Express.js', 'Django', 'Ruby on Rails', 'PHP', 'PostgreSQL', 'MongoDB'],
    },
    {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      shortDescription: 'Transform your ideas into impactful native (iOS & Android) and cross-platform mobile applications. We focus on delivering seamless user experiences.',
      icon: '📱',
      imageUrl: '/images/MobileAppDevelopment.png',
      longDescription: `Reach your audience wherever they are with bespoke mobile applications developed by Techscholars. We build engaging and high-performance native apps for iOS and Android, as well as cost-effective cross-platform solutions using frameworks like React Native and Flutter. Our team guides you through the entire app development lifecycle, from concept and UI/UX design to development, testing, and App Store/Play Store deployment. We prioritize intuitive navigation, smooth performance, and robust functionality to ensure your app stands out and delivers value.`,
      features: [
        { title: 'Native iOS & Android', description: 'High-performance, platform-specific apps leveraging the full capabilities of each OS.' },
        { title: 'Cross-Platform Solutions', description: 'Develop once, deploy on multiple platforms with frameworks like React Native or Flutter.' },
        { title: 'User-Centric Design', description: 'Intuitive and engaging UI/UX designed for optimal mobile interaction.' },
        { title: 'API Integration', description: 'Seamlessly connect your mobile app with back-end services and third-party APIs.' },
      ],
      technologies: ['Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Flutter', 'Firebase', 'AWS Amplify', 'REST APIs', 'GraphQL'],
    },
    {
      slug: 'tech-training-and-workshops',
      title: 'Tech Training & Workshops',
      shortDescription: 'Empower your team with cutting-edge knowledge. Our expert-led training programs and interactive workshops cover a wide range of technologies.',
      icon: '🎓',
      imageUrl: '/images/TechTrainingWorkshop.png',
      longDescription: `In the rapidly evolving tech landscape, continuous learning is key to staying competitive. Techscholars offers customized tech training programs and hands-on workshops designed to upskill your team and foster a culture of innovation. Our expert instructors, who are also seasoned industry professionals, deliver engaging content on a wide array of topics, from specific programming languages and frameworks to broader concepts like Agile methodologies, DevOps practices, and cybersecurity awareness. We tailor our curriculum to your organization's specific needs and skill gaps, ensuring maximum impact and knowledge retention.`,
      features: [
        { title: 'Customized Curriculum', description: 'Training programs tailored to your team’s specific skill levels and business objectives.' },
        { title: 'Expert Instructors', description: 'Learn from industry veterans with real-world experience and a passion for teaching.' },
        { title: 'Hands-On Learning', description: 'Interactive workshops and practical exercises to reinforce concepts and build practical skills.' },
        { title: 'Flexible Delivery', description: 'On-site, remote, or hybrid training options to suit your team’s preferences and schedule.' },
      ],
    },
    {
      slug: 'it-consulting-and-strategy',
      title: 'IT Consulting & Strategy',
      shortDescription: 'Gain strategic insights and expert guidance to navigate complex IT challenges. We help you optimize your technology infrastructure and align IT with business objectives.',
      icon: '💡',
      imageUrl: '/images/ITConsultingStrategy.png',
      longDescription: `Navigate the complexities of the modern IT landscape with strategic guidance from Techscholars. Our IT consulting services help businesses align their technology initiatives with their core objectives, optimize existing infrastructure, and plan for future growth. We provide expert advice on digital transformation, technology adoption, cybersecurity posture, IT governance, and cost optimization. Our consultants work closely with your leadership to understand your challenges and opportunities, delivering actionable strategies and roadmaps that drive tangible business value.`,
      features: [
        { title: 'Digital Transformation Roadmap', description: 'Develop a clear strategy for leveraging technology to transform your business.' },
        { title: 'Technology Assessment & Optimization', description: 'Evaluate your current IT infrastructure and identify areas for improvement and cost savings.' },
        { title: 'Cybersecurity Strategy', description: 'Strengthen your security posture with expert advice and risk management planning.' },
        { title: 'IT Governance & Compliance', description: 'Establish best practices for IT management and ensure compliance with industry regulations.' },
      ],
    },
    {
      slug: 'cloud-solutions-and-devops',
      title: 'Cloud Solutions & DevOps',
      shortDescription: 'Unlock the full potential of the cloud with our end-to-end services. From cloud migration to implementing robust DevOps practices, we enable agility and scalability.',
      icon: '☁️',
      imageUrl: '/images/CloudSolutionsDevOps.png',
      longDescription: `Embrace the power and flexibility of the cloud with Techscholars. We offer comprehensive cloud solutions, including migration services, cloud-native application development, infrastructure management, and cost optimization on major platforms like AWS, Azure, and Google Cloud. Coupled with our DevOps expertise, we help you streamline your development pipelines, automate deployments, and foster a culture of continuous integration and delivery (CI/CD). This results in faster time-to-market, improved reliability, and enhanced operational efficiency.`,
      features: [
        { title: 'Cloud Migration & Modernization', description: 'Seamlessly migrate your applications and data to the cloud, or modernize existing cloud workloads.' },
        { title: 'Infrastructure as Code (IaC)', description: 'Automate provisioning and management of your cloud infrastructure for consistency and speed.' },
        { title: 'CI/CD Pipeline Implementation', description: 'Build robust CI/CD pipelines to automate testing and deployment, accelerating your release cycles.' },
        { title: 'Cloud Cost Optimization', description: 'Analyze and optimize your cloud spending to ensure you’re getting the most value from your investment.' },
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud Platform (GCP)', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI'],
    },
  ];