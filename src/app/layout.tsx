import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Header } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

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
      <TooltipProvider>
        <body>
          <div className="min-h-dvh h-full min-w-full">
            <Header />
            <div className="min-h-[calc(100dvh-(var(--spacing)*12))] w-full pt-12 p-2">
              {children}
            </div>
          </div>
          <Footer />
          <Toaster />
        </body>
      </TooltipProvider>
    </html>
  );
}
