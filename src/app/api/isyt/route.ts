import { NextRequest, NextResponse } from "next/server";
import { SendAPIDiscordWebhook } from "~/lib/webhook.server";
import { IsYT } from "~/lib/yt";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const yturl = String(url.searchParams.get("url"));

  const isyt = IsYT(yturl);
  await SendAPIDiscordWebhook(`
    **request:** ${url.toString()}

    **type:** isyt

    **response:** 
    **body:**
    {
      "IsYT": ${isyt},
    }
    **status:**
    200
    `);
  return NextResponse.json({ IsYT: isyt });
}
