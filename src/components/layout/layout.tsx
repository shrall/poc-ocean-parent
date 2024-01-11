import * as React from "react";

import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <Sidebar />
      {children}
    </main>
  );
}
