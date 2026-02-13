import { useEffect, useState } from "react";
import { getApprovedJobs } from "../../api/jobs.api";
import JobCard from "./JobCard";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getApprovedJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="grid gap-4">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}
