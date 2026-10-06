import Link from "next/link";
import { navItems, site, sources } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white/70">
      <div className="wrap grid gap-8 py-12 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-bold text-white">
              AI
            </span>
            <b className="text-sm font-bold text-ink-800">{site.title}</b>
          </div>
          <p className="mt-3 text-[13px] leading-7 text-slate-500">
            {site.course}
            <br />
            {site.date}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            页面导航
          </h4>
          <ul className="space-y-2">
            {navItems.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className="text-[13px] text-slate-600 transition hover:text-indigo-600"
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            调研来源
          </h4>
          <ul className="space-y-1.5">
            {sources.slice(0, 5).map((s) => (
              <li key={s.name} className="text-[12.5px] leading-6 text-slate-500">
                · {s.name}
              </li>
            ))}
            <li className="text-[12.5px] leading-6 text-slate-500">
              <Link href="/limits" className="text-indigo-600 hover:underline">
                全部来源见「现存局限」页 →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/70 py-5 text-center text-[12px] text-slate-400">
        本站为课程作业项目的调研成果展示，内容用于学习交流。
      </div>
    </footer>
  );
}
