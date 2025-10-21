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
import { Mic, FileText, Briefcase, Bot, PenTool, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

// Helper component for Service Cards to keep code clean
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
  <Card className="flex flex-col text-center items-center hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
    <CardHeader>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <CardTitle className="text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription>{description}</CardDescription>
    </CardContent>
    <CardFooter className="w-full">
      <Button asChild variant={isPrimary ? "default" : "secondary"} className="w-full">
        <Link to={link}>{isPrimary ? "Start Practicing Now" : "Coming Soon"}</Link>
      </Button>
    </CardFooter>
  </Card>
);

export const ServicesPage = () => {
  return (
    <div className="container mx-auto max-w-6xl py-12 md:py-20 px-4">
      {/* 1. Hero Section */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Our Services
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          We provide AI-powered tools and resources designed to give you a
          competitive edge in your career journey.
        </p>
      </div>

      {/* 2. Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
        <ServiceCard
          icon={<Mic className="w-8 h-8 text-primary" />}
          title="AI Interview Prep"
          description="Our core service. Practice real-world interview questions and get instant, detailed feedback on your answers, communication, and confidence."
          link="/generate"
          isPrimary={true}
        />
        <ServiceCard
          icon={<FileText className="w-8 h-8 text-primary" />}
          title="Resume Building"
          description="A great resume is your ticket to an interview. Our upcoming tools will help you craft a compelling resume that stands out to recruiters."
          link="#" // Placeholder link
        />
        <ServiceCard
          icon={<Briefcase className="w-8 h-8 text-primary" />}
          title="Career Coaching"
          description="Navigate your career path with confidence. Our future 1-on-1 coaching sessions will help you set goals and develop strategies for long-term success."
          link="#" // Placeholder link
        />
      </div>

      {/* 3. How It Works Section */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
              <Bot size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Generate Your Interview</h3>
            <p className="text-muted-foreground">
              Provide your job role and experience, and our AI will create a
              tailored set of interview questions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
              <PenTool size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Practice & Record</h3>
            <p className="text-muted-foreground">
              Answer the questions just like you would in a real interview. Our
              platform records your responses for analysis.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
              <BarChart size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Get Instant Feedback</h3>
            <p className="text-muted-foreground">
              Receive a detailed report on your performance, including strengths,
              weaknesses, and actionable tips.
            </p>
          </div>
        </div>
      </div>
      
      {/* 4. FAQ Section */}
      <div className="max-w-3xl mx-auto mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the AI feedback work?</AccordionTrigger>
            <AccordionContent>
              Our AI analyzes various aspects of your response, including the
              clarity of your answer, the use of relevant keywords, your speaking
              pace, and the use of filler words. It then provides a comprehensive
              report with actionable suggestions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Is my interview practice private?
            </AccordionTrigger>
            <AccordionContent>
              Yes, absolutely. Your practice sessions are completely private and
              confidential. We prioritize your privacy and data security.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What kind of job roles are supported?
            </AccordionTrigger>
            <AccordionContent>
              Our platform supports a wide range of job roles across various
              industries, from software development and marketing to finance and
              project management. The AI tailors questions based on the role you
              provide.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* 5. Final CTA */}
      <Card className="text-center p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Stop guessing and start improving with data-driven feedback. Your
          dream job is just a few practice sessions away.
        </p>
        <Button asChild size="lg">
          <Link to="/generate">Get Started for Free</Link>
        </Button>
      </Card>
    </div>
  );
};
