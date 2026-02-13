import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../SuperAdmin Panel/Sidebar/Navbar";
import { getPendingContent } from "../../../api/approval.api";
import ApprovalActions from "../../SuperAdmin Panel/approval/ApprovalActions";

export default function SuperAdminContentApproval() {
  const [pendingNews, setPendingNews] = useState([]);
  const [pendingJobs, setPendingJobs] = useState([]);

  const token = localStorage.getItem("token"); // replace with useAuth if available

  const fetchPending = async () => {
    try {
      const data = await getPendingContent(token);
      setPendingNews(data.news);
      setPendingJobs(data.jobs);
    } catch (err) {
      console.error("Failed to fetch pending content:", err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="Content Approval" />
        <div className="p-6 space-y-8">
          {/* Pending News Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Pending News</h2>
            <div className="flex flex-col gap-4">
              {pendingNews.length === 0 && <p>No pending news.</p>}
              {pendingNews.map((item) => (
                <div
                  key={item._id}
                  className="border p-4 rounded flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                  <ApprovalActions type="news" item={item} onUpdate={fetchPending} />
                </div>
              ))}
            </div>
          </section>

          {/* Pending Jobs Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Pending Jobs</h2>
            <div className="flex flex-col gap-4">
              {pendingJobs.length === 0 && <p>No pending jobs.</p>}
              {pendingJobs.map((job) => (
                <div
                  key={job._id}
                  className="border p-4 rounded flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold">{job.title}</h3>
                    <p>{job.company}</p>
                    <p>{job.description}</p>
                  </div>
                  <ApprovalActions type="job" item={job} onUpdate={fetchPending} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
