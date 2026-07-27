"use client";

export function Topbar() {
  return (
    <header className="fixed top-0 left-[240px] right-0 h-16 bg-white border-b border-border flex items-center z-30">
      {/* Left spacer */}
      <div className="flex-1" />

      {/* Search bar */}
      <div className="w-[480px] h-10 bg-muted border border-border rounded-lg flex items-center gap-2.5 px-3 cursor-text hover:border-primary/30 transition-colors">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#8A8A86" strokeWidth="1.6">
          <circle cx="9" cy="9" r="5.5" />
          <path d="M13.5 13.5 17 17" />
        </svg>
        <span className="flex-1 text-sm text-muted-foreground">
          Search events, organizers, or colleges...
        </span>
        <span className="bg-border rounded px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
          ⌘K
        </span>
      </div>

      {/* Right section: notifications + avatar */}
      <div className="flex-1 flex items-center justify-end gap-4 pr-8">
        {/* Notification bell */}
        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-muted transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#4A4A48" strokeWidth="1.5">
            <path d="M5.5 8a4.5 4.5 0 0 1 9 0c0 3.2 1 4.5 1 4.5h-11S5.5 11.2 5.5 8z" />
            <path d="M8.6 15.2a1.6 1.6 0 0 0 2.8 0" />
          </svg>
          {/* Unread dot */}
          <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-primary border border-white" />
        </button>

        {/* User avatar */}
        <div className="w-8 h-8 rounded-full bg-secondary border border-primary/20 flex items-center justify-center font-heading text-xs font-semibold text-primary cursor-pointer">
          W
        </div>
      </div>
    </header>
  );
}
