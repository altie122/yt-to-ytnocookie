import { LoaderFunctionArgs, json } from "@remix-run/node";
import { IsYT, GetID } from "~/lib/yt";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  // Store URL search param
  const yturl = String(url.searchParams.get("url"))
  // Check if the given URL is a YT URL
  const isyt = IsYT(yturl)
  if (isyt == false){
    // Return a 400 error (400 Bad Request)
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
    throw json({}, { status: 400 });
  } else {
    // Get ID from the YT URL
    const id = GetID(yturl)
    // Return ID in JSON
    return json(
      {ID: id}
    );
  }
}