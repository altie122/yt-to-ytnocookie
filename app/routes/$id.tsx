import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "YT To YT No Cookie" },
    { name: "description", content: "Simple little website that takes a YouTube URL (Share and Embed URL's are also supported) and turns it into a YouTube nocookie URL" },
  ];
};

export default function Index() {
  const {id} = useParams();
  const URL = "https://www.youtube-nocookie.com/embed/" + id
  const iframe_code = "<iframe src="+URL+"></iframe>"
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl no-underline hover:underline">{URL}</h2>
      <h1 className="text-lg">Embed:</h1>
      <iframe className="w-1/2 aspect-video mx-auto rounded-2xl" title="example" src={URL}></iframe>
      <br />
      <h1 className="text-lg">Embed example code:</h1>
      
      <div className="mockup-code w-fit mx-auto bg-slate-800 text-slate-400">
        <pre data-prefix="1"><code>{iframe_code}</code></pre>
      </div>
    </div>
  );
}
