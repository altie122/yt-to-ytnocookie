import { Convert_bar } from "~/components/client/convert-page";
import { headers } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const headersList = await headers();
  const protocol =
    headersList.get("protocol") ??
    headersList.get("x-forwarded-proto") ??
    "https";
  const protocolFormatted = protocol.endsWith("://")
    ? protocol
    : protocol + "://";
  const siteUrl = protocolFormatted + headersList.get("host");
  const id = (await params).id;
  return {
    openGraph: {
      title: "YT To YT No Cookie",
      description: `Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL`,
      url: `${siteUrl}/`,
      siteName: "YT To YT No Cookie",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteUrl}/social-background.png`,
          width: 2400,
          height: 1256,
          alt: "YT To YT No Cookie",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "YT To YT No Cookie",
      description:
        "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL",
      siteId: "866355501432438784",
      site: "@altie122",
      creator: "@altie122",
      creatorId: "866355501432438784",
      images: [
        {
          url: `${siteUrl}/social-background.png`,
          width: 2400,
          height: 1256,
          alt: "YT To YT No Cookie",
        },
      ],
    },
  };
}

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <h1>Please enter the youtube link below or in the navbar.</h1>
      <Convert_bar id="home-page" />
      <br />
      <h2>Allowed links:</h2>
      <ul>
        <li>
          Watch/Base Youtube:
          <br />
          https://www.youtube.com/watch?v=_____
        </li>
        <li>
          Share:
          <br />
          https://youtu.be/_________?si=_____
        </li>
        <li>
          Embed:
          <br />
          https://www.youtube.com/embed/_________?si=_____
        </li>
      </ul>
      <br />
      <h2>Examples:</h2>
      <ul>
        <li>
          Watch/Base Youtube:
          <br />
          https://www.youtube.com/watch?v=87TdQAGmeOA
        </li>
        <li>
          Share:
          <br />
          https://youtu.be/87TdQAGmeOA?si=VNHziLtQTP_2Nv2Z
        </li>
        <li>
          Embed:
          <br />
          https://www.youtube.com/embed/87TdQAGmeOA?si=VNHziLtQTP_2Nv2Z
        </li>
      </ul>
    </main>
  );
}
