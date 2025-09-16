import { NextRequest, NextResponse } from "next/server";
import { IsYT, GetID, GetNoCookie } from "~/lib/yt";
import { SendAPIDiscordWebhook } from "~/lib/webhook.server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const yturl = String(url.searchParams.get("url"));

  const isyt = IsYT(yturl);

  if (isyt == false) {
    await SendAPIDiscordWebhook(`
      **request:** ${url.toString()}

      **type:** full

      **response:** 
      **body:**
      {
        "IsYT": ${isyt},
      }
      **status:**
      200
      `);
    return NextResponse.json({ IsYT: isyt });
  } else {
    const id = GetID(yturl);
    const new_url = GetNoCookie(String(id));
    await SendAPIDiscordWebhook(`
      **request:** ${url.toString()}

      **type:** full

      **response:** 
      **body:**
      {
        "IsYT": ${isyt},
        "URL": ${new_url},
        "ID": ${id}
      }
      **status:**
      200
      `);
    return NextResponse.json({ IsYT: isyt, URL: new_url, ID: id });
  }
}
