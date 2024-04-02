"use client";
import { SessionProvider as Session } from "next-auth/react";
import React from "react";
import { ToastContainer } from "react-toastify";
function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer />
      <Session>{children}</Session>
    </>
  );
}

export default SessionProvider;
