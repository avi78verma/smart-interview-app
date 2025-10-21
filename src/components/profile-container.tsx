import { useAuth, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const ProfileContainer = () => {
  const { isSignedIn, isLoaded } = useAuth();
if (!isLoaded) {
  return (
    <div className="h-8 w-8 rounded-full bg-muted animate-pulse"></div> // Simple placeholder
  );
}
  return (
    <div className="flex items-center gap-6">
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link to={"/signin"}>
          <Button size={"sm"}>Get Started</Button>
        </Link>
      )}
    </div>
  );
};
