/* eslint-disable react/display-name */
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { blockedUserAgents } from "~/lib/consts";
import { SendDiscordWebhook } from "~/lib/webhook.server";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('User-Agent') || 'Unknown';
  const requestUrl = new URL(request.url);
  const siteUrl = requestUrl.protocol + "//" + requestUrl.host;
  if (!blockedUserAgents.includes(userAgent)) {
    const formated_msg = `404 page reached:\n${siteUrl}/` + String(params["*"]) + "\n\nUserAgent:\n" + userAgent;
    SendDiscordWebhook(formated_msg);
    console.log(userAgent)
  }
  throw json({}, { status: 404 });
}

export default function () {
  return null;
}