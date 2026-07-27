import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Topbar />

      {/* Main content area — offset by sidebar width and topbar height */}
      <main className="ml-[240px] mt-16 min-h-[calc(100vh-64px)]">
        {children}
      </main>
    </div>
  );
}
