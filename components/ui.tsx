import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-indigo-50/80 px-3 py-1 text-[12px] font-medium text-indigo-700">
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-br from-ink-900 via-ink-800 to-indigo-900">
      <div className="grid-dots absolute inset-0 opacity-40" />
      <div
        className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full opacity-30 blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle,#22D3EE,transparent 70%)" }}
      />
      <div className="wrap relative py-16 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-[42px]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-8 text-indigo-100/80">
          {desc}
        </p>
      </div>
    </section>
  );
}

export function SectionTitle({
  index,
  title,
  desc,
}: {
  index?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="flex items-center gap-3">
        {index && (
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink-800 text-[13px] font-bold text-white">
            {index}
          </span>
        )}
        <h2 className="text-[22px] font-bold text-ink-800 sm:text-[26px]">{title}</h2>
      </div>
      {desc && <p className="mt-3 text-[14.5px] leading-8 text-slate-500">{desc}</p>}
    </div>
  );
}

export function Chip({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span
      className="chip"
      style={
        color
          ? { background: `${color}33`, borderColor: `${color}99`, color: "#4A4550" }
          : undefined
      }
    >
      {children}
    </span>
  );
}

export function NextLink({
  href,
  label,
  hint,
}: {
  href: string;
  label: string;
  hint?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700"
    >
      <span>
        {label}
        {hint && <span className="ml-2 text-[12px] font-normal text-slate-400">{hint}</span>}
      </span>
      <span className="transition group-hover:translate-x-0.5">→</span>
    </Link>
  );
}
