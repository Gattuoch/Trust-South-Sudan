import { useEffect, useState } from "react";
import { getPendingContent } from "../../api/approval.api";
import ApprovalActions from "./ApprovalActions";

export default function PendingJobs() {
  const [jobs, setJobs] = useState([]);

  const fetchPending = async () => {
    const data = await getPendingContent(localStorage.getItem("token"));
    setJobs(data.jobs);
  };

  useEffect(() => { fetchPending(); }, []);

  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <div key={job._id} className="border p-4 rounded flex justify-between items-center">
          <div>
            <h3 className="font-bold">{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.description}</p>
          </div>
          <ApprovalActions type="job" item={job} onUpdate={fetchPending} />
        </div>
      ))}
    </div>
  );
}
