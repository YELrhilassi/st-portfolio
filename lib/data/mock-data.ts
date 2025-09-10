import { Artwork, Project } from '@/types';
import { TProject } from './projects';

// Fallback data for development
export const fallbackProjects: Project[] = [
  {
    id: '01',
    title: 'THOMAS PINK',
    subtitle: 'CASE STUDY',
    image: 'https://raw.githubusercontent.com/YELrhilassi/st-posts/main/images/tomas-pink.png',
    slug: 'thomas-pink',
    description: 'Brand identity and digital experience for luxury clothing brand',
    year: '2023',
    client: 'Thomas Pink Ltd.',
    role: 'Lead Designer',
    fullDescription:
      "A comprehensive brand refresh and digital experience redesign for the luxury clothing brand Thomas Pink. The project involved creating a new visual identity that honored the brand's heritage while modernizing its appeal for today's consumers.",
    challenge:
      'Thomas Pink needed to reconnect with its core audience while attracting younger customers. The brand had strong heritage elements but lacked digital presence and modern appeal.',
    solution:
      "We developed a refined visual language that maintained the brand's signature pink while introducing a more contemporary typography system and photography style. The digital experience was completely reimagined with a focus on storytelling and product discovery.",
    results:
      'The rebrand resulted in a 45% increase in online engagement and a 30% boost in e-commerce sales within the first quarter after launch. The new identity received industry recognition, including a nomination for Best Brand Refresh at the Design Awards.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
    ],
  },
  {
    id: '02',
    title: 'EVENT ASSETS',
    subtitle: 'MACH MEETUP',
    image: 'https://raw.githubusercontent.com/YELrhilassi/st-posts/main/images/tomas-pink.png',
    slug: 'mach-meetup',
    description: 'Visual identity and promotional materials for tech conference',
    year: '2023',
    client: 'MACH Alliance',
    role: 'Visual Designer',
    fullDescription:
      'Created a cohesive visual identity system for the MACH Meetup tech conference, including digital and print assets for promotion and event materials.',
    challenge:
      'The event needed a distinctive visual identity that would appeal to tech professionals while conveying the innovative nature of MACH architecture.',
    solution:
      'Developed a modern, tech-forward design system with distinctive iconography and a vibrant color palette that could be applied across various touchpoints.',
    results:
      'The visual identity helped drive a 40% increase in attendance compared to the previous year and received positive feedback from attendees and sponsors.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
    ],
  },
  {
    id: '03',
    title: 'THOUGHT LEADERSHIP',
    subtitle: 'REPORT',
    image: 'https://raw.githubusercontent.com/YELrhilassi/st-posts/main/images/tomas-pink.png',
    slug: 'thought-leadership',
    description: 'Editorial design for industry insights publication',
    year: '2022',
    client: 'Apply Digital',
    role: 'Editorial Designer',
    fullDescription:
      'Designed a comprehensive thought leadership report on customer engagement trends, combining data visualization, editorial layout, and brand storytelling.',
    challenge:
      'Needed to present complex data and insights in an engaging, visually compelling format that would appeal to C-suite executives.',
    solution:
      'Created a sophisticated editorial design with custom data visualizations, photography, and a clear typographic hierarchy to guide readers through the content.',
    results:
      'The report generated over 2,000 qualified leads and was featured in several industry publications, establishing the client as a thought leader in customer engagement.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
    ],
  },
  {
    id: '04',
    title: 'NEWSLETTER',
    subtitle: 'BRANDING',
    image: 'https://raw.githubusercontent.com/YELrhilassi/st-posts/main/images/tomas-pink.png',
    slug: 'newsletter-branding',
    description: 'Visual identity system for digital newsletter',
    year: '2022',
    client: 'Edge Digital',
    role: 'Brand Designer',
    fullDescription:
      "Developed a distinctive visual identity for Edge Digital's newsletter, including logo, typography system, and email templates.",
    challenge:
      'The newsletter needed to stand out in crowded inboxes while maintaining brand consistency and improving engagement metrics.',
    solution:
      'Created a bold, recognizable visual system with a flexible template that could accommodate different content types while maintaining a consistent brand experience.',
    results:
      'The redesigned newsletter saw a 35% increase in open rates and a 50% increase in click-through rates within the first three months after launch.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
    ],
  },
  {
    id: '05',
    title: 'NEWSLETTER',
    subtitle: 'BRANDING',
    image: 'https://raw.githubusercontent.com/YELrhilassi/st-posts/main/images/tomas-pink.png',
    slug: 'newsletter-branding',
    description: 'Visual identity system for digital newsletter',
    year: '2022',
    client: 'Edge Digital',
    role: 'Brand Designer',
    fullDescription:
      "Developed a distinctive visual identity for Edge Digital's newsletter, including logo, typography system, and email templates.",
    challenge:
      'The newsletter needed to stand out in crowded inboxes while maintaining brand consistency and improving engagement metrics.',
    solution:
      'Created a bold, recognizable visual system with a flexible template that could accommodate different content types while maintaining a consistent brand experience.',
    results:
      'The redesigned newsletter saw a 35% increase in open rates and a 50% increase in click-through rates within the first three months after launch.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
    ],
  },

];


