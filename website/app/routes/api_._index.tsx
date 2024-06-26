import type { MetaFunction } from "@remix-run/node";
import ApiAccordion from "~/ui/api-accordion"

export const meta: MetaFunction = () => {
  return [
    { title: "YT To YT No Cookie" },
    { name: "description", content: "Simple little app that takes a YouTube URL (Share and Embed URL's are also supported) and turns it into a YouTube nocookie URL" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto text-left">
      <h1 className="text-2xl">YT to YT No Cookie API.</h1>
      <h2 className="text-xl">Using the API:</h2>
      <p>There are 4 APIs all APIs, usage, and responses are below:</p>
      <ApiAccordion />
    </div>
  );
}