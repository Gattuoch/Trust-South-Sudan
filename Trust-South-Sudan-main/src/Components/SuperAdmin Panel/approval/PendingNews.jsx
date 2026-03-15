import { useEffect, useState } from "react";
import { getPendingContent } from "../../api/approval.api";
import ApprovalActions from "./ApprovalActions";

export default function PendingNews() {
  const [news, setNews] = useState([]);

  const fetchPending = async () => {
    const data = await getPendingContent(localStorage.getItem("token"));
    setNews(data.news);
  };

  useEffect(() => { fetchPending(); }, []);

  return (
    <div className="flex flex-col gap-4">
      {news.map((item) => (
        <div key={item._id} className="border p-4 rounded flex justify-between items-center">
          <div>
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.content}</p>
          </div>
          <ApprovalActions type="news" item={item} onUpdate={fetchPending} />
        </div>
      ))}
    </div>
  );
}
