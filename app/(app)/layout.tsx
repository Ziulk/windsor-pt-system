export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Future: Add navigation/header here */}
      <main className="flex-1">{children}</main>
      {/* Future: Add footer here */}
    </div>
  );
}
