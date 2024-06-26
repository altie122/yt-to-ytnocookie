import { json } from "@remix-run/node";
import satori from "satori";
import interFont from "./inter-roman-latin-var.woff?arraybuffer";
import socialBackground from "./social-background.png?arraybuffer";
import { getytdata } from "~/lib/ytdata.server";

// Big thanks goes to Jacob Paris' blog outlining how to set this up
// https://www.jacobparis.com/content/remix-og

const primaryTextColor = "#F8FAFC";
const secondaryTextColor = "#f8fafc";

const primaryFont = "Inter";
const titleFont = "Inter";

export async function createOgImageSVG(request: Request) {
  const requestUrl = new URL(request.url);
  const searchParams = new URLSearchParams(requestUrl.search);
  const siteUrl = requestUrl.protocol + "//" + requestUrl.host;

  const { id } = getDataFromParams(
    siteUrl,
    searchParams,
  );

  const ytdata = await getytdata(id);

  return satori(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        height: "100%",
        width: "100%",
        fontFamily: primaryFont,
        color: primaryTextColor,
        backgroundImage: `url("data:image/png;base64,${arrayBufferToBase64(socialBackground)}")`,
        padding: "194px 194px",
      }}
    >
      <img alt="Thumbnail" src={ytdata.VthumbnailUrl} width={"33%"} style={{ borderRadius: "5%",}}/>
      <h1 style={{fontSize:"50px"}}>{ytdata.Vtitle}</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <img alt="Thumbnail" src={ytdata.Upfp} width={"125px"} style={{ borderRadius: "100%",}}/>
        <p style={{display: "flex", flexDirection: "column", 	lineHeight: 0.01,}}><h2>Video by:</h2><h1 style={{fontSize:"50px"}}>{ytdata.Uhandle}</h1></p>
      </div>
    </div>,
    {
      width: 2400,
      height: 1256,
      // Unfortunately satori doesn't support WOFF2 so we have to have a woff version
      fonts: [
        {
          name: titleFont,
          data: interFont,
        },
        {
          name: primaryFont,
          data: interFont,
        },
      ],
    },
  );
}

// Taken from https://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Extracts the data needed for the og image from the params. Throws a 400 error if
 * any anything is wrong
 */
function getDataFromParams(siteUrl: string, searchParams: URLSearchParams) {
  const id = searchParams.get("id");

  if (
    !id
  ) {
    throw json({ error: "Missing required params" }, 400);
  }

  return {
    id,
  };
}