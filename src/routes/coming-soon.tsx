import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Hourglass } from "lucide-react"; // Ek achha icon

export const ComingSoonPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      
      <Hourglass className="w-16 h-16 text-primary mb-6" />

      <h1 className="text-7xl font-bold text-foreground mb-4">
        Coming Soon
      </h1>
      
      <h2 className="text-3xl font-bold text-foreground mb-3">
        This page is under construction.
      </h2>
      
      <p className="text-lg text-muted-foreground mb-8">
        We are working hard to bring this feature to you soon.
      </p>
      
      <Button asChild>
        <Link to="/">Go Back to Home</Link>
      </Button>
    </div>
  );
};