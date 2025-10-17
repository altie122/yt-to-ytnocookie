export default function Privacy() {
  return (
    <div className="container mx-auto">
      <h1>Privacy</h1>
      <p>
        This website logs data of what videos are converted to a discord
        webhook. This data is anonymous and can not be traced back to you.
      </p>
      <p>Data logged:</p>
      <ul className="list-disc">
        <li>yt-nocookie URL</li>
        <li>YouTube URL</li>
        <li>yt-to-ytnocookie URL & path</li>
        <li>User Agent</li>
      </ul>
      <p>
        We do not share this data, however it is logged to a discord webhook,
        although in a private server, discord may beable to see it if they want
        to.
      </p>
    </div>
  );
}
