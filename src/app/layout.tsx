import ReduxProvider from "@/providers/ReduxProvider";
import DataProvider from "@/providers/dataProvider";
import SessionProvider from "@/providers/sessionProvider";
import "@flaticon/flaticon-uicons/css/regular/all.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Exclusive",
  description: "World most popular buy sale marketplaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <NextTopLoader
          color="red"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <SessionProvider>
          <ReduxProvider>
            <DataProvider>{children}</DataProvider>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
