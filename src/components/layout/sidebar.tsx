"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", icon: "⌂" },
  { label: "Explore", href: "/explore", icon: "◎" },
  { label: "Passport", href: "/passport", icon: "▦" },
  { label: "Albums", href: "/albums", icon: "▣" },
  { label: "Squad", href: "/squad", icon: "⊞" },
  { label: "Tickets", href: "/tickets", icon: "▤" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[240px] bg-white border-r border-border flex flex-col">
      {/* Logo */}
      <div className="px-5 pt-6">
        <Link href="/" className="font-heading text-lg font-semibold text-foreground tracking-tight no-underline hover:no-underline">
          OccMark
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-col">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 mx-2 px-4 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors ${
                isActive
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Divider */}
        <div className="h-px bg-border mx-4 my-4" />

        {/* Organizer Dashboard link */}
        <Link
          href="/organizer"
          className={`flex items-center gap-3 mx-2 px-4 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors ${
            pathname === "/organizer"
              ? "bg-secondary text-primary"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          <span className="text-base">◫</span>
          <span>Organizer</span>
        </Link>
      </nav>

      {/* Profile section at bottom */}
      <div className="mt-auto border-t border-border p-4">
        <div className="flex items-center gap-3 p-1.5 rounded-lg cursor-pointer hover:bg-muted">
          <div className="w-9 h-9 rounded-full bg-secondary border border-primary/20 flex items-center justify-center font-heading text-sm font-semibold text-primary">
            W
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-foreground">Wahaj</div>
            <div className="text-xs text-muted-foreground truncate">Attendee</div>
          </div>
        </div>
      </div>
    </aside>
  );
}