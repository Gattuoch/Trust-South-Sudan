import { useState } from "react";
import { createJob } from "../../api/jobs.api";
import { useAuth } from "../../hooks/useAuth";

export default function JobForm() {
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob({ title, company, description }, token);
    setTitle(""); setCompany(""); setDescription("");
    alert("Job submitted for approval!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" className="p-2 border rounded" />
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" className="p-2 border rounded" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="p-2 border rounded" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Job</button>
    </form>
  );
}
