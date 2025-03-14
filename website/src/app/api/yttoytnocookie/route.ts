import { NextRequest, NextResponse } from "next/server";
import { IsYT, GetID, GetNoCookie } from "~/lib/yt";

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  const yturl = String(url.searchParams.get("url"));

  const isyt = IsYT(yturl);

  if (isyt == false) {
    return NextResponse.json({}, { status: 400 });
  } else {
    const id = GetID(yturl);
    const new_url = GetNoCookie(String(id));
    return NextResponse.json({ IsYT: isyt, URL: new_url, ID: id });
  }
}