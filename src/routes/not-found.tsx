import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      
      <h1 className="text-9xl font-bold text-foreground mb-4">
        404
      </h1>
      
      <h2 className="text-4xl font-bold text-foreground mb-3">
        Something's missing.
      </h2>
      
      <p className="text-lg text-muted-foreground mb-8">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      
      <Button asChild>
        <Link to="/">Go Back to Home</Link>
      </Button>
    </div>
  );
};