import { PreBlock } from "@/components/others/pre-block";
import { useMsal } from "@azure/msal-react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import React from "react";

export const AuthLock = () => {
  const { accounts } = useMsal();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (accounts.length === 0) {
      // Prevent infinite redirect loop
      if (location.pathname !== "/auth/signin") {
        navigate({
          to: "/auth/signin",
          search: {
            r: location.pathname,
          },
        });
      }
    }
  }, [accounts, location, navigate]);
  return <></>;
};
