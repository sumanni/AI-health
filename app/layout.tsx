import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import "./globals.css"; // Import your global styles if you have them

export const metadata: Metadata = {
  title: "My App",
  description: "Dashboard Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Provider>{children}</Provider>
        </ClerkProvider>
      </body>
    </html>
  );
}
