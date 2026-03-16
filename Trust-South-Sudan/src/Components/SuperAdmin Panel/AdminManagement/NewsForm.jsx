import { useState } from "react";
import { createNews } from "../../api/news.api";
import { useAuth } from "../../hooks/useAuth";

export default function NewsForm() {
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNews({ title, content }, token);
    setTitle(""); setContent("");
    alert("News submitted for approval!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="p-2 border rounded" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit News</button>
    </form>
  );
}
