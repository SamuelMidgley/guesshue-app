import { Link } from "@remix-run/react";
import { buttonVariants } from "../ui/button";

export const UserActions = () => {
  return (
    <div className="flex gap-4">
      <Link to="/login" className={buttonVariants({ variant: "outline" })}>
        Login
      </Link>
      <Link to="/register" className={buttonVariants({})}>
        Register
      </Link>
    </div>
  );
};
