import { AuthLock } from "@/components/others/auth-lock";
import { PreBlock } from "@/components/others/pre-block";
import { useMsal } from "@azure/msal-react";
import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { accounts, instance } = useMsal();
  const navigate = Route.useNavigate();
  const location = useLocation();
  const sth = Route.path;

  // }, 200);

  // navigate({
  //   to: "/auth/signin",
  //   search: {
  //     r: location?.pathname ?? undefined,
  //   },
  // });

  return (
    <>
      {" "}
      <div className="">
        <Outlet />
      </div>
      <AuthLock />
    </>
  );
}
