import { AppNav } from "@/components/layout/nav";

export default function AppGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col editorial-paper">
      <AppNav />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:py-10">
        {children}
      </main>
    </div>
  );
}
