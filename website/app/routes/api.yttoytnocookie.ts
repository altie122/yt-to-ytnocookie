import { type LoaderFunctionArgs, json } from "@vercel/remix";
import { Full } from "~/lib/yt";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const url = new URL(request.url);
    // get new URL or 400 error (see below)
  const new_url = Full(String(url.searchParams.get("url")))
    // Check if the given URL is a YT URL
  if (new_url == 400){
    // Return a 400 error (400 Bad Request)
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
    throw json({}, { status: 400 });
  } else {
    // Return the YT No Cookie URL
    return json(
      {URL: new_url}
    );
  }
}