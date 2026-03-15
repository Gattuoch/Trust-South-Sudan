import React from "react";

export default function Navbar({ title }) {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">{title}</h2>
    </header>
  );
}
