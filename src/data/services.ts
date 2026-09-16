export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  technologies: string[];
  featuredOnHome: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Business Website Development",
    shortDescription: "High-performance, SEO-optimized business websites engineered to establish credibility and convert visitors into clients.",
    fullDescription: "We build custom, modern corporate and business websites that communicate your brand value clearly, load instantly, and drive quantifiable business growth across search engines and social channels.",
    iconName: "Globe",
    features: [
      "Custom responsive layouts optimized for all device sizes",
      "Semantic SEO architecture and structured metadata",
      "Fast page load times with Next.js and optimized media",
      "Accessible markup adhering to modern web standards",
      "Content management integration for straightforward updates",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    featuredOnHome: true,
  },
  {
    id: "portfolio-websites",
    number: "02",
    title: "Portfolio Websites",
    shortDescription: "Distinctive, high-impact portfolios for agencies, executives, creative directors, and professionals.",
    fullDescription: "Showcase your work and achievements with a bespoke portfolio that commands authority. Designed with purposeful animations, crystal-clear typography, and frictionless presentation.",
    iconName: "Briefcase",
    features: [
      "Interactive project showcases and case study layouts",
      "Fluid micro-animations and smooth page transitions",
      "Fast image and video optimization",
      "Streamlined contact and lead generation funnels",
      "Clean social proof and credential presentation",
    ],
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    featuredOnHome: true,
  },
  {
    id: "e-commerce",
    number: "03",
    title: "E-Commerce Development",
    shortDescription: "Scalable online stores with seamless checkouts, inventory synchronization, and secure payment workflows.",
    fullDescription: "Robust e-commerce platforms tailored to Sri Lankan payment gateways (such as PayHere, WebXpay) and Australian global payment standards (Stripe, PayPal, Afterpay), delivering frictionless purchasing experiences.",
    iconName: "ShoppingBag",
    features: [
      "Secure multi-currency payment gateway integrations",
      "Intuitive product catalogs, filtering, and search systems",
      "Real-time cart state management and checkout flow",
      "Automated order confirmation and email notifications",
      "Mobile-first purchasing experience",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
    featuredOnHome: true,
  },
  {
    id: "custom-web-systems",
    number: "04",
    title: "Custom Web Systems",
    shortDescription: "Bespoke internal portals, dashboards, customer management tools, and workflow automation systems.",
    fullDescription: "Eliminate repetitive manual overhead with purpose-built web systems. From client portals to internal management tools, we build systems modeled around your specific operational workflows.",
    iconName: "Layers",
    features: [
      "Role-based access control (RBAC) and user authentication",
      "Real-time data visualization and operational dashboards",
      "Automated workflow logic and report generation",
      "API integrations with existing enterprise systems",
      "Reliable database schemas and audit logging",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "REST APIs"],
    featuredOnHome: true,
  },
  {
    id: "mobile-apps",
    number: "05",
    title: "Mobile Application Development",
    shortDescription: "Cross-platform mobile applications for iOS and Android delivering native-grade fluidity and offline capabilities.",
    fullDescription: "We build intuitive mobile apps using Flutter and modern mobile frameworks, giving your business a presence on Google Play and Apple App Store with a single maintainable codebase.",
    iconName: "Smartphone",
    features: [
      "Unified iOS and Android cross-platform delivery",
      "Native device integration (camera, location, notifications)",
      "Offline caching and optimistic state synchronization",
      "Secure API communication and biometric authentication",
      "App Store and Google Play preparation and release support",
    ],
    technologies: ["Flutter", "Dart", "Android SDK", "Node.js", "REST APIs"],
    featuredOnHome: true,
  },
  {
    id: "ui-ux-design",
    number: "06",
    title: "UI/UX Design",
    shortDescription: "User-centric interface architecture, wireframing, interactive prototyping, and design systems.",
    fullDescription: "Design that balances aesthetic polish with functional clarity. We design web and mobile interfaces that minimize user friction, elevate brand perception, and optimize task completion rates.",
    iconName: "Layout",
    features: [
      "User journey mapping and information architecture",
      "Interactive high-fidelity wireframes and prototypes",
      "Reusable component design systems and style guides",
      "Responsive breakpoint specifications for all viewports",
      "Accessibility and contrast compliance audits",
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    featuredOnHome: true,
  },
  {
    id: "custom-software",
    number: "07",
    title: "Custom Software Development",
    shortDescription: "Engineered backends, RESTful microservices, and specialized business logic implementations.",
    fullDescription: "When off-the-shelf software falls short, we engineer tailor-made software solutions designed for high reliability, clean data contracts, and long-term maintainability.",
    iconName: "Code2",
    features: [
      "Scalable backend architecture with Node.js and TypeScript",
      "Data modeling, indexing, and persistent storage with MongoDB",
      "RESTful API design with thorough documentation",
      "Third-party system and payment webhook integrations",
      "Automated unit testing and clean code practices",
    ],
    technologies: ["Node.js", "TypeScript", "MongoDB", "Express", "Git", "GitHub"],
    featuredOnHome: false,
  },
  {
    id: "maintenance-support",
    number: "08",
    title: "Website Maintenance & Support",
    shortDescription: "Proactive uptime monitoring, security patching, performance optimization, and regular feature updates.",
    fullDescription: "Ensure your digital assets remain secure, fast, and up to date. We offer structured monthly retainers and on-demand maintenance to keep your digital infrastructure running without interruption.",
    iconName: "ShieldCheck",
    features: [
      "Security patches, dependency updates, and vulnerability audits",
      "Continuous uptime monitoring and health checks",
      "Core Web Vitals and speed performance tuning",
      "Regular automated data backups and disaster recovery",
      "Rapid bug resolution and scheduled content enhancements",
    ],
    technologies: ["Next.js", "Git", "GitHub Actions", "Vercel", "Monitoring Tools"],
    featuredOnHome: false,
  },
];
