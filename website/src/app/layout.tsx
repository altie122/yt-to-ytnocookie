import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { OddBanner } from "~/components/client/odd";
import { Header } from "~/components/navbar";
import { Footer } from "~/components/footer";
import { env } from "~/env";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PostHogProvider } from "~/components/PostHogProvider";

export const metadata: Metadata = {
  title: "YT to YT No Cookie",
  description:
    "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  other: {
    versionId: `${env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_ID}-${env.NEXT_PUBLIC_VERCEL_TARGET_ENV}-${env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`,
  },
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
        <PostHogProvider>
          <Header />
          <OddBanner />
          <div className="min-h-screen p-5 text-center">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  );
}