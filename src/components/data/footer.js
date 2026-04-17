import footerLogo from "../../assets/footer-logo.png";
import jazzCashLogo from "../../assets/jazzcash.png";
import easyPaisaLogo from "../../assets/easypaisa.png";
import visaLogo from "../../assets/visa.png";
import masterCardLogo from "../../assets/mastercard.png";



export const footerTopContent = {
  logo: footerLogo,
  tagline:
    "We are Pakistan's leading insurance marketplace helping individuals and businesses find the best insurance plan.",
  companyInfo:
    "Smartchoice.pk is managed by Smart PFM Pvt Ltd and registered with SECP with NTN No. 7461155 and is located at C, 3rd Floor, 104 Khayaban-e-Ittehad Road, D.H.A Phase II Ext, Karachi, Karachi City, Sindh 75500.",
};

export const footerSections = [
  {
    id: "insurance",
    title: "Insurance",
    columns: [
      [
        { label: "Car Insurance", href: "#" },
        { label: "Bike Insurance", href: "#" },
        { label: "Global Travel Insurance", href: "#" },
        { label: "Hospital Cash", href: "#" },
      ],
      [
        { label: "Travel Insurance", href: "#" },
        { label: "Motor Takaful", href: "#" },
        { label: "Term Life", href: "#" },
      ],
      [
        { label: "Health Insurance", href: "#" },
        { label: "Travel Takaful", href: "#" },
        { label: "Personal Accident", href: "#" },
      ],
    ],
  },
  {
    id: "investment",
    title: "Investment",
    columns: [
      [
        { label: "Askari Life Assurance", href: "#" },
        { label: "Child Education/Marriage Plan", href: "#" },
        { label: "Endowment Plan", href: "#" },
      ],
      [
        { label: "State Life Insurance", href: "#" },
        { label: "Jeevan Sathi Plan", href: "#" },
      ],
      [
        { label: "Whole Life Assurance Plan", href: "#" },
        { label: "Retirement Plan", href: "#" },
      ],
    ],
  },
  {
    id: "partners",
    title: "Partners",
    columns: [
      [
        { label: "Jubilee General", href: "#" },
        { label: "Askari", href: "#" },
        { label: "IGI General", href: "#" },
        { label: "IGI Life", href: "#" },
      ],
      [
        { label: "Adamjee", href: "#" },
        { label: "TPL General", href: "#" },
        { label: "TPL Life", href: "#" },
        { label: "Pak Qatar Takaful", href: "#" },
      ],
      [
        { label: "UIC", href: "#" },
        { label: "EFU General", href: "#" },
        { label: "EFU Life", href: "#" },
        { label: "UBL", href: "#" },
      ],
    ],
  },
  {
    id: "about",
    title: "About",
    columns: [
      [
        { label: "About us", href: "#" },
        { label: "How we work", href: "#" },
        { label: "Blog", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "T&C", href: "#" },
      ],
      [
        { label: "Media Center", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Refund Policy", href: "#" },
        { label: "View My Policies", href: "#" },
      ],
    ],
    rightContent: {
      title: "Get Free Advice",
      phone: "[021] 111-212-212",
      socialLinks: [
        { label: "Facebook", href: "#", short: "f" },
        { label: "Twitter", href: "#", short: "t" },
        { label: "LinkedIn", href: "#", short: "in" },
      ],
    },
  },
];

export const paymentMethods = [
  { id: 1, name: "JazzCash", image: jazzCashLogo },
  { id: 2, name: "Easypaisa", image: easyPaisaLogo },
  { id: 3, name: "Visa", image: visaLogo },
  { id: 4, name: "MasterCard", image: masterCardLogo },
];

export const footerBottomText =
  "Smartchoice.pk has taken reasonable efforts to ensure that all contents of the website are accurate and free of error. However at no time can it be guaranteed that mistakes are not present. Smartchoice.pk reserve's the right to change website content at any time and without prior notice. Smartchoice.pk does at no time guarantee that the contents of its website are suitable to any individual case and in no event will Smartchoice.pk warrant or guarantee the suitability for any user or purpose of information, services or products on this website.";