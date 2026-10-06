import Link from "next/link";
import { trends } from "@/lib/content";
import { Chip, PageHero } from "@/components/ui";

export const metadata = { title: "现在在做什么" };

export default function TrendsPage() {
  return (
    <>
      <PageHero
        eyebrow="第二部分 · 重点"
        title="当下 AIGC 领域正在做什么"
        desc="五个方向：多模态统一模型、垂直领域落地、智能体 Agent、可控生成与内容安全、轻量化本地模型。"
      />

      <div className="wrap py-16 sm:py-20">
        {/* 锚点导航 */}
        <div className="mb-12 flex flex-wrap gap-2">
          {trends.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-700"
            >
              {t.no} {t.title}
            </a>
          ))}
        </div>

        <div className="space-y-8">
          {trends.map((t) => (
            <section key={t.id} id={t.id} className="card scroll-mt-24 overflow-hidden">
              <header
                className="flex flex-wrap items-center gap-4 border-b border-slate-200/70 px-7 py-5"
                style={{ background: `${t.tint}55` }}
              >
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-[15px] font-bold"
                  style={{ background: t.tint, color: "#4A4550" }}
                >
                  {t.no}
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-ink-800">{t.title}</h2>
                </div>
                <span
                  className="ml-auto rounded-full px-3 py-1 text-[12px] font-semibold"
                  style={{ background: "white", color: "#4A4550" }}
                >
                  {t.level}
                </span>
              </header>

              <div className="px-7 py-7">
                <p className="text-[14.5px] leading-8 text-slate-600">{t.summary}</p>

                {t.points.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {t.points.map((p, i) => (
                      <li key={i} className="flex gap-3 text-[14px] leading-8 text-slate-600">
                        <span
                          className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: t.accent }}
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* 代表项目 */}
                {t.projects.length > 0 && (
                  <div className="mt-7">
                    <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-slate-400">
                      代表项目
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {t.projects.map((p) => (
                        <div
                          key={p.name}
                          className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                        >
                          <b className="block text-[13.5px] text-ink-800">{p.name}</b>
                          <span className="mt-1.5 block text-[12.5px] leading-6 text-slate-500">
                            {p.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 三方模型 */}
                {t.trio && (
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {t.trio.map((x) => (
                      <div key={x.name} className="rounded-xl border border-slate-200 p-5">
                        <div className="flex items-center gap-2">
                          <b className="text-[15px] text-ink-800">{x.name}</b>
                          <Chip color={t.tint}>{x.tag}</Chip>
                        </div>
                        <p className="mt-2.5 text-[12.5px] leading-6 text-slate-500">{x.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* DAA 图表 */}
                {t.chart && (
                  <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                    <h3 className="text-[14px] font-bold text-ink-800">{t.chart.title}</h3>
                    <div className="mt-5 space-y-4">
                      {t.chart.bars.map((b) => (
                        <div key={b.year}>
                          <div className="mb-1.5 flex items-baseline justify-between">
                            <span className="text-[12.5px] text-slate-500">{b.year}</span>
                            <span className="text-[13.5px] font-bold text-ink-800">
                              {b.num}
                            </span>
                          </div>
                          <div className="h-3 overflow-hidden rounded-full bg-white">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${Math.max(b.pct, 2)}%`,
                                background: `linear-gradient(90deg, ${t.tint}, ${t.accent})`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 border-t border-slate-200 pt-4 text-[12.5px] leading-6 text-slate-500">
                      {t.chart.note}
                    </p>
                    <p className="mt-2 text-[12px] text-slate-400">来源：{t.chart.source}</p>
                  </div>
                )}

                {t.warn && (
                  <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50/70 px-5 py-4">
                    <p className="text-[13.5px] leading-7 text-amber-900">{t.warn}</p>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/cases"
            className="rounded-xl bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            看看具体案例 →
          </Link>
          <Link
            href="/what"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          >
            ← 回到「AIGC 是什么」
          </Link>
        </div>
      </div>
    </>
  );
}
