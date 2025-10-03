import { createFileRoute } from "@tanstack/react-router";
import { msalPca } from "../__root";
import { PreBlock } from "@/components/others/pre-block";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
  loader: async () => {
    // const accounts = await msalPca.getAllAccounts();
    // return {
    //   accounts,
    // };
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
    <div>
      Hello "/dashboard/"!
      <PreBlock>{JSON.stringify(data, null, 2)}</PreBlock>
    </div>
  );
}
