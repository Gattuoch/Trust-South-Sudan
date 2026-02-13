export default function NewsCard({ news }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{news.title}</h3>
      <p>{news.content}</p>
    </div>
  );
}
