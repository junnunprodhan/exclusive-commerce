"use client";
import CredentialDialog from "@/components/pages/auth/credentialDialog";
import { useGetProfileQuery } from "@/slices/userSlice";
import { usePathname } from "next/navigation";
import React from "react";

function DataProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data } = useGetProfileQuery(undefined);
  if (data) {
    return (
      <>
        <>
          {data.emptyPassword || !data.email || !data.phone || !data.name ? (
            <>{pathname !== "/account" && <CredentialDialog />}</>
          ) : null}
        </>
        {children}
      </>
    );
  }
  return <>{children}</>;
}

export default DataProvider;
