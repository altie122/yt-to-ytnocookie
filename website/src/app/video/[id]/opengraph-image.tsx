import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getytdata } from "~/lib/ytdata.server";

// Image metadata
export const alt = "YT To YT No Cookie";
export const size = {
  width: 2400,
  height: 1256,
};

const primaryTextColor = "#F8FAFC";
const secondaryTextColor = "#f8fafc";

const primaryFont = "Inter";
const titleFont = "Inter";

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const interRomanLatinVar = await readFile(
    join(process.cwd(), "assets/inter-roman-latin-var.woff"),
  );

  const socialBackground = await readFile(
    join(process.cwd(), "assets/social-background.png"),
  );

  const socialBackgroundBase64 = socialBackground.toString("base64");

  const ytdata = await getytdata(id);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
          height: "100%",
          width: "100%",
          fontFamily: primaryFont,
          color: primaryTextColor,
          backgroundImage: `url("data:image/png;base64,${socialBackgroundBase64}")`,
          padding: "194px 194px",
        }}
      >
        <img
          alt="Thumbnail"
          src={ytdata.VthumbnailUrl}
          width={"33%"}
          style={{ borderRadius: "5%" }}
        />
        <h1 style={{ fontSize: "50px" }}>{ytdata.Vtitle}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            alt="Thumbnail"
            src={ytdata.Upfp}
            width={"125px"}
            style={{ borderRadius: "100%" }}
          />
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 0.01,
            }}
          >
            <h2>Video by:</h2>
            <h1 style={{ fontSize: "50px" }}>{ytdata.Uhandle}</h1>
          </p>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interRomanLatinVar,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
