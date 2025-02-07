import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "../components/ui/button";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const remixService = context.remixService;

  return json({
    message: remixService.getApi(),
  });
};

export default function Api() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button>Click me {data.message}</Button>
    </div>
  );
}
