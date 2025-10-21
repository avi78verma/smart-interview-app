import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Mic, FileText, Briefcase, BrainCircuit, ShieldCheck, TrendingUp, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { cn } from "../lib/utils";

// --- Service Card Component with Enhanced Hover Effects ---
const ServiceCard = ({
  icon,
  title,
  description,
  link,
  isPrimary,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  isPrimary?: boolean;
}) => (
  <Card className={cn(
    "group flex flex-col text-center items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out relative overflow-hidden",
    isPrimary && "border-2 border-primary shadow-primary/20"
  )}>
    {/* Animated glow effect on hover */}
    <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
    
    <CardHeader className="pt-8 z-10">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto ring-4 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow z-10">
      <CardDescription className="text-slate-600 dark:text-slate-400">{description}</CardDescription>
    </CardContent>
    <CardFooter className="w-full p-6 z-10">
      <Button asChild variant={isPrimary ? "default" : "secondary"} className="w-full">
        <Link to={link}>{isPrimary ? "Start Practicing Now" : "Coming Soon"}</Link>
      </Button>
    </CardFooter>
  </Card>
);

// --- New "How It Works" Step Component ---
const HowItWorksStep = ({ number, title, description }: { number: string, title: string, description: string }) => (
    <div className="relative pl-12 pb-12 group">
        {/* Number and connecting line */}
        <div className="absolute left-0 top-0 flex items-center">
            <div className="z-10 flex items-center justify-center w-12 h-12 text-2xl font-bold text-white bg-primary rounded-full ring-4 ring-white dark:ring-slate-900 group-hover:bg-primary/90 transition-colors">
                {number}
            </div>
            {/* The line connecting the steps */}
            <div className="absolute left-6 top-12 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>
        </div>
        <div className="ml-4">
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">{title}</h3>
            <p className="text-slate-500 dark:text-slate-400">{description}</p>
        </div>
    </div>
);


export const ServicesPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      {/* 1. Hero Section */}
      <div className="relative text-center py-20 md:py-32 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-black z-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
        </div>
        
        <div className="container relative mx-auto px-4 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Master Your Interviews, Master Your Career
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Leverage the power of AI to build confidence, refine your answers, and receive data-driven feedback to land your dream job.
            </p>
            <Button asChild size="lg" className="mt-8 shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link to="/generate">Start for Free</Link>
            </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl py-16 md:py-24 px-4">
        {/* 2. Services Grid */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Suite of Tools</h2>
            <p className="text-muted-foreground mt-2">Everything you need to prepare and succeed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Mic className="w-8 h-8 text-primary" />}
            title="AI Interview Practice"
            description="Our core service. Practice with an AI that adapts to your role, providing instant, detailed feedback on your answers and delivery."
            link="/generate"
            isPrimary={true}
          />
          <ServiceCard
            icon={<FileText className="w-8 h-8 text-primary" />}
            title="Resume Analyzer"
            description="Get an edge before you even apply. Our tool analyzes your resume against job descriptions and provides actionable insights."
            link="#"
          />
          <ServiceCard
            icon={<Briefcase className="w-8 h-8 text-primary" />}
            title="Career Pathing"
            description="Navigate your career with confidence. Identify skill gaps and discover personalized learning paths for long-term growth."
            link="#"
          />
        </div>

        {/* 3. NEW "How It Works" Section */}
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">A Simple Path to Success</h2>
                <p className="text-muted-foreground mb-10">Getting started is easy. Follow these simple steps to begin your journey towards interview mastery.</p>
                <div>
                    <HowItWorksStep number="1" title="Create Your Mock Interview" description="Tell us your target job role, industry, and experience level. Our AI will generate a tailored set of relevant questions." />
                    <HowItWorksStep number="2" title="Practice & Record" description="Simulate a real interview by answering questions. Our system analyzes your spoken answers without ever recording your video." />
                    <HowItWorksStep number="3" title="Receive Instant Feedback" description="Get a comprehensive report on your performance, highlighting strengths and providing clear, actionable tips for improvement." />
                    {/* Final step without a line */}
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-0 flex items-center">
                            <div className="z-10 flex items-center justify-center w-12 h-12 text-2xl font-bold text-white bg-primary rounded-full ring-4 ring-white dark:ring-slate-900">
                                <Check />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Land the Job</h3>
                            <p className="text-slate-500 dark:text-slate-400">Walk into your next real interview with unshakable confidence and a competitive edge.</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="hidden md:block">
                <img src="/assets/img/office.jpg" alt="Person practicing for an interview" className="rounded-xl shadow-2xl w-full h-full object-cover"/>
            </div>
        </div>

        {/* 4. FAQ Section */}
        <div className="max-w-3xl mx-auto my-24 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-b border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-left hover:no-underline">How does the AI feedback work?</AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                Our AI analyzes your spoken response for clarity, keyword relevance, pacing, and filler words. It benchmarks your answer against industry standards and the ideal answer to provide a comprehensive report with actionable suggestions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-left hover:no-underline">
                Is my interview practice private and secure?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                Yes, absolutely. Privacy is our top priority. Your practice sessions are confidential, and we never record or store your video. All analysis is done on your audio and transcribed text.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="text-left hover:no-underline">
                What kind of job roles are supported?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                Our platform supports a vast range of roles across industries like Tech, Marketing, Finance, and Project Management. The AI dynamically tailors questions based on the specific role and experience level you provide.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* 5. Final CTA */}
        <div className="text-center p-8 md:p-16 rounded-2xl bg-gradient-to-r from-primary to-slate-800 dark:to-black shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Career?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Stop guessing and start improving with data-driven feedback. Your
            dream job is just a few practice sessions away.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg hover:scale-105 transition-transform">
            <Link to="/generate">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

