import { type LoaderFunctionArgs, type HeadersFunction } from "@vercel/remix";
import svg2img from "svg2img";
import { createOgImageSVG } from "./utils.server";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "s-maxage=2592000, stale-while-revalidate=2592000",
});

export async function loader({ request }: LoaderFunctionArgs) {
  const svg = await createOgImageSVG(request);

  const { data, error } = await new Promise(
    (
      resolve: (value: { data: Buffer | null; error: Error | null }) => void
    ) => {
      svg2img(svg, (error, buffer) => {
        if (error) {
          resolve({ data: null, error });
        } else {
          resolve({ data: buffer, error: null });
        }
      });
    }
  );
  if (error) {
    return new Response(error.toString(), {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  return new Response(data, {
    headers: {
      "Content-Type": "image/png",
      // Cache for 1 year as these images don't change often
      "Cache-Control": `max-age=${60 * 60 * 24 * 365}`,
    },
  });
}
