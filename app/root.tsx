import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/globals.css?url";
import { canUseDOM } from "./ui/primitives/utils";
import { Header } from "./ui/navbar";
import { Footer } from "./ui/footer";
import { useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel:"manifest", href:"/manifest.webmanifest" },
  { rel:"icon", href:"/favicon.ico" },
  { rel:"sitemap", href:"/sitemap-index.xml" }, // Generate the sitemap with https://www.xml-sitemaps.com then update sitemap.xml NOT sitemap-index.xml
];

export default function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);
  return (
    <html lang="en" className="dark bg-background min-h-screen text-foreground hyphens-auto max-w-screen">
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
        </div>
        <Footer />
        {/* Cloudflare Web Analytics script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "dcc9ffed7b4a43e195b8c6d47f1dba59"}'></script>{/* End Cloudflare Web Analytics */} {/*This is commented out until the site goes into prod*/}
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