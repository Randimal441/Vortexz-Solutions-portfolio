export type ProjectCategory =
  | "Websites"
  | "E-Commerce"
  | "Web Systems"
  | "Mobile Apps"
  | "UI/UX";

export interface ProjectItem {
  title: string;
  slug: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  clientRegion: "Sri Lanka" | "Australia" | "International";
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  deliverables: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    title: "Apex Logistics Management System",
    slug: "apex-logistics-portal",
    category: "Web Systems",
    tagline: "Centralized fleet dispatch, consignee tracking, and manifest management system.",
    description: "A custom web-based operational system built to streamline shipment coordination, dispatch tracking, and invoice validation for regional distribution operations.",
    image: "/projects/apex-logistics.svg",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://demo.vortexzsolutions.com/apex-logistics",
    featured: true,
    clientRegion: "Sri Lanka",
    overview: "Apex Logistics required a modernized, browser-based management portal to replace spreadsheet-heavy dispatch workflows. The system unifies route assignments, driver dispatch records, and customer consignment verification into a responsive web platform.",
    challenge: "Existing operations suffered from siloed communication between warehouse staff and drivers, delayed consignment status updates, and manually generated paper manifests prone to data entry discrepancy.",
    solution: "We engineered a role-based web application with authenticated dashboards for operations managers and dispatch controllers. The solution delivers instant consignment search, automated invoice calculation, and responsive mobile-friendly check-in views for floor supervisors.",
    keyFeatures: [
      "Role-based authentication with administrative access controls",
      "Dynamic consignment tracker with status timeline indicators",
      "Automated PDF manifest and billing summary generation",
      "Responsive layout operational on desktop and warehouse tablets",
      "Optimized MongoDB data schemas for high query throughput",
    ],
    deliverables: [
      "Custom Web Application",
      "RESTful API & Database Architecture",
      "Warehouse Tablet View",
      "Admin Analytics Dashboard",
    ],
  },
  {
    title: "Aurora DTC Lifestyle E-Commerce",
    slug: "aurora-lifestyle-store",
    category: "E-Commerce",
    tagline: "Modern direct-to-consumer store with dual-currency checkout and inventory management.",
    description: "A high-conversion storefront designed for a lifestyle goods brand, supporting Australian and Sri Lankan payment flows, real-time cart state, and localized currencies.",
    image: "/projects/aurora-store.svg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe API"],
    liveUrl: "https://demo.vortexzsolutions.com/aurora-store",
    featured: true,
    clientRegion: "Australia",
    overview: "Aurora is an apparel and lifestyle brand expanding operations across Australia and regional Asia. They required an online retail experience with sub-second page loads, elegant lookbook browsing, and friction-free mobile checkout.",
    challenge: "The brand's previous platform suffered from sluggish page transitions, poor mobile responsiveness, and high cart abandonment during checkout.",
    solution: "We architected a headless e-commerce frontend powered by Next.js and Tailwind CSS. The interface incorporates rapid faceted product filtering, instant cart updates, and direct integration with Stripe and local payment channels.",
    keyFeatures: [
      "Sub-second page navigation with server-rendered product catalogs",
      "Dynamic currency switcher (AUD / LKR / USD)",
      "Instant multi-step checkout with real-time address validation",
      "Lookbook gallery with tagged shoppable product cards",
      "Full mobile-first checkout optimization",
    ],
    deliverables: [
      "E-Commerce Web Storefront",
      "Payment Gateway Integration",
      "Inventory Catalog UI",
      "Transaction Email Templates",
    ],
  },
  {
    title: "Zenith Advisory Corporate Website",
    slug: "zenith-advisory-group",
    category: "Websites",
    tagline: "Authoritative corporate web presence for a cross-border business consultancy.",
    description: "A clean, executive corporate website built for a boutique advisory firm operating between Melbourne and Colombo, emphasizing trust, practice areas, and market research.",
    image: "/projects/zenith-advisory.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://demo.vortexzsolutions.com/zenith-advisory",
    featured: true,
    clientRegion: "Australia",
    overview: "Zenith Advisory provides cross-border strategic guidance for mid-market commercial firms. They required a website that reflects institutional credibility, showcases practice expertise, and facilitates confidential consultation inquiries.",
    challenge: "Their outdated site failed to convey modern technical capability and lacked clear navigation paths for clients seeking specific industry advisory practices.",
    solution: "We developed a bespoke website centered on clean typography, disciplined spacing, and purposeful interactive navigation. Each advisory practice is detailed with case studies and direct partner inquiry channels.",
    keyFeatures: [
      "Executive aesthetic with custom typography and subtle motion",
      "Structured practice area service matrices and team profiles",
      "Integrated secure consultation inquiry booking form",
      "Comprehensive SEO architecture targeting high-intent advisory keywords",
      "Zero-dependency fast client-side performance",
    ],
    deliverables: [
      "Corporate Web Presence",
      "Practice Area Content Layouts",
      "Consultation Inquiry Flow",
      "SEO & Metadata Architecture",
    ],
  },
  {
    title: "StrataCore Property Inspection Dashboard",
    slug: "stratacore-property-portal",
    category: "Web Systems",
    tagline: "Cloud compliance and maintenance audit portal for property managers.",
    description: "An operational web portal designed for facilities management teams to schedule inspection visits, log building compliance defects, and generate vendor repair tickets.",
    image: "/projects/stratacore-portal.svg",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://demo.vortexzsolutions.com/stratacore",
    featured: true,
    clientRegion: "Australia",
    overview: "StrataCore oversees commercial and residential real estate assets. Field auditors needed a structured browser application to record building condition audits and assign contractors without paperwork delays.",
    challenge: "Contractors received inspection reports in disparate formats, leading to delayed repair quotes and difficulties maintaining statutory safety compliance logs.",
    solution: "We built a centralized property maintenance portal with structured audit forms, photo defect upload capabilities, and automated priority ticketing for registered contractors.",
    keyFeatures: [
      "Property portfolio hierarchy with individual unit audit histories",
      "Defect classification with urgency matrix and contractor assignment",
      "Instant PDF audit certificate generation for compliance authorities",
      "Granular permission levels for auditors, owners, and contractors",
      "Responsive UI designed for both tablets on-site and desktop back-offices",
    ],
    deliverables: [
      "Property Management Portal",
      "Inspection Audit System",
      "Contractor Work-Order Flow",
      "API & Database Schema Design",
    ],
  },
  {
    title: "Verve Mobility Fleet Companion",
    slug: "verve-mobility-app",
    category: "Mobile Apps",
    tagline: "Cross-platform mobile application for vehicle inspection and telemetry logging.",
    description: "A hybrid mobile app enabling transport operators to perform pre-trip safety checks, log odometer readings, and report vehicle mechanical alerts directly to fleet headquarters.",
    image: "/projects/verve-mobility.svg",
    technologies: ["Flutter", "Dart", "Node.js", "REST APIs", "Android SDK"],
    liveUrl: "https://demo.vortexzsolutions.com/verve-mobility",
    featured: true,
    clientRegion: "Sri Lanka",
    overview: "Verve Mobility manages commercial delivery fleets. They required a standardized mobile tool for drivers to conduct mandatory vehicle roadworthiness assessments before and after daily operations.",
    challenge: "Paper inspection sheets were frequently misplaced or submitted with delays, making immediate maintenance scheduling difficult and putting safety compliance at risk.",
    solution: "We built a lightweight Flutter mobile application with guided step-by-step checklist flows, image capture for vehicle damage, and offline caching when cellular signal is intermittent.",
    keyFeatures: [
      "Offline-first architecture storing reports locally until connection is restored",
      "Photo capture integration with annotated damage markers",
      "Immediate alert triggering for high-severity mechanical defects",
      "Optimized battery footprint and fast biometric driver sign-in",
      "Seamless synchronization with backend dispatch servers",
    ],
    deliverables: [
      "Cross-Platform Mobile App (Android/iOS)",
      "Offline Sync Protocol",
      "Inspection Workflow UX",
      "RESTful Sync Service",
    ],
  },
  {
    title: "Kaelo Studio Brand & Web Experience",
    slug: "kaelo-studio-portfolio",
    category: "UI/UX",
    tagline: "Design system and digital portfolio experience for an architecture agency.",
    description: "An immersive, editorial design system and web portfolio built for a luxury architecture studio, highlighting project imagery and spatial philosophies.",
    image: "/projects/kaelo-studio.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://demo.vortexzsolutions.com/kaelo-studio",
    featured: false,
    clientRegion: "International",
    overview: "Kaelo Studio crafts bespoke residential and commercial spaces. They needed an editorial web platform that functions like an architectural monograph, highlighting materiality, light, and form.",
    challenge: "Traditional template websites failed to render high-resolution architectural photography with appropriate gravitas, often feeling cluttered and generic.",
    solution: "We designed and coded an ultra-clean, minimalist interface with refined grid systems, smooth horizontal galleries, and restrained typography that lets architectural work take center stage.",
    keyFeatures: [
      "Editorial magazine-style grid systems with asymmetrical spacing",
      "Hardware-accelerated image transitions and fluid gallery layouts",
      "Custom architectural project index with filtering by typology and year",
      "Subtle interactive hover previews and modal project narratives",
      "Strict typographic discipline utilizing refined sans-serif scales",
    ],
    deliverables: [
      "UI/UX Design System & Wireframes",
      "Frontend Development",
      "Project Showcase Architecture",
      "Interaction & Animation Models",
    ],
  },
];
