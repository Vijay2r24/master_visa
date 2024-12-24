import FacebookIcon from "../assets/social/Facebook.svg";
import InstagramIcon from "../assets/social/Instagram.svg";
import LinkedinIcon from "../assets/social/linkdein.svg";
import YoutubeIcon from "../assets/social/youtube.svg";
import {
  FaUniversity,
  FaGlobe,
  FaRegCheckCircle,
  FaBriefcase,
} from "react-icons/fa";

export const SocialIcons = {
  facebook: {
    icon: FacebookIcon,
    href: "https://www.facebook.com/mastersvisa2",
  },
  instagram: {
    icon: InstagramIcon,
    href: "https://www.instagram.com/mastersvisa/",
  },
  linkedin: {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/mastersvisa/",
  },
  youtube: {
    icon: YoutubeIcon,
    href: "https://youtube.com/@MastersVisa",
  },
};

export const NavLinks = {
  home: {
    title: "Home",
    href: "/",
  },
  AboutUs: {
    title: "About Us",
    href: "/about-us",
  },
  studyAbroad: {
    title: "Study Abroad",
    href: "#",
    subLinks: [
      { title: "USA", href: "/study-abroad/usa" },
      { title: "uk", href: "/study-abroad/uk" },
      { title: "canada", href: "/study-abroad/canada" },
      { title: "Australia", href: "/study-abroad/australia" },
      { title: "Europe", href: "/study-abroad/europe" },
      { title: "New Zealand", href: "/study-abroad/new-zealand" },
    ],
  },
  ourServices: {
    title: "Our Services",
    href: "#",
    subLinks: [
      { title: "Career Counselling", href: "/services/career-counselling" },
      { title: "Test Preparation", href: "/services/test-preparation" },
      { title: "Application Process", href: "/services/application-process" },
      { title: "Loan Assistance", href: "/services/loan-assistance" },
      { title: "Mock Interviews", href: "/services/mock-interviews" },
      { title: "Visa Guidance", href: "/services/visa-guidance" },
      {
        title: "Pre-Departure Orientation",
        href: "/services/pre-departure-orientation",
      },
      {
        title: "Free Trainings",
        href: "#",
        subLinks: [
          { title: "IELTS", href: "/services/free-trainings/ielts" },
          { title: "PTE", href: "/services/free-trainings/pte" },
          { title: "TOEFL", href: "/services/free-trainings/toefl" },
        ],
      },
    ],
  },
  faq: {
    title: "FAQ",
    href: "/faq",
  },
  news: {
    title: "News",
    href: "/news",
  },
  contact: {
    title: "Contact",
    href: "/contact",
  },
};

export const FooterLinks = [
  {
    title: "Study Abroad",
    footLinks: [
      { title: "USA", href: "/study-abroad/usa" },
      { title: "UK", href: "/study-abroad/uk" },
      { title: "Canada", href: "/study-abroad/canada" },
      { title: "Australia", href: "/study-abroad/australia" },
      { title: "Europe", href: "/study-abroad/europe" },
      { title: "New Zealand", href: "/study-abroad/new-zealand" },
    ],
  },
  {
    title: "Our Services",
    footLinks: [
      { title: "Career Counselling", href: "/services/career-counselling" },
      { title: "Test Preparation", href: "/services/test-preparation" },
      { title: "Application Process", href: "/services/application-process" },
      { title: "Loan Assistance", href: "/services/loan-assistance" },
      { title: "Mock Interviews", href: "/services/mock-interviews" },
      { title: "Visa Guidance", href: "/services/visa-guidance" },
    ],
  },
  {
    title: "Practice Area",
    footLinks: [
      { title: "Home", href: "/" },
      { title: "Study Abroad", href: "/study-abroad" },
      { title: "Test Preps", href: "/test-preps" },
      { title: "About Us", href: "/about-us" },
      { title: "Faq's", href: "/faq" },
    ],
  },
  {
    title: "Test Preps",
    footLinks: [
      { title: "IELTS", href: "/ielts" },
      { title: "PTE", href: "/pte" },
      { title: "TOEFL", href: "/tofel" },
    ],
  },
];
export const ReactCountUp = [
  {
    title: "Years of Experience",
    count: 1000,
    icon: <FaBriefcase size={30} />, // Add the icon here
  },
  {
    title: "Universities",
    count: 1000,
    icon: <FaUniversity size={30} />, // Add the icon here
  },
  {
    title: "Countries",
    count: 1000,
    icon: <FaGlobe size={30} />, // Add the icon here
  },
  {
    title: "Visa Approved",
    count: 1000,
    icon: <FaRegCheckCircle size={30} />, // Add the icon here
  },
];
