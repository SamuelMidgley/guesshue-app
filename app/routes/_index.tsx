import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Guesshue" },
    {
      name: "description",
      content: "Welcome to the best color guessing game!",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <Button>Hello there</Button>
      </div>
    </div>
  );
}
