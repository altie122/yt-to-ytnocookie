import { type LoaderFunctionArgs, json } from "@vercel/remix";
import { IsYT, GetID, GetNoCookie } from "~/lib/yt";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  // Store URL search param
  const yturl = String(url.searchParams.get("url"));
  // Check if the given URL is a YT URL
  const isyt = IsYT(yturl);
  if (isyt == false){
    // Return a 400 error (400 Bad Request)
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
    throw json({}, { status: 400 });
  } else {
    // Get the YT video ID
    const id = GetID(yturl);
    // Get the No Cookie URL
    const new_url = GetNoCookie(String(id));
    // Return the Values of IsYT (true), URL (the YT No Cookie URL), ID (the YT ID)
    return json(
      {IsYT: isyt, URL: new_url, ID: id},
    );
  }
}