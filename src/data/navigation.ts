export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const FOOTER_SERVICES = [
  { label: "Web Development", href: "/services#web-development" },
  { label: "Portfolio Websites", href: "/services#portfolio-websites" },
  { label: "E-Commerce Systems", href: "/services#e-commerce" },
  { label: "Custom Web Systems", href: "/services#custom-web-systems" },
  { label: "Mobile Applications", href: "/services#mobile-apps" },
  { label: "UI/UX Design", href: "/services#ui-ux-design" },
];

export const FOOTER_COMPANY = [
  { label: "About Vortexz", href: "/about-us" },
  { label: "Selected Projects", href: "/projects" },
  { label: "Development Process", href: "/#process" },
  { label: "Technology Stack", href: "/#technologies" },
  { label: "Contact Us", href: "/contact-us" },
];

export const REGIONAL_PRESENCE = {
  sriLanka: {
    country: "Sri Lanka",
    city: "Colombo",
    email: "hello@vortexzsolutions.com",
    phone: "+94 77 000 0000",
    description: "Serving local businesses, startups, and growing enterprises across Sri Lanka.",
    timeZone: "UTC+5:30 (IST)",
  },
  australia: {
    country: "Australia",
    city: "Sydney & Melbourne",
    email: "au@vortexzsolutions.com",
    phone: "+61 2 0000 0000",
    description: "Partnering with Australian founders, SMEs, and digital businesses for high-efficiency offshore engineering.",
    timeZone: "UTC+10 / AEST",
  },
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://linkedin.com/company/vortexz-solutions", icon: "Linkedin" },
  { name: "GitHub", href: "https://github.com/vortexz-solutions", icon: "Github" },
  { name: "Instagram", href: "https://instagram.com/vortexzsolutions", icon: "Instagram" },
  { name: "Facebook", href: "https://facebook.com/vortexzsolutions", icon: "Facebook" },
];
