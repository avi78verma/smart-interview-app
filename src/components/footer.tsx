import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "./container";
import { MainRoutes } from "../lib/helpers";
// Custom WhatsApp Icon Component (SVG) 
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);
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
              From practice to perfect. Our AI-powered simulator is designed to
              build your confidence and help you land your dream job.
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
            <p className="mb-4">
              BGI BHOPAL , BHOPAL MADHYAPRADESH, 462022
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="https://wa.me/917869495199" 
                icon={<WhatsAppIcon />}
                hoverColor="text-green-500"
              />
              <SocialLink
                href="https://x.com/itz_avi__?t=iJAMQtbR7g0-l6BSWs7dwQ&s=08"
                icon={<Twitter size={24} />}
                hoverColor="text-blue-400"
              />
              <SocialLink
                href="https://www.instagram.com/zero_emotions_.0"
                icon={<Instagram size={24} />}
                hoverColor="text-pink-500"
              />
              <SocialLink
                href="https://www.linkedin.com/in/amanverma7869/"
                icon={<Linkedin size={24} />}
                hoverColor="text-blue-700"
              />
            </div>
          </div>
        </div>
      </Container>
      {/* Copyright Section */}
      <div className="w-full text-center mt-8 pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Avi Verma. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};