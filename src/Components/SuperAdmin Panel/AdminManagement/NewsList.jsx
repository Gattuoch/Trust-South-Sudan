import { useEffect, useState } from "react";
import { getApprovedNews } from "../../api/news.api";
import NewsCard from "./NewsCard";

export default function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getApprovedNews();
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div className="grid gap-4">
      {news.map((item) => (
        <NewsCard key={item._id} news={item} />
      ))}
    </div>
  );
}
