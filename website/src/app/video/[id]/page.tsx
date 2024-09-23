export default function VideoPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const URL = "https://www.youtube-nocookie.com/embed/" + id;
  return (
    <div className="container mx-auto">
      <h2 className="text-lg no-underline hover:underline md:text-2xl">
        {URL}
      </h2>
      <h1 className="text-lg">Embed:</h1>
      <iframe
        className="mx-auto aspect-video w-full rounded-2xl"
        title="example"
        src={URL}
        allowFullScreen
      ></iframe>
    </div>
  );
}
