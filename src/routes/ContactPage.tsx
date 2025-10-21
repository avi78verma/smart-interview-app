import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  User,
  Book,
} from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
 if (form.current) {
      emailjs.sendForm(
        'service_8cri54e',      
        'template_cmpq9wm',     
        form.current,
        '_10p-fzBMXJx9KQIm'   
      )
      .then(() => {
          setSubmitStatus('success');
          form.current?.reset();
      }, (error: any) => {
          console.error('FAILED...', error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    } else {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Left Side: Information */}
        <div className="bg-gray-100 p-8 md:p-12 flex flex-col justify-between rounded-l-lg">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-12">
              Koi sawal hai ya koi suggestion? Hum aapse sunna chahenge.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+917869495199" className="text-gray-700 hover:underline">+91 78694 95199</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:av400346@gmail.com" className="text-gray-700 hover:underline">av400346@gmail.com</a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <p className="text-gray-700">BGI BHOPAL, <br />BHOPAL, MADHYAPRADESH, 462022</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-12">
            <a href="https://wa.me/917869495199" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors"><WhatsAppIcon className="w-6 h-6" /></a>
            <a href="https://x.com/itz_avi__?t=iJAMQtbR7g0-l6BSWs7dwQ&s=08"  target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/amanverma7869/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="https://www.instagram.com/zero_emotions_.0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 flex items-center justify-center bg-white rounded-r-lg">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input id="name" type="text" placeholder="Your Name" name="name" required className="pl-10 h-12" />
              </div>
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input id="email" type="email" placeholder="Your Email" name="email" required className="pl-10 h-12" />
              </div>

              <div className="relative">
                <Book className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input id="subject" type="text" placeholder="Subject" name="subject" required className="pl-10 h-12" />
              </div>

              <div>
                <Textarea id="message" placeholder="Type your message here..." rows={5} name="message" required className="min-h-[120px]" />
              </div>
              
              <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {submitStatus === 'success' && (<p className="mt-4 text-center text-green-600">Message sent successfully!</p>)}
              {submitStatus === 'error' && (<p className="mt-4 text-center text-red-600">Failed to send. Please try again.</p>)}
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;