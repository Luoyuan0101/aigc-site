"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-white shadow-card">
            AI
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <b className="text-[15px] font-bold text-ink-800">{site.title}</b>
            <span className="text-[11px] text-slate-400">{site.subtitle}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((it) => {
            const active =
              it.href === "/" ? pathname === "/" : pathname.startsWith(it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`rounded-lg px-3 py-2 text-[13.5px] transition ${
                  active
                    ? "bg-indigo-50 font-semibold text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 md:hidden"
        >
          <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200/70 bg-white px-5 pb-3 md:hidden">
          {navItems.map((it) => {
            const active =
              it.href === "/" ? pathname === "/" : pathname.startsWith(it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm ${
                  active
                    ? "bg-indigo-50 font-semibold text-indigo-700"
                    : "text-slate-600"
                }`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
