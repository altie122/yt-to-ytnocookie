import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Header } from "~/components/navbar";
import { Footer } from "~/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "YT to YT No Cookie",
  description:
    "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark bg-background text-foreground min-h-screen max-w-screen hyphens-auto ${GeistSans.variable}`}
    >
      <body>
        <Header />
        <div className="min-h-screen p-5 text-center">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
