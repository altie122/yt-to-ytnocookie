import { NextRequest, NextResponse } from "next/server";
import { SendAPIDiscordWebhook } from "~/lib/webhook.server";
import { IsYT, GetID } from "~/lib/yt";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const yturl = String(url.searchParams.get("url"));

  const isyt = IsYT(yturl);

  if (isyt == false) {
    await SendAPIDiscordWebhook(`
    **request:** ${url.toString()}

    **type:** ytid

    **response:** 
    **body:**
    {
      "error": "Invalid URL"
    }
    **status:**
    400
    `);
    return NextResponse.json({
      error: "Invalid URL",
    }, { status: 400 });
  } else {
    const id = GetID(yturl);
    await SendAPIDiscordWebhook(`
      **request:** ${url.toString()}

      **type:** ytid

      **response:** 
      **body:**
      {
        "ID": ${id}
      }
      **status:**
      200
      `);
    return NextResponse.json({ ID: id });
  }
}
