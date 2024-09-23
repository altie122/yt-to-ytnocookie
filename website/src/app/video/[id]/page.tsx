export default function VideoPage({ params }: { params: { id: string } }) {
  const id = params.id
  return (
    <main>
      Video: {id}
    </main>
  );
}