export const mockProjects: TProject[] = [
  {
    id: 1,
    slug: "thomas-pink-brand-identity",
    title: "Thomas Pink",
    subtitle: "Brand Identity Redesign",
    description: "A comprehensive brand identity redesign for Thomas Pink, focusing on modern minimalism while honoring the brand's heritage in luxury menswear.",
    category: "Case study",
    tags: ["Branding", "Fashion", "Luxury", "Print Design"],
    featured: true,
    publishedAt: "2024-01-15",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
    imageAlt: "Thomas Pink brand identity overview",
    sections: [
      {
        id: 1,
        text: `<h3>Project Overview</h3>
        <p>Thomas Pink approached us with a clear vision: to modernize their brand identity while maintaining the sophisticated elegance that has defined them for decades. The challenge was to create a system that would resonate with both their loyal customer base and attract a new generation of discerning gentlemen.</p>
        
        <p>Our approach focused on stripping away unnecessary elements while amplifying the core brand values of quality, craftsmanship, and timeless style. The result is a refined visual language that speaks to the brand's British heritage while embracing contemporary design principles.</p>`,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
        imageAlt: "Thomas Pink logo design variations"
      },
      {
        id: 2,
        text: `<h3>Design Philosophy</h3>
        <p>The new identity centers around the concept of "refined simplicity" - a design philosophy that emphasizes clean lines, thoughtful typography, and purposeful use of space. Every element serves a function while contributing to the overall aesthetic harmony.</p>
        
        <p>We developed a comprehensive color palette that moves beyond the traditional pink, incorporating sophisticated neutrals and accent colors that reflect the modern gentleman's wardrobe. The typography system balances classic serif forms with contemporary sans-serif options, creating hierarchy and personality across all touchpoints.</p>`,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
        imageAlt: "Color palette and typography exploration"
      },
      {
        id: 3,
        text: `<h3>Implementation & Results</h3>
        <p>The rollout included everything from business cards and packaging to digital interfaces and retail environments. Each application was carefully considered to ensure consistency while allowing for medium-specific optimizations.</p>
        
        <p>The response from both internal stakeholders and customers has been overwhelmingly positive. Sales have increased by 23% in the first quarter following the rebrand, and customer surveys indicate a significant improvement in brand perception among the target demographic.</p>
        
        <p>Most importantly, the new identity has given Thomas Pink the tools to evolve and grow while staying true to their core values. It's a brand system built for longevity, capable of adapting to future challenges while maintaining its distinctive character.</p>`,
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=800&fit=crop",
        imageAlt: "Final brand applications and packaging"
      }
    ]
  },
  {
    id: 2,
    slug: "aurora-wellness-app",
    title: "Aurora",
    subtitle: "Wellness Mobile Application",
    description: "A comprehensive wellness platform that combines mindfulness, fitness tracking, and personalized health insights in an intuitive mobile experience.",
    category: "UX/UI Design",
    tags: ["Mobile App", "Wellness", "User Experience", "Health Tech"],
    featured: true,
    publishedAt: "2024-02-20",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=1000&fit=crop",
    imageAlt: "Aurora wellness app interface",
    sections: [
      {
        id: 4,
        text: `<h3>Understanding the Challenge</h3>
        <p>The wellness market is saturated with apps that focus on single aspects of health - meditation apps, fitness trackers, nutrition counters. Aurora's vision was to create a holistic platform that seamlessly integrates all aspects of wellness without overwhelming the user.</p>
        
        <p>Through extensive user research, we discovered that people wanted simplicity above all else. They were tired of juggling multiple apps and wanted a single, beautiful interface that could guide them on their wellness journey. The challenge was creating this unified experience without sacrificing depth or functionality.</p>`,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
        imageAlt: "User research and wireframes"
      },
      {
        id: 5,
        text: `<h3>Design Process</h3>
        <p>We began with a comprehensive audit of existing wellness apps, identifying pain points and opportunities for innovation. Our design philosophy centered on "calm technology" - interfaces that provide information and functionality without creating anxiety or overwhelm.</p>
        
        <p>The visual design draws inspiration from natural elements, using organic shapes, gentle gradients, and a color palette inspired by sunrise and sunset. Every interaction was carefully choreographed to feel natural and encouraging, turning healthy habits into delightful moments.</p>
        
        <p>Accessibility was a core consideration from day one. We ensured the app works beautifully for users with various needs, incorporating features like voice guidance, high contrast modes, and simplified navigation patterns.</p>`,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=800&fit=crop",
        imageAlt: "App interface design and user flow"
      },
      {
        id: 6,
        text: `<h3>Impact & Success Metrics</h3>
        <p>Aurora launched to critical acclaim, earning features in the App Store and recognition from design communities worldwide. More importantly, it's making a real difference in users' lives.</p>
        
        <p>User engagement metrics exceeded all projections, with an average session time of 12 minutes and a retention rate of 68% after 30 days. Users report feeling more in control of their wellness journey and appreciate the app's non-judgmental approach to health tracking.</p>
        
        <p>The modular design system we created has enabled the Aurora team to rapidly iterate and add new features while maintaining consistency. It's a living platform that continues to evolve with its users' needs.</p>`,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop",
        imageAlt: "App success metrics and user testimonials"
      }
    ]
  },
  {
    id: 3,
    slug: "meridian-architecture-website",
    title: "Meridian Architecture",
    subtitle: "Digital Portfolio & Brand Experience",
    description: "A sophisticated web presence for a boutique architecture firm, showcasing their portfolio through immersive storytelling and elegant visual design.",
    category: "Web Design",
    tags: ["Website", "Architecture", "Portfolio", "Brand Experience"],
    featured: false,
    publishedAt: "2023-11-08",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=1000&fit=crop",
    imageAlt: "Meridian Architecture website homepage",
    sections: [
      {
        id: 7,
        text: `<h3>Architectural Storytelling</h3>
        <p>Architecture is about more than buildings - it's about creating spaces that enhance human experience. Meridian Architecture needed a digital presence that could convey this philosophy while showcasing their exceptional portfolio of residential and commercial projects.</p>
        
        <p>Our approach was to treat the website itself as an architectural space, with careful attention to proportion, light, and movement. Each project is presented as a journey, with photography, drawings, and narrative coming together to tell the complete story of each design.</p>`,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop",
        imageAlt: "Architecture project showcase layout"
      },
      {
        id: 8,
        text: `<h3>Technical Excellence</h3>
        <p>The website leverages cutting-edge web technologies to create smooth, engaging interactions without compromising performance. Large-format images load seamlessly, animations feel natural, and the experience adapts beautifully across all devices.</p>
        
        <p>We implemented a custom content management system that allows the Meridian team to easily update their portfolio while maintaining the site's sophisticated design standards. The backend is optimized for SEO and fast loading times, ensuring the beautiful design reaches the widest possible audience.</p>`,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=800&fit=crop",
        imageAlt: "Technical architecture and responsive design"
      },
      {
        id: 9,
        text: `<h3>Results & Recognition</h3>
        <p>The new website has become a powerful business development tool for Meridian, leading to a 45% increase in qualified leads and several high-profile project commissions. The site has been featured in design galleries and won recognition from industry organizations.</p>
        
        <p>Beyond metrics, the website has helped establish Meridian as a thought leader in sustainable design. Their blog posts and case studies now reach thousands of readers monthly, positioning them at the forefront of architectural innovation.</p>`,
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=600&h=800&fit=crop",
        imageAlt: "Website analytics and recognition awards"
      }
    ]
  },
  {
    id: 4,
    slug: "bloom-restaurant-identity",
    title: "Bloom",
    subtitle: "Restaurant Brand & Interior Design",
    description: "A complete brand and spatial experience for a farm-to-table restaurant, celebrating the connection between food, community, and the natural world.",
    category: "Brand Identity",
    tags: ["Branding", "Restaurant", "Interior Design", "Sustainability"],
    featured: true,
    publishedAt: "2024-03-10",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=1000&fit=crop",
    imageAlt: "Bloom restaurant interior and branding",
    sections: [
      {
        id: 10,
        text: `<h3>Cultivating Connection</h3>
        <p>Bloom represents a new generation of restaurants that prioritize sustainability, community, and authentic experiences over trendy aesthetics. The brand needed to communicate these values while appealing to discerning diners who appreciate both exceptional food and thoughtful design.</p>
        
        <p>Our brand strategy centered on the concept of growth and renewal - the idea that every meal is an opportunity to nourish both body and soul. This philosophy influenced everything from the logo design to the selection of materials and the layout of the dining space.</p>`,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=800&fit=crop",
        imageAlt: "Bloom brand identity and logo development"
      },
      {
        id: 11,
        text: `<h3>Spatial Harmony</h3>
        <p>The interior design creates an environment that feels both sophisticated and welcoming, like dining in a beautifully tended garden. Natural materials, living plants, and carefully curated lighting create an atmosphere that changes subtly throughout the day.</p>
        
        <p>We worked closely with local artisans to create custom furniture and fixtures that reflect the restaurant's commitment to supporting the community. Every element tells a story, from the reclaimed wood tables to the hand-thrown ceramic plates that showcase each dish.</p>
        
        <p>The open kitchen design allows diners to witness the culinary artistry while maintaining an intimate dining atmosphere. Strategic sight lines and acoustic treatments ensure that the energy of food preparation enhances rather than overwhelms the dining experience.</p>`,
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=800&fit=crop",
        imageAlt: "Restaurant interior design and custom furniture"
      },
      {
        id: 12,
        text: `<h3>A Living Brand</h3>
        <p>Six months after opening, Bloom has become a cornerstone of the local dining scene. The restaurant consistently operates at capacity, with a waiting list that extends weeks in advance. More importantly, it has fostered genuine connections between diners, local farmers, and the broader community.</p>
        
        <p>The brand extends beyond the physical space through carefully crafted packaging, a cookbook featuring seasonal recipes, and workshops that teach sustainable cooking techniques. Bloom has become not just a restaurant, but a movement toward more conscious dining.</p>`,
        image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=600&h=800&fit=crop",
        imageAlt: "Restaurant success and community impact"
      }
    ]
  },
  {
    id: 5,
    slug: "nova-startup-identity",
    title: "Nova",
    subtitle: "Tech Startup Brand Identity",
    description: "A forward-thinking brand identity for a fintech startup focused on making investment accessible to everyone, combining trust with innovation.",
    category: "Brand Identity",
    tags: ["Startup", "Fintech", "Logo Design", "Digital Brand"],
    featured: false,
    publishedAt: "2023-09-22",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=1000&fit=crop",
    imageAlt: "Nova fintech brand identity",
    sections: [
      {
        id: 13,
        text: `<h3>Democratizing Finance</h3>
        <p>Nova entered the crowded fintech space with a mission to make sophisticated investment strategies accessible to everyday people. The challenge was creating a brand that conveyed both trustworthiness and innovation - appearing established enough to handle people's money while dynamic enough to disrupt traditional finance.</p>
        
        <p>Our research revealed that potential users were intimidated by existing investment platforms, which either looked too corporate and complex or too simplistic and unprofessional. Nova needed to strike the perfect balance: approachable yet sophisticated, friendly yet secure.</p>`,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop",
        imageAlt: "Market research and brand positioning"
      },
      {
        id: 14,
        text: `<h3>Visual Innovation</h3>
        <p>The Nova identity system builds on the concept of growth and expansion - the idea that smart investments can help people reach their full potential. The logo combines geometric precision with organic growth patterns, suggesting both stability and possibility.</p>
        
        <p>The color palette balances trust-building blues with energizing accent colors, while the typography system pairs a reliable sans-serif for body text with a more distinctive display font for headlines and key messaging. Interactive elements use subtle animations that feel confident rather than flashy.</p>`,
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop",
        imageAlt: "Brand identity system and applications"
      },
      {
        id: 15,
        text: `<h3>Market Impact</h3>
        <p>Nova's thoughtful brand positioning helped them stand out in a competitive market, leading to successful Series A funding and rapid user acquisition. The brand has been featured in major business publications and recognized for its innovative approach to financial design.</p>
        
        <p>User testing consistently shows high brand affinity scores, with customers citing Nova's approachable yet professional image as a key factor in their decision to invest. The brand system has scaled successfully across web, mobile, and marketing applications while maintaining consistency and impact.</p>`,
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=800&fit=crop",
        imageAlt: "App interface and user testimonials"
      }
    ]
  }
];

// Helper function to get project by slug (for testing without GitHub API)
export function getMockProjectBySlug(slug: string): TProject | null {
  return mockProjects.find(project => project.slug === slug) || null;
}

// Helper function to get all mock projects
export function getAllMockProjects(): TProject[] {
  return mockProjects;
}

// Helper function to get featured projects
export function getFeaturedMockProjects(): TProject[] {
  return mockProjects.filter(project => project.featured);
}
