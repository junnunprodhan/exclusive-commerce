import Sidebar from "@/components/dashboard/sidebar";
import TopBar from "@/components/dashboard/topbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="px-4 sm:ml-64">
        <TopBar />
        {children}
      </div>
    </>
  );
}

export default Layout;
