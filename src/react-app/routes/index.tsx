import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    return await axios.get("/api/health");
  },
});

function Index() {
  const data = Route.useLoaderData();

  return (
    <div className="p-2">
      <Card className="p-4">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Card>
    </div>
  );
}
