"use client";

export default function Home() {
  const handleClick = async () => {
    const response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "John Doe", age: 30 }),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <button
        className="rounded-lg bg-blue-600 px-5 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>

  );
}
