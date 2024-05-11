import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { SendDiscordWebhook } from "~/lib/webhook.server";
import { blockedUserAgents } from "~/lib/consts";

export const meta: MetaFunction = () => {
  return [
    { title: "YT To YT No Cookie" },
    { name: "description", content: "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL" },
  ];
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('User-Agent') || 'Unknown';
  const id = params.id; // Retrieve the id parameter correctly
  console.log(userAgent)
  if (!blockedUserAgents.includes(userAgent)) {
    const formattedMsg = `Converted Video:\nhttps://yt-to-ytnocookie.dovahkiin.xyz/video/${id}\n\nUserAgent:\n${userAgent}\n\nVideo Converted:\nhttps://www.youtube.com/watch?v=${id}\n\nOutput:\nhttps://www.youtube-nocookie.com/embed/${id}`;
    SendDiscordWebhook(formattedMsg);
    console.log(userAgent)
  }
  return null;
}


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