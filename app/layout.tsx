import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata = {
  title: "Next.js 13 with Clerk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="bg-secondary">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {" "}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
