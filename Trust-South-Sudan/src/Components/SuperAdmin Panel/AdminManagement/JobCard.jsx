export default function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.description}</p>
    </div>
  );
}
