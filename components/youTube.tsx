export default function YouTube({ id }: { id: string }) {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute inset-0 h-full w-full border-none"
      />
    </div>
  );
}
