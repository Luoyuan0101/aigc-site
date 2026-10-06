import Link from "next/link";
import { limits, sources } from "@/lib/content";
import { PageHero } from "@/components/ui";

export const metadata = { title: "现存局限与调研来源" };

export default function LimitsPage() {
  return (
    <>
      <PageHero
        eyebrow="第四部分"
        title="现存局限"
        desc="知道 AIGC 能干什么之后，更重要的是知道它干不了什么。下面 5 条，就是我这次调研里最该记住的边界。"
      />

      <div className="wrap py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {limits.map((l) => (
            <article key={l.no} className="card p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-rose-50 text-[13px] font-bold text-rose-500">
                  {l.no}
                </span>
                <h2 className="text-[17px] font-bold text-ink-800">{l.title}</h2>
              </div>
              <p className="mt-4 text-[14px] leading-8 text-slate-600">{l.desc}</p>
              <div className="mt-5 rounded-xl bg-emerald-50/70 px-4 py-3">
                <span className="text-[12px] font-semibold text-emerald-700">
                  应对思路
                </span>
                <p className="mt-1 text-[13px] leading-7 text-emerald-900/80">{l.fix}</p>
              </div>
            </article>
          ))}
        </div>

        {/* 来源 */}
        <section className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-800 text-[13px] font-bold text-white">
              05
            </span>
            <h2 className="text-[22px] font-bold text-ink-800">调研来源汇总</h2>
          </div>
          <div className="card overflow-hidden">
            <table className="w-full text-left text-[13.5px]">
              <thead className="bg-slate-50 text-[12.5px] uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-6 py-3.5 font-semibold">来源</th>
                  <th className="px-6 py-3.5 font-semibold">内容</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sources.map((s) => (
                  <tr key={s.name} className="transition hover:bg-slate-50/70">
                    <td className="px-6 py-4 font-medium text-ink-800">{s.name}</td>
                    <td className="px-6 py-4 text-slate-500">{s.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[12.5px] leading-6 text-slate-400">
            说明：以上为本次调研所参考的资料方向。其中智能体数据来自 IDC 在 WAIC 2026
            发布的《DAA 研究报告》，多模态模型进展来自各厂商公开发布信息。
          </p>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/direction"
            className="rounded-xl bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            最后：我打算做什么 →
          </Link>
          <Link
            href="/cases"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          >
            ← 回到「案例」
          </Link>
        </div>
      </div>
    </>
  );
}
