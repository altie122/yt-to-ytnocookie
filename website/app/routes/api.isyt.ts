import { type LoaderFunctionArgs, json } from "@vercel/remix";
import { IsYT } from "~/lib/yt";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  // find out if the URL is a youtube URL or not
  const isyt = IsYT(String(url.searchParams.get("url")))
  // Return if the URL is a YT URL or not (boolen)
  return json(
    {IsYT: isyt}
  );
}