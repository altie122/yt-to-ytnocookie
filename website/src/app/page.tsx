import { Convert_bar } from "~/components/client/convert-page";

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
