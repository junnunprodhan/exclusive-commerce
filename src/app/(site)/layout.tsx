import Footer from "@/components/footer";
import Header from "@/components/header";
import MobileTabMenu from "@/components/mobile/mobileTabMenu";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <MobileTabMenu />
      <Footer />
    </>
  );
}

export default Layout;
