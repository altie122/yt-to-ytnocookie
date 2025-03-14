import { NextRequest, NextResponse } from "next/server";
import { IsYT, GetID } from "~/lib/yt";

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  const yturl = String(url.searchParams.get("url"));

  const isyt = IsYT(yturl);

  if (isyt == false) {
    return NextResponse.json({}, { status: 400 });
  } else {
    const id = GetID(yturl);
    return NextResponse.json({ IsYT: isyt, ID: id });
  }
}
