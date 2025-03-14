import { NextRequest, NextResponse } from "next/server";
import { IsYT } from "~/lib/yt";

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  const yturl = String(url.searchParams.get("url"));

  const isyt = IsYT(yturl);
  return NextResponse.json({ IsYT: isyt });
}
