import { useMsal } from "@azure/msal-react";
import { createFileRoute } from "@tanstack/react-router";
import { loginRequest } from "@/lib/auth-config";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PreBlock } from "@/components/others/pre-block";

export const Route = createFileRoute("/auth/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  const { instance, accounts } = useMsal();
  const navigate = Route.useNavigate();
  const search = Route.useSearch();

  const onSignIn = async () => {
    try {
      // Choose your preferred login flow:
      await instance.loginPopup(loginRequest);
      // OR: await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (accounts.length > 0) {
    navigate({
      to: search?.r ?? "/dashboard",
    });
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-y-4">
      <Card className="p-4 gap-y-4 flex flex-col items-center max-w-3xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Emblem_of_Maldives.svg/250px-Emblem_of_Maldives.svg.png"
          alt="Maldives"
          className="w-20 h-auto"
        />
        <Button onClick={onSignIn}>Sign in</Button>
        <p>
          This application is authorized and powered by Ministry of Social and
          Family Development
        </p>
        <PreBlock>{JSON.stringify(accounts, null, 2)}</PreBlock>
      </Card>
    </div>
  );
}
