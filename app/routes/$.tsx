/* eslint-disable react/display-name */
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { SendDiscordWebhook } from "~/lib/webhook";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('User-Agent') || 'Unknown';
  if (!userAgent.includes('Discordbot') && !userAgent.includes('Go-http-client/1.1')) {
    const formated_msg = "404 page reached:\nhttps://yt-to-ytnocookie.dovahkiin.xyz/" + String(params["*"]) + "\n\nUserAgent:\n" + userAgent;
    SendDiscordWebhook(formated_msg);
  }
  throw json({}, { status: 404 });
}

export default function () {
  return null;
}