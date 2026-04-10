"use client";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  return (
    <div>
      <h1>Dynamic Route: {pathname}</h1>
      <p>This page is rendered on the client side.</p>
    </div>
  );
}