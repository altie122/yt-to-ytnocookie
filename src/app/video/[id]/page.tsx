import { SendDiscordWebhook } from "~/lib/webhook.server";
import { blockedUserAgents } from "~/lib/consts";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { env } from "~/env";
import { Suspense } from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const headersList = await headers();
  const protocol =
    headersList.get("protocol") ??
    headersList.get("x-forwarded-proto") ??
    "https";
  const protocolFormatted = protocol.endsWith("://")
    ? protocol
    : protocol + "://";
  const siteUrl = protocolFormatted + headersList.get("host");
  const id = (await params).id;
  
  return {
    openGraph: {
      title: "YT To YT No Cookie",
      description: `Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL`,
      url: `${siteUrl}/video/${id}`,
      siteName: "YT To YT No Cookie",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteUrl}/video/${id}/opengraph-image`,
          width: 2400,
          height: 1256,
          alt: "YT To YT No Cookie",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "YT To YT No Cookie",
      description:
        "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL",
      siteId: "866355501432438784",
      site: "@altie122",
      creator: "@altie122",
      creatorId: "866355501432438784",
      images: [`${siteUrl}/video/${id}/opengraph-image`],
    },
  };
}

export default async function Index({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const headersList = await headers();
  const protocol =
    headersList.get("protocol") ??
    headersList.get("x-forwarded-proto") ??
    "https";
  const protocolFormatted = protocol.endsWith("://")
    ? protocol
    : protocol + "://";
  const siteUrl = protocolFormatted + headersList.get("host");
  const userAgent = headersList.get("user-agent") ?? "Unknown";
  if (!blockedUserAgents.includes(userAgent)) {
    const formattedMsg = `Converted Video:\n${siteUrl}/video/${id}\n\nUserAgent:\n${userAgent}\n\nVideo Converted:\nhttps://www.youtube.com/watch?v=${id}\n\nOutput:\nhttps://www.youtube-nocookie.com/embed/${id}`;
    if (env.NODE_ENV === "production") {
      await SendDiscordWebhook(formattedMsg);
    }
    console.log(formattedMsg);
  }
  if (!id) {
    notFound();
  }
  const URL = "https://www.youtube-nocookie.com/embed/" + id;
  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <h2 className="text-lg no-underline hover:underline md:text-2xl">
          {URL}
        </h2>
        <h1 className="text-lg">Embed:</h1>
        <iframe
          className="mx-auto aspect-video w-full rounded-2xl"
          title="video Preview"
          src={URL}
          allowFullScreen
        ></iframe>
      </Suspense>
    </div>
  );
}
