// import { Link } from "react-router-dom";
// import { Facebook, Twitter, Instagram, Linkedin, LucideIcon } from "lucide-react";
// // import { ModeToggle } from "./theme-toggle"; // <-- YAHAN SE HATA DIYA GAYA HAI

// // Helper component for footer links
// const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
//   <li className="mb-2">
//     <Link
//       to={to}
//       className="text-muted-foreground hover:text-primary transition-colors"
//     >
//       {children}
//     </Link>
//   </li>
// );

// // Helper component for social media links
// const SocialLink = ({ href, Icon }: { href: string; Icon: LucideIcon }) => (
//   <a
//     href={href}
//     target="_blank" // Naye tab mein kholne ke liye
//     rel="noopener noreferrer" // Security ke liye
//     className="text-muted-foreground hover:text-primary transition-colors"
//   >
//     <Icon className="w-5 h-5" />
//   </a>
// );

// export const Footer = () => {
//   return (
//     <footer className="bg-background border-t">
//       <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

//           {/* Column 1: Quick Links */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//             <ul>
//               <FooterLink to="/">Home</FooterLink>
//               <FooterLink to="/contact">Contact Us</FooterLink>
//               <FooterLink to="/about">About Us</FooterLink>
//               <FooterLink to="/services">Services</FooterLink>
//             </ul>
//           </div>

//           {/* Column 2: About Us */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">About Us</h3>
//             <p className="text-muted-foreground text-sm">
//               We are committed to helping you unlock your full potential with
//               AI-powered tools. Our platform offers a wide range of resources to
//               improve your interview skills and chances of success.
//             </p>
//           </div>

//           {/* Column 3: Services */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Services</h3>
//             <ul>
//               <FooterLink to="/services/interview-prep">
//                 Interview Preparation
//               </FooterLink>
//               <FooterLink to="/services/career-coaching">
//                 Career Coaching
//               </FooterLink>
//               <FooterLink to="/services/resume-building">
//                 Resume Building
//               </FooterLink>
//             </ul>
//           </div>

//           {/* Column 4: Contact Us */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Contact Us</h3>
//             <address className="text-muted-foreground text-sm not-italic mb-4">
//               {/* === APNA ADDRESS YAHAN BADLEIN === */}
//               Aapka Address Line 1,<br />
//               Aapka Shahar, State - ZIP Code
//             </address>

//             {/* === APNE SOCIAL LINKS YAHAN BADLEIN === */}
//             <div className="flex space-x-4">
//               <SocialLink href="https://facebook.com/your-id" Icon={Facebook} />
//               <SocialLink href="https://x.com/itz_avi__?t=iJAMQtbR7g0-l6BSWs7dwQ&s=08" Icon={Twitter} />
//               <SocialLink href="https://www.instagram.com/zero_emotions_.0" Icon={Instagram} />
//               <SocialLink href="https://www.linkedin.com/in/amanverma7869/" Icon={Linkedin} />
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6 mt-8">
//           <p className="text-sm text-muted-foreground">
//             &copy; {new Date().getFullYear()} MockPrep AI. All rights reserved.
//           </p>
//           <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//             <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
//             <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
//             {/* <ModeToggle /> <-- AUR YAHAN SE BHI HATA DIYA GAYA HAI */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };






import React from "react";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import Lucide icons
import { Link } from "react-router-dom";
import { Container } from "./container";
import { MainRoutes } from "../lib/helpers";

// import { Container } from "@/components/container";
// import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor}`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline text-gray-300 hover:text-gray-100"
      >
        {children}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-300 hover:text-gray-100 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column: Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Second Column: About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p>
              From practice to perfect. Our AI-powered simulator is designed to build your confidence and help you land your dream job.
            </p>
          </div>

          {/* Third Column: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul>
              <FooterLink to="/services/interview-prep">
                Interview Preparation
              </FooterLink>
              <FooterLink to="/services/career-coaching">
                Career Coaching
              </FooterLink>
              <FooterLink to="/services/resume-building">
                Resume Building
              </FooterLink>
            </ul>
          </div>

          {/* Fourth Column: Address and Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-4">BGI BHOPAL , BHOPAL MADHYAPRADESH, 462022</p>
            <div className="flex gap-4">
              <SocialLink href="https://facebook.com/your-id" icon={<Facebook size={24} />}
                hoverColor="text-blue-500" />
              <SocialLink href="https://x.com/itz_avi__?t=iJAMQtbR7g0-l6BSWs7dwQ&s=08" icon={<Twitter size={24} />}
                hoverColor="text-blue-400" />
              <SocialLink href="https://www.instagram.com/zero_emotions_.0" icon={<Instagram size={24} />}
                hoverColor="text-pink-500" />
              <SocialLink href="https://www.linkedin.com/in/amanverma7869/" icon={<Linkedin size={24} />}
                hoverColor="text-blue-700" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
