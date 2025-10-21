import { Link } from "react-router-dom";
export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/svg/logo.svg"
        alt="AVI Name Logo"
        className="h-10 w-auto"
      />
    </Link>
  );
};
