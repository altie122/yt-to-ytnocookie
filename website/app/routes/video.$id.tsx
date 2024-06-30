import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, useParams } from "@remix-run/react";
import { SendDiscordWebhook } from "~/lib/webhook.server";
import { blockedUserAgents } from "~/lib/consts";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('User-Agent') || 'Unknown';
  const { id } = params; // Retrieve the id parameter correctly
  const requestUrl = new URL(request.url);
  const siteUrl = requestUrl.protocol + "//" + requestUrl.host;
  if (!blockedUserAgents.includes(userAgent)) {
    const formattedMsg = `Converted Video:\n${siteUrl}/video/${id}\n\nUserAgent:\n${userAgent}\n\nVideo Converted:\nhttps://www.youtube.com/watch?v=${id}\n\nOutput:\nhttps://www.youtube-nocookie.com/embed/${id}`;
    SendDiscordWebhook(formattedMsg);
    console.log(userAgent)
  }
  return json(
    { siteUrl }
  );
}
export const meta: MetaFunction<typeof loader> = (args) => {
  const { data, params } = args;
  const { id } = params;
  return [
    { title: "YT To YT No Cookie" },
    { name: "description", content: "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL" },
    { property: "og:url", content: `${data?.siteUrl}/video/${id}` },
    { name: "og:title", content: "YT To YT No Cookie" },
    { name: "og:description", content: "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL" },
    { property: "og:image", content: `${data?.siteUrl}/img/${id}?id=${id}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@altie122" },
    { name: "twitter:site", content: "@altie122" },
    { name: "twitter:title", content: "YT To YT No Cookie" },
    { name: "twitter:description", content: "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL" },
    { name: "twitter:image", content: `${data?.siteUrl}/img/${id}?id=${id}` },

  ];
};

export default function Index() {
  const {id} = useParams();
  const URL = "https://www.youtube-nocookie.com/embed/" + id;
  return (
    <div className="container mx-auto">
      <h2 className="text-lg md:text-2xl no-underline hover:underline">{URL}</h2>
      <h1 className="text-lg">Embed:</h1>
      <iframe className="w-full aspect-video mx-auto rounded-2xl" title="example" src={URL} allowFullScreen ></iframe>
    </div>
  );
}