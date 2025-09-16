import ApiAccordion from "~/components/api-accordion";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"

export default function HomePage() {
  return (
    <main className="container mx-auto text-left">
      <h1 className="text-2xl">YT to YT No Cookie API.</h1>
      <h1 className="text-2xl">We are working to move to a fully OpenAPI spec API, this will be available soon. Most of what will change will be this page, the API should maintain full backwards compatibility.</h1>
      <h2 className="text-xl">Using the API:</h2>
      <p>There are 4 API routes all API routes, usage, and responses are below:</p>
      <div className="bg-white p-2 rounded-xl">
      <SwaggerUI url="/openapi.yaml" />
      </div>
    </main>
  );
}
