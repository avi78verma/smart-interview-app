import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Goal,
  Rocket,
  CheckCircle2,
  PieChart,
  ShieldCheck,
  Clock,
} from "lucide-react";
import React from 'react'; 
export const AboutPage = () => {
  return (
    <div className="container mx-auto max-w-5xl py-12 md:py-20 px-4">
      {/* 1. Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          About Smart Interview Simulator
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Our mission is simple: to eliminate the fear of interview preparation.
        </p>
      </div>

      <hr className="my-12 border-border" />

      {/* 2. Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="flex flex-col hover:shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out">
          <CardHeader className="flex flex-row items-center space-x-3">
            <Goal className="w-10 h-10 text-primary" />
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground flex-grow">
            We believe that every deserving candidate should have the opportunity
            to land their dream job. Often, interview anxiety or lack of proper
            practice stands in their way. "Smart Interview Simulator" is designed
            to solve this very problem.
          </CardContent>
        </Card>
        <Card className="flex flex-col hover:shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out">
          <CardHeader className="flex flex-row items-center space-x-3">
            <Rocket className="w-10 h-10 text-primary" />
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground flex-grow">
            We envision a world where no talented individual has to hold back
            due to the fear of "what to say in an interview." Our vision is to
            help every candidate reach their full potential with the power of
            technology.
          </CardContent>
        </Card>
      </div>

      {/* 3. What We Do Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<CheckCircle2 className="w-8 h-8 text-primary" />}
            title="Realistic Mock Interviews"
            description="Practice tailored interview questions based on your job role and experience level."
          />
          <InfoCard
            icon={<PieChart className="w-8 h-8 text-primary" />}
            title="Instant, Detailed Analysis"
            description="Our AI provides detailed insights on your communication, answer structure, and even filler words."
          />
          <InfoCard
            icon={<ShieldCheck className="w-8 h-8 text-primary" />}
            title="Personalized Feedback"
            description="Understand where you performed well and where improvements are needed for your next interview."
          />
        </div>
      </div>

      <hr className="my-12 border-border" />

      {/* 4. Why Choose Us Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<Clock className="w-8 h-8 text-primary" />}
            title="Practice Anytime, 24/7"
            description="No need to schedule mock interviews with a real person. Our AI is ready for you 24/7."
          />
          <InfoCard
            icon={<ShieldCheck className="w-8 h-8 text-primary" />}
            title="A Safe Space to Fail"
            description="Make mistakes 10 times without any pressure, learn, and become better."
          />
          <InfoCard
            icon={<Goal className="w-8 h-8 text-primary" />}
            title="Data-Driven Improvement"
            description="Our feedback is not based on guesswork, but on accurate data and insights."
          />
        </div>
      </div>
    </div>
  );
};

// Helper Component
const InfoCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="hover:shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out">
    <CardHeader>
      <div className="mb-4">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);