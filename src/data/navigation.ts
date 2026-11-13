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
  // { label: "Technology Stack", href: "/#technologies" },
  { label: "Contact Us", href: "/contact-us" },
];

export const REGIONAL_PRESENCE = {
  sriLanka: {
    country: "Sri Lanka",
    city: "Colombo / Kurunegala",
    email: "vortexzsolution@gmail.com",
    phone: "+94 71 199 1415",
    description: "Engineering and client consultation hubs in Colombo and Kurunegala.",
    timeZone: "UTC+5:30 (IST)",
  },
  colombo: {
    country: "Sri Lanka",
    city: "Colombo Hub",
    email: "vortexzsolution@gmail.com",
    phone: "+94 71 199 1415",
    description: "Commercial operations and client technical consultations.",
    timeZone: "UTC+5:30 (IST)",
  },
  kurunegala: {
    country: "Sri Lanka",
    city: "Kurunegala Hub",
    email: "vortexzsolution@gmail.com",
    phone: "+94 71 199 1415",
    description: "Core software engineering and rapid digital system delivery.",
    timeZone: "UTC+5:30 (IST)",
  },
};

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DuY98ZZVE/?mibextid=wwXIfr",
    icon: "Facebook",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/vortexz-solutions",
    icon: "Linkedin",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@vortexzsolutions",
    icon: "TikTok",
  },
];
