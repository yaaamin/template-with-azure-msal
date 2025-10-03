import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "@/lib/auth-config";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Providers>
          <Outlet />
        </Providers>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});

const pca = new PublicClientApplication(msalConfig);

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MsalProvider instance={pca}>
        <div>{children}</div>
      </MsalProvider>
    </>
  );
}

export { pca as msalPca };
