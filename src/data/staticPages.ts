export interface PageContent {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    hero?: {
      heading: string;
      subheading?: string;
      imageUrl?: string;
    };
    mainContent: string;
  }
  
  export const pagesData: PageContent[] = [
    {
      slug: 'page-one',
      title: 'Welcome to Page One',
      metaTitle: 'Page One | Our Informative Pages | Techscholars',
      metaDescription: 'This is the first of our special informative pages, offering unique insights and content from Techscholars.',
      hero: {
        heading: 'Exploring Page One',
        subheading: 'Dive into the details of our first featured section.',
        imageUrl: 'https://picsum.photos/seed/pageone/1600/500',
      },
      mainContent: `
        <p>This is the main content area for Page One. We can put various types of information here. This page serves as an example of how dynamic content can be structured and displayed within the Techscholars website.</p>
        <h2 class="text-2xl font-semibold text-gray-800 my-4">Key Highlights of Page One</h2>
        <ul class="list-disc list-inside space-y-2 mb-6">
          <li>Introduction to a new concept.</li>
          <li>Detailed explanation of specific features.</li>
          <li>Benefits and advantages discussed.</li>
          <li>Future outlook and possibilities.</li>
        </ul>
        <p>We aim to provide valuable information that is both engaging and easy to understand. Feel free to explore other sections of our website for more content.</p>
        <div class="my-8 p-6 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
          <p class="font-bold">Did you know?</p>
          <p>Page One is designed to be highly adaptable to various content needs.</p>
        </div>
        <p>Thank you for visiting Page One. We hope you find the information useful.</p>
      `,
    },
    {
      slug: 'page-two',
      title: 'Discover Page Two',
      metaTitle: 'Page Two | Our Informative Pages | Techscholars',
      metaDescription: 'Page Two delves deeper into specific topics, building upon the foundations laid out in other sections.',
      hero: {
        heading: 'The Depths of Page Two',
        subheading: 'Uncovering more specialized information and resources.',
        imageUrl: 'https://picsum.photos/seed/pagetwo/1600/500',
      },
      mainContent: `
        <p>Welcome to Page Two. This section is dedicated to providing more in-depth analysis and resources on particular subjects. We expand on topics introduced elsewhere and offer new perspectives.</p>
        <h2 class="text-2xl font-semibold text-gray-800 my-4">What You'll Find on Page Two</h2>
        <p>Our focus on Page Two includes:</p>
        <ol class="list-decimal list-inside space-y-2 my-4">
          <li>Advanced concepts and theories.</li>
          <li>Practical examples and case studies.</li>
          <li>Links to further reading and external resources.</li>
          <li>Expert opinions and guest contributions (hypothetically).</li>
        </ol>
        <p>Page Two is structured to facilitate deeper learning and understanding. We encourage you to engage with the material and explore related topics for a comprehensive overview.</p>
        <blockquote class="my-8 p-4 border-l-4 border-gray-300 bg-gray-50">
          <p class="text-gray-600 italic">"The only source of knowledge is experience." - Albert Einstein (related to practical examples)</p>
        </blockquote>
      `,
    },
    {
      slug: 'page-three',
      title: 'Exploring Page Three',
      metaTitle: 'Page Three | Our Informative Pages | Techscholars',
      metaDescription: 'Page Three offers a unique collection of resources, tools, and interactive elements for our users.',
      hero: {
        heading: 'Interactive Page Three',
        imageUrl: 'https://picsum.photos/seed/pagethree/1600/500',
      },
      mainContent: `
        <p>Page Three is designed to be an interactive and resource-rich environment. Here, we might host tools, downloadable guides, or embedded media that enhances user engagement.</p>
        <h2 class="text-2xl font-semibold text-gray-800 my-4">Features of Page Three</h2>
        <ul class="list-disc list-inside space-y-2 mb-6">
          <li>Downloadable checklists or templates.</li>
          <li>Embedded video tutorials or webinars.</li>
          <li>Interactive quizzes or calculators (conceptual).</li>
          <li>Curated lists of useful tools and software.</li>
        </ul>
        <p>The goal of Page Three is to provide tangible value and practical assistance. We continuously update our resources to ensure they remain relevant and helpful.</p>
        <p class="mt-4">For instance, imagine a section where you could download our "Ultimate Web Development Checklist" (this is a placeholder idea).</p>
      `,
    },
    {
      slug: 'page-four',
      title: 'Page Four: A Look Ahead',
      metaTitle: 'Page Four | Our Informative Pages | Techscholars',
      metaDescription: 'Page Four provides insights into future trends, upcoming projects, and visionary ideas from Techscholars.',
      mainContent: `
        <p class="mt-6">Welcome to Page Four. This page is dedicated to our forward-thinking initiatives, discussions on future technologies, and a glimpse into what Techscholars is planning next.</p>
        <h2 class="text-2xl font-semibold text-gray-800 my-6">Topics Covered on Page Four</h2>
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="p-4 border rounded-lg bg-green-50">
            <h3 class="text-xl font-medium text-green-700 mb-2">Future Tech Spotlights</h3>
            <p class="text-green-600">Analysis of emerging technologies and their potential impact on businesses and society.</p>
          </div>
          <div class="p-4 border rounded-lg bg-purple-50">
            <h3 class="text-xl font-medium text-purple-700 mb-2">Upcoming Projects</h3>
            <p class="text-purple-600">Previews of innovative projects and solutions currently under development at Techscholars.</p>
          </div>
          <div class="p-4 border rounded-lg bg-yellow-50">
            <h3 class="text-xl font-medium text-yellow-700 mb-2">Visionary Corner</h3>
            <p class="text-yellow-600">Thought leadership pieces on the future of technology and digital transformation.</p>
          </div>
          <div class="p-4 border rounded-lg bg-pink-50">
            <h3 class="text-xl font-medium text-pink-700 mb-2">Community Engagement</h3>
            <p class="text-pink-600">Information on how we plan to engage with the wider tech community through events, collaborations, and open-source contributions.</p>
          </div>
        </div>
        <p>Page Four is where innovation meets aspiration. Join us as we explore the exciting possibilities that lie ahead.</p>
      `,
    },
  ];