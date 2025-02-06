import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    message: "Salut ça va ? t ki ? pk t la ?",
  });
};

export default function Api() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>{data.message}</h1>
    </div>
  );
}
