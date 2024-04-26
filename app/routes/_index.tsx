import type { MetaFunction } from "@remix-run/node";
import { Convert_bar } from "~/ui/convert";

export const meta: MetaFunction = () => {
  return [
    { title: "YT To YT No Cookie" },
    { name: "description", content: "Simple little app that takes a YouTube URL (Share and Embed URL's are also supported) and turns it into a YouTube nocookie URL" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto">
      <h1>Please enter the youtube link below or in the navbar.</h1>
      <Convert_bar id="home-page"/>
      <br />
      <h2>Allowed links:</h2>
      <ul>
        <li>Watch/Base Youtube:<br />https://www.youtube.com/watch?v=_____</li>
        <li>Share:<br />https://youtu.be/_________?si=_____</li>
        <li>Embed:<br />https://www.youtube.com/embed/_________?si=_____</li>
      </ul>
      <br />
      <h2>Examples:</h2>
      <ul>
        <li>Watch/Base Youtube:<br />https://www.youtube.com/watch?v=87TdQAGmeOA</li>
        <li>Share:<br />https://youtu.be/87TdQAGmeOA?si=VNHziLtQTP_2Nv2Z</li>
        <li>Embed:<br />https://www.youtube.com/embed/87TdQAGmeOA?si=VNHziLtQTP_2Nv2Z</li>
      </ul>
    </div>
  );
}
