import { Artwork, Project } from '@/types';

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
    image: ' https://raw.githubusercontent.com/YELrhilassi/st-posts/main/images/tomas-pink.png',
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
];

export const fallbackArtworks: Artwork[] = [
  {
    id: 1,
    title: 'Warrior Spirit',
    slug: 'warrior-spirit',
    image: '/placeholder.svg?height=500&width=500',
    year: '2023',
    medium: 'Digital Painting',
    description:
      'A vibrant digital painting exploring themes of strength and resilience through a modern interpretation of traditional warrior imagery.',
    dimensions: '3000 x 4000 px',
    process:
      'Created using Procreate on iPad Pro with Apple Pencil, this piece took approximately 40 hours to complete over the span of two weeks.',
    category: 'digital',
  },
  {
    id: 2,
    title: 'Red Portrait',
    slug: 'red-portrait',
    image: '/placeholder.svg?height=500&width=500',
    year: '2023',
    medium: 'Digital Painting',
    description:
      'A bold portrait study exploring color theory and emotional expression through the dominant use of red tones.',
    dimensions: '2500 x 3000 px',
    process:
      'This portrait was created in Photoshop using a combination of digital brushes to achieve a painterly effect while maintaining precise control over the color palette.',
    category: 'portrait',
  },
  {
    id: 3,
    title: 'Sketch Study',
    slug: 'sketch-study',
    image: '/placeholder.svg?height=500&width=500',
    year: '2022',
    medium: 'Pencil Drawing',
    description:
      'A detailed pencil study focusing on facial expressions and the interplay of light and shadow.',
    dimensions: '8.5 x 11 inches',
    process:
      "Created using graphite pencils of varying hardness on heavyweight drawing paper, with particular attention to capturing the subtle nuances of the subject's expression.",
    category: 'sketch',
  },
  {
    id: 4,
    title: 'Academy Girl',
    slug: 'academy-girl',
    image: '/placeholder.svg?height=500&width=500',
    year: '2022',
    medium: 'Digital Painting',
    description:
      'A character design exploring themes of youth, academia, and coming-of-age narratives.',
    dimensions: '3000 x 4000 px',
    process:
      'This piece was developed through multiple concept sketches before the final rendering in Clip Studio Paint, with a focus on costume design and character expression.',
    category: 'character',
  },
  {
    id: 5,
    title: 'Moonlight Samurai',
    slug: 'moonlight-samurai',
    image: '/placeholder.svg?height=500&width=500',
    year: '2021',
    medium: 'Digital Painting',
    description:
      'An atmospheric piece depicting a samurai silhouetted against a full moon, exploring themes of solitude and honor.',
    dimensions: '4000 x 3000 px',
    process:
      'Created in Photoshop with a focus on atmospheric lighting and silhouette design. The piece went through several iterations to achieve the right balance of mystery and clarity.',
    category: 'illustration',
  },
  {
    id: 6,
    title: 'Blue Portrait',
    slug: 'blue-portrait',
    image: '/placeholder.svg?height=500&width=500',
    year: '2021',
    medium: 'Digital Painting',
    description:
      'A contemplative portrait study using a cool blue color palette to evoke a sense of calm introspection.',
    dimensions: '2400 x 3200 px',
    process:
      'This portrait was painted digitally using a limited color palette to explore how color temperature affects mood and perception of the subject.',
    category: 'portrait',
  },
  {
    id: 7,
    title: 'Fantasy Castle',
    slug: 'fantasy-castle',
    image: '/placeholder.svg?height=500&width=500',
    year: '2020',
    medium: 'Digital Painting',
    description:
      'A whimsical illustration of a Japanese-inspired castle floating among cherry blossoms, blending traditional architecture with fantasy elements.',
    dimensions: '4000 x 3000 px',
    process:
      'This environment piece was created in Procreate, starting with architectural reference studies before developing the fantastical elements and atmospheric effects.',
    category: 'environment',
  },
  {
    id: 8,
    title: 'Magical Couple',
    slug: 'magical-couple',
    image: '/placeholder.svg?height=500&width=500',
    year: '2020',
    medium: 'Digital Painting',
    description:
      'A playful illustration of a young couple with magical elements, exploring themes of connection and whimsy.',
    dimensions: '3500 x 4000 px',
    process:
      'This illustration was developed through character sketches and color studies before the final rendering, with particular attention to the interaction between the two characters.',
    category: 'character',
  },
];
