import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StatePreviewProvider } from "@/lib/state-preview";
import { StatePreviewFab } from "@/components/layout/state-fab";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FinTrack — Your financial story",
  description:
    "Editorial finance dashboard for credit cards, investments, and NPS — beautifully merchandised.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <TooltipProvider>
          <StatePreviewProvider>
            {children}
            <StatePreviewFab />
            <Toaster />
          </StatePreviewProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
