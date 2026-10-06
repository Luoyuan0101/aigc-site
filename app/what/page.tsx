import Link from "next/link";
import { definition } from "@/lib/content";
import { PageHero, SectionTitle } from "@/components/ui";

export const metadata = { title: "AIGC 是什么" };

export default function WhatPage() {
  return (
    <>
      <PageHero
        eyebrow="第一部分"
        title="AIGC 是什么"
        desc="Artificial Intelligence Generated Content —— 人工智能生成内容。它不是让 AI 去「认」，而是让 AI 去「造」。"
      />

      <div className="wrap py-16 sm:py-20">
        {/* 定义 */}
        <section className="card overflow-hidden">
          <div className="border-b border-slate-200/70 bg-gradient-to-r from-indigo-50 to-cyan-50 px-7 py-6">
            <div className="text-[12.5px] font-medium uppercase tracking-wider text-indigo-500">
              {definition.full}
            </div>
            <h2 className="mt-2 text-2xl font-bold text-ink-800">{definition.cn}</h2>
          </div>
          <div className="px-7 py-7">
            <p className="text-[15px] leading-8 text-slate-600">{definition.one}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {definition.modals.map((m) => (
                <div
                  key={m.name}
                  className="flex items-baseline gap-3 rounded-xl bg-slate-50/80 px-4 py-3"
                >
                  <b className="w-12 shrink-0 text-[13.5px] text-ink-800">{m.name}</b>
                  <span className="text-[13px] leading-6 text-slate-500">{m.eg}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 对比 */}
        <section className="mt-16">
          <SectionTitle
            index="01"
            title="和传统 AI 差在哪"
            desc="这是理解 AIGC 的关键一步：判断 vs 创造。"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {definition.contrast.map((c) => (
              <div key={c.tag} className="card p-7">
                <span
                  className="chip"
                  style={
                    c.tone === "violet"
                      ? { background: "#EDE9FE", borderColor: "#C4B5FD", color: "#5B21B6" }
                      : { background: "#F1F5F9", borderColor: "#CBD5E1", color: "#475569" }
                  }
                >
                  {c.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink-800">{c.title}</h3>
                <p className="mt-3 text-[14.5px] leading-8 text-slate-600">{c.desc}</p>
                <ul className="mt-5 space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-[13.5px] text-slate-500">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: c.tone === "violet" ? "#8B5CF6" : "#94A3B8" }}
                      />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-200/70 bg-indigo-50/70 px-6 py-5">
            <p className="text-[14.5px] leading-8 text-indigo-900">{definition.layer}</p>
          </div>
        </section>

        {/* 为什么重要 */}
        <section className="mt-16">
          <SectionTitle index="02" title="为什么值得关注" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { t: "它直接面向产出", d: "过去 AI 的成果是「一个判断」，现在 AI 的成果是「一份能用的东西」。" },
              { t: "它在快速下沉", d: "从实验室能力，变成老师、学生、开发者手里随手可用的工具。" },
              { t: "它有明确的边界", d: "幻觉、版权、隐私，这些坑决定了它能做什么、不能做什么。" },
            ].map((i) => (
              <div key={i.t} className="card p-6">
                <h3 className="text-[15.5px] font-bold text-ink-800">{i.t}</h3>
                <p className="mt-2.5 text-[13.5px] leading-7 text-slate-500">{i.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/trends"
            className="rounded-xl bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            下一步：现在在做什么 →
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          >
            返回首页
          </Link>
        </div>
      </div>
    </>
  );
}
