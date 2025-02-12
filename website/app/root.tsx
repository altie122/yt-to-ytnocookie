import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  redirect,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@vercel/remix";
import stylesheet from "~/globals.css?url";
import { canUseDOM } from "./ui/primitives/utils";
import { Header } from "./ui/navbar";
import { Footer } from "./ui/footer";
import { useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/remix"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "manifest", href: "/manifest.webmanifest" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "sitemap", href: "/sitemap-index.xml" }, // Generate the sitemap with https://www.xml-sitemaps.com then update sitemap.xml NOT sitemap-index.xml
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const requestUrl = new URL(request.url);
  const oldDomains = ["yt-to-ytnocookie.dovahkiin.xyz", "yt-to-ytnocookie.xyz", "www.yt-to-ytnocookie.xyz"]
  if (oldDomains.includes(requestUrl.host)) {
    return redirect(
      `https://yt-to-ytnocookie.url122.xyz/${requestUrl.pathname}?odd=true`,
      301
    );
  }
  return null;
};

export default function App() {
  const location = useLocation();
  const searchParams = location.search;
  let odd = false;
  if (searchParams.includes("odd=true")) {
    odd = true;
  }
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }, []);
  return (
    <html
      lang='en'
      className='dark bg-background min-h-screen text-foreground hyphens-auto max-w-screen'
    >
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {odd ? (
          <div className='text-center bg-red-600'>
            <h1 className='text-4xl font-bold text-white'>Warning!</h1>
            <p>
              We will be completely migrating to yt-to-ytnocookie.url122.xyz on
              6/20/2025.
            </p>
            <p>
              If you have yt-to-ytnocookie.dovahkiin.xyz or yt-to-ytnocookie.xyz bookmarked, please
              update it to yt-to-ytnocookie.url122.xyz.
            </p>
          </div>
        ) : (
          <></>
        )}
        <div className='min-h-screen p-5 text-center'>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <Analytics />
          <SpeedInsights />
        </div>
        <Footer />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const location = useLocation();
  const searchParams = location.search;
  let odd = false;
  if (searchParams.includes("odd=true")) {
    odd = true;
  }
  const error = useRouteError();
  if (!canUseDOM) {
    console.error(error);
  }

  if (isRouteErrorResponse(error)) {
    return (
      <div className='bg-slate-900 min-h-screen'>
        <Links />
        <div className='flex flex-1 flex-col justify-center text-white'>
          {odd ? (
            <div className='text-center bg-red-600'>
              <h1 className='text-4xl font-bold text-white'>Warning!</h1>
              <p>
                We will be completely migrating to yt-to-ytnocookie.url122.xyz on
                6/20/2025.
              </p>
              <p>
                If you have yt-to-ytnocookie.dovahkiin.xyz or yt-to-ytnocookie.xyz bookmarked, please
                update it to yt-to-ytnocookie.url122.xyz.
              </p>
            </div>
          ) : (
            <></>
          )}
          <div className='text-center leading-none'>
            <h1 className='font-mono text-[25vw]'>{error.status}</h1>
            <a
              className='inline-block text-[8vw] underline'
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
    <div className='bg-slate-900 min-h-screen'>
      <div className='flex flex-1 flex-col justify-center text-white'>
        {odd ? (
          <div className='text-center bg-red-600'>
            <h1 className='text-4xl font-bold text-white'>Warning!</h1>
            <p>
              We will be completely migrating to yt-to-ytnocookie.xyz on
              9/12/2024.
            </p>
            <p>
              If you have yt-to-ytnocookie.dovahkiin.xyz bookmarked, please
              update it to yt-to-ytnocookie.xyz.
            </p>
          </div>
        ) : (
          <></>
        )}
        <div className='text-center leading-none'>
          <h1 className='text-[25vw]'>Error</h1>
          <div className='text-3xl'>
            Something went wrong! Please try again later.
          </div>
        </div>
      </div>
    </div>
  );
}
