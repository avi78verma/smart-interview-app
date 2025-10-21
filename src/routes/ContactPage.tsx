import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram, // GitHub ki jagah Instagram
} from "lucide-react";
import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser';

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

export const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // const sendEmail = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   if (form.current) {
  //     emailjs.sendForm(
  //       'YOUR_SERVICE_ID',
  //       'YOUR_TEMPLATE_ID',
  //       form.current,
  //       'YOUR_PUBLIC_KEY'
  //     )
  //     .then((result) => {
  //         setSubmitStatus('success');
  //         form.current?.reset();
  //     }, (error) => {
  //         setSubmitStatus('error');
  //     })
  //     .finally(() => {
  //       setIsSubmitting(false);
  //     });
  //   } else {
  //     setSubmitStatus('error');
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="container mx-auto max-w-5xl py-12 md:py-20 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Get In Touch With Us
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          We'd love to hear from you! Fill out the form below or reach us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <Card className="hover:shadow-lg hover:scale-[1.005] transition-all duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-3xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form ref={form}  className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" type="text" placeholder="John Doe" name="name" required />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" name="email" required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Inquiry about pricing" name="subject" required />
              </div>
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="Type your message here." rows={5} name="message" required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && (<p className="mt-4 text-center text-green-600">Message sent successfully!</p>)}
              {submitStatus === 'error' && (<p className="mt-4 text-center text-red-600">Failed to send. Please try again.</p>)}
            </form>
          </CardContent>
        </Card>

        {/* Contact Information & Socials */}
        <div className="space-y-8">
          <Card className="hover:shadow-lg hover:scale-[1.005] transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-3xl">Our Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:av400346@gmail.com" className="text-foreground hover:underline">av400346@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+917869495199" className="text-foreground hover:underline">+917869495199</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">BGI BHOPAL, <br /> BHOPAL, MADHYAPRADESH, 462022</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:scale-[1.005] transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-3xl">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-6">
              {/* === WHATSAPP ICON & LINK === */}
              <a href="https://wa.me/917869495199" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="https://x.com/itz_avi__?t=iJAMQtbR7g0-l6BSWs7dwQ&s=08"  target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/amanverma7869/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* === INSTAGRAM ICON & LINK === */}
              <a href="https://www.instagram.com/zero_emotions_.0" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
