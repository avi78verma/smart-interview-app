import { LoaderPage } from "../routes/loader-page";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import React from "react";

const ProtectRoutes = ({ children }: { children: React.ReactNode }): React.ReactElement | null => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoaderPage />;
  }

  if (!isSignedIn) {
    return <Navigate to={"/signin"} replace />;
  }

  // Ensure children is a valid React element before returning
  if (React.isValidElement(children)) {
    return children;
  }

  return null;
};

export default ProtectRoutes;