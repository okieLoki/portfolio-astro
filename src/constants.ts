import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "okieLoki",
  DESCRIPTION: "Blog and portfolio of Uddeepta",
  EMAIL: "uddeepta12@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const EXPERIENCE: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "A summary of my work experience and key projects.",
}

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/UddeeptaK",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/okieLoki",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/uddeeptark",
  },
];

export const EXPERIENCE_DETAILS = [
  {
    title: "Backend Developer",
    company: "KoinX",
    period: "Apr 2024 – Oct 2024",
    link: "https://koinx.com",
    details: {
      "Tech Stack": "Node.js, NATS, Redis, AWS, MongoDB",
      "Key Projects": "Crypto Exchange Integration (15+ major platforms including ByBit, Bitget, Swyftx)",
      "Impact": [
        "Optimized MongoDB performance through indexing",
        "Implemented Repository pattern for scalable architecture",
        "Enhanced testing coverage with Mocha, Chai and Sinon"
      ]
    }
  },
  {
    title: "FullStack Developer",
    company: "Pixel Canine Studios",
    link: "https://pixelcanine.com",
    period: "Feb 2024 – Apr 2024",
    details: {
      "Tech Stack": "Next.js, Sanity, Shopify, Stripe",
      "Projects": "Lotus Glades, Spread Home",
      "Impact": "40% improvement in SEO scores and click-through rates"
    }
  },
  {
    title: "Frontend Developer",
    company: "When In My City",
    link: "https://wheninmycity.vercel.app/",
    period: "Oct 2023 – Dec 2023",
    details: {
      "Tech Stack": "Next.js, Prisma, Planetscale, React Native",
      "Features": "User onboarding flow, Events listicles with Google Maps integration",
      "Focus": "UX optimization and real-time data integration"
    }
  }
];