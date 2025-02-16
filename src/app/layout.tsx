import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/contexts/progress-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "BIRT - Audio Guide",
  description: "A app to enrich your journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ProgressProvider>{children}</ProgressProvider>
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
