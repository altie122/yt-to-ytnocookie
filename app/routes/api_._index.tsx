import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "YT To YT No Cookie" },
    { name: "description", content: "Simple little app that takes a YouTube URL (Share and Embed URL's are also supported) and turns it into a YouTube nocookie URL" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto text-left">
      <h1 className="text-2xl">YT to YT No Cookie API.</h1>
      <h2 className="text-xl">Using the API:</h2>
      <p>There are 4 APIs all APIs, usage, and responces are below:</p>
      <div className="collapse collapse-arrow bg-slate-800 text-slate-400">
        <input type="radio" name="api-accordion" /> 
        <div className="collapse-title text-xl font-medium">
          Full
        </div>
        <div className="collapse-content"> 
          <div className="prose">
            <ul>
              <li>Description: Returns the responce of all API paths</li>
              <li>Path: https://yt-to-ytnocookie.dovahkiin.xyz/api/full</li>
              <li>Usage: https://yt-to-ytnocookie.dovahkiin.xyz/api/full?url={"{Youtube URL}"}</li>
              <li>Responce:{'{"IsYT":true,"URL":"{Youtube Nocookie URL}","ID":"{Youtube ID}"}'} OR a 400 error will be served</li>
              <li>Example: https://yt-to-ytnocookie.dovahkiin.xyz/api/full?url=https://www.youtube.com/watch?v=87TdQAGmeOA</li>
              <li>Example output: {'{"IsYT":true,"URL":"https://www.youtube-nocookie.com/embed/87TdQAGmeOA","ID":"87TdQAGmeOA"}'}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-slate-800 text-slate-400">
        <input type="radio" name="api-accordion" /> 
        <div className="collapse-title text-xl font-medium">
          Is Youtube
        </div>
        <div className="collapse-content"> 
          <div className="prose">
            <ul>
              <li>Description: Returns if the URL is a Youtube URL as a boolen</li>
              <li>Path: https://yt-to-ytnocookie.dovahkiin.xyz/api/isyt</li>
              <li>Usage: https://yt-to-ytnocookie.dovahkiin.xyz/api/isyt?url={"{Youtube URL}"}</li>
              <li>Responce:{'{"IsYT":{true/false}}'}</li>
              <li>Example: https://yt-to-ytnocookie.dovahkiin.xyz/api/isyt?url=https://www.youtube.com/watch?v=87TdQAGmeOA</li>
              <li>Example output: {'{"IsYT":true}'}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-slate-800 text-slate-400">
        <input type="radio" name="api-accordion" /> 
        <div className="collapse-title text-xl font-medium">
          Youtube ID
        </div>
        <div className="collapse-content"> 
          <div className="prose">
            <ul>
              <li>Description: Returns the ID of the given Youtube URL</li>
              <li>Path: https://yt-to-ytnocookie.dovahkiin.xyz/api/ytid</li>
              <li>Usage: https://yt-to-ytnocookie.dovahkiin.xyz/api/ytid?url={"{Youtube URL}"}</li>
              <li>Responce:{'{"ID":"{Youtube ID}"}'} OR a 400 error will be served</li>
              <li>Example: https://yt-to-ytnocookie.dovahkiin.xyz/api/ytid?url=https://www.youtube.com/watch?v=87TdQAGmeOA</li>
              <li>Example output: {'{"ID":"{87TdQAGmeOA}"}'}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-slate-800 text-slate-400">
        <input type="radio" name="api-accordion" /> 
        <div className="collapse-title text-xl font-medium">
          YT to YT No Cookie
        </div>
        <div className="collapse-content"> 
          <div className="prose">
            <ul>
              <li>Description: Returns the ID of the given Youtube URL</li>
              <li>Path: https://yt-to-ytnocookie.dovahkiin.xyz/api/yttoytnocookie</li>
              <li>Usage: https://yt-to-ytnocookie.dovahkiin.xyz/api/yttoytnocookie?url={"{Youtube URL}"}</li>
              <li>Responce:{'{"URL":"{Youtube Nocookie URL}"}'} OR a 400 error will be served</li>
              <li>Example: https://yt-to-ytnocookie.dovahkiin.xyz/api/yttoytnocookie?url=https://www.youtube.com/watch?v=87TdQAGmeOA</li>
              <li>Example output: {'{"URL":"https://www.youtube-nocookie.com/embed/87TdQAGmeOA"}'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}