import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import { canUseDOM } from "./ui/primitives/utils";
import { Header } from "./ui/navbar";
import { Footer } from "./ui/footer";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en" className=" bg-slate-900 min-h-screen text-slate-400">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="min-h-screen p-5 text-center">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
        <Footer />
        {/* Cloudflare Web Analytics */}<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "dcc9ffed7b4a43e195b8c6d47f1dba59"}'></script>{/* End Cloudflare Web Analytics */}
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (!canUseDOM) {
    console.error(error);
  }

  if (isRouteErrorResponse(error)) {
    return (
      <div className="bg-slate-900 min-h-screen">
      <Links />
        <div className="flex flex-1 flex-col justify-center text-white">
          <div className="text-center leading-none">
            <h1 className="font-mono text-[25vw]">{error.status}</h1>
            <a
              className="inline-block text-[8vw] underline"
              href={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${error.status}`}
            >
              {error.statusText}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="flex flex-1 flex-col justify-center text-white">
        <div className="text-center leading-none">
          <h1 className="text-[25vw]">Error</h1>
          <div className="text-3xl">
            Something went wrong! Please try again later.
          </div>
        </div>
      </div>
      </div>
  );
}