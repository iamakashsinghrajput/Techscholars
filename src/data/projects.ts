export interface Project {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  client?: string;
  websiteUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'nextgen-ecommerce',
    title: 'NextGen E-commerce Platform',
    category: 'Web Development',
    excerpt: 'A scalable and feature-rich e-commerce solution built for high traffic and conversions.',
    imageUrl: '/images/EcommercePlatform.png',
    description: 'Developed a comprehensive e-commerce platform from scratch, enabling seamless product management, secure payments, and personalized user experiences. The platform supports thousands of SKUs and integrates with various third-party logistics and marketing tools. It was built with performance and scalability in mind, leveraging modern web technologies to deliver a fast and reliable shopping experience.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API', 'AWS'],
    client: 'Global Retail Inc.',
    websiteUrl: 'https://portfolio-lyart-gamma-39.vercel.app'
  },
  {
    id: 'vitawell-health-app',
    title: 'VitaWell - Mobile Health Tracker',
    category: 'Mobile App Development',
    excerpt: 'An intuitive mobile application for tracking fitness, nutrition, and wellness goals.',
    imageUrl: '/images/HealthTracker.png',
    description: 'Designed and built a cross-platform mobile app (iOS & Android) that helps users monitor their daily activities, log meals, set health goals, and visualize progress. Features include real-time data synchronization, gamification elements to boost engagement, and secure user data storage. The app aims to empower users to take control of their health journey.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Push Notifications'],
    client: 'Wellness Start-up Co.'
  },
  {
    id: 'insighthub-bi-dashboard',
    title: 'InsightHub - BI Dashboard',
    category: 'Data Analytics & Visualization',
    excerpt: 'A powerful business intelligence dashboard for real-time data visualization and decision-making.',
    imageUrl: '/images/DataAnalytic.png',
    description: 'Created a custom Business Intelligence (BI) dashboard that aggregates data from multiple sources, providing executives with actionable insights through interactive charts, graphs, and reports. The system features role-based access control, automated report generation, and predictive analytics capabilities to help businesses make informed strategic decisions.',
    technologies: ['Python (Flask)', 'D3.js', 'PowerBI (Embedded)', 'SQL Server', 'REST APIs'],
    client: 'FinTech Corp'
  },
];