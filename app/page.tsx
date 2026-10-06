import Link from "next/link";
import { definition, limits, trends } from "@/lib/content";
import { Eyebrow, NextLink, SectionTitle } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-indigo-900">
        <div className="grid-dots absolute inset-0 opacity-40" />
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full opacity-30 blur-3xl animate-drift"
          style={{ background: "radial-gradient(circle,#F472B6,transparent 70%)" }}
        />
        <div
          className="absolute -right-10 bottom-0 h-80 w-80 rounded-full opacity-25 blur-3xl animate-drift"
          style={{ background: "radial-gradient(circle,#22D3EE,transparent 70%)" }}
        />
        <div className="wrap relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_.85fr]">
          <div className="animate-rise">
            <Eyebrow>AIGC 领域调研 · 面向高中生</Eyebrow>
            <h1 className="mt-6 text-[34px] font-bold leading-[1.25] text-white sm:text-[50px]">
              当 AI 不再只是
              <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                判断{" "}
              </span>
              <br className="hidden sm:block" />
              而是开始
              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                {" "}
                创造{" "}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[15.5px] leading-8 text-indigo-100/85">
              这是一个关于 <b className="text-white">AIGC</b>
              （人工智能生成内容）的科普站：它是什么、行业现在在做什么、有哪些真实案例、还卡在哪里，
              以及我打算从哪个角度切进去做自己的项目。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/what"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink-800 shadow-lift transition hover:-translate-y-0.5"
              >
                从「AIGC 是什么」开始
              </Link>
              <Link
                href="/direction"
                className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                看我打算做什么 →
              </Link>
            </div>
          </div>

          {/* 数据卡 */}
          <div className="animate-rise space-y-3" style={{ animationDelay: ".12s" }}>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <div className="text-[12.5px] font-medium text-indigo-100/70">
                全球日活智能体数（DAA）
              </div>
              <div className="mt-4 space-y-3.5">
                {[
                  { y: "2025", v: "2860 万", w: "12%" },
                  { y: "2026", v: "7940 万", w: "34%" },
                  { y: "2030", v: "22.16 亿", w: "100%" },
                ].map((r) => (
                  <div key={r.y} className="flex items-center gap-3">
                    <span className="w-10 shrink-0 text-[12px] text-indigo-100/60">
                      {r.y}
                    </span>
                    <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-cyan-300 to-pink-300"
                        style={{ width: r.w }}
                      />
                    </span>
                    <span className="w-[76px] shrink-0 text-right text-[12.5px] font-semibold text-white">
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-white/10 pt-3 text-[11.5px] leading-5 text-indigo-100/55">
                IDC《DAA 研究报告》，2026 世界人工智能大会（WAIC 2026）发布
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 一句话看懂 ---------- */}
      <section className="wrap py-16 sm:py-20">
        <SectionTitle
          index="01"
          title="一句话看懂 AIGC"
          desc={definition.one}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {definition.contrast.map((c) => (
            <div key={c.tag} className="card card-hover p-7">
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
              <h3 className="mt-4 text-lg font-bold text-ink-800">{c.title}</h3>
              <p className="mt-3 text-[14px] leading-7 text-slate-600">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-slate-50 px-2.5 py-1 text-[12.5px] text-slate-500"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 card p-6">
          <p className="text-[14px] leading-8 text-slate-600">
            <b className="text-ink-800">AIGC 覆盖哪些内容类型？</b>{" "}
            {definition.modals.map((m) => m.name).join(" · ")}
            　—— {definition.layer}
          </p>
        </div>
      </section>

      {/* ---------- 五大方向速览 ---------- */}
      <section className="border-y border-slate-200/70 bg-white/60">
        <div className="wrap py-16 sm:py-20">
          <SectionTitle
            index="02"
            title="现在这个领域在做什么"
            desc="调研覆盖了 5 个方向：从最前沿的多模态统一模型，到已经能落地的垂直场景、再到规则与安全。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trends.map((t) => (
              <Link
                key={t.id}
                href={`/trends#${t.id}`}
                className="card card-hover p-6"
                style={{ background: "white" }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl text-[13px] font-bold"
                    style={{ background: t.tint, color: "#4A4550" }}
                  >
                    {t.no}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{ background: t.tint, color: "#4A4550" }}
                  >
                    {t.level}
                  </span>
                </div>
                <h3 className="mt-4 text-[16.5px] font-bold text-ink-800">{t.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-7 text-slate-500 line-clamp-3">
                  {t.summary}
                </p>
              </Link>
            ))}
            <div className="card flex flex-col justify-between p-6 bg-gradient-to-br from-indigo-500 to-cyan-500 text-white border-transparent">
              <div>
                <h3 className="text-[16.5px] font-bold">还有 5 个绕不开的坑</h3>
                <p className="mt-2.5 text-[13.5px] leading-7 text-white/85">
                  {limits.slice(0, 3).map((l) => l.title).join(" / ")}……做项目之前先知道边界在哪。
                </p>
              </div>
              <Link
                href="/limits"
                className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold underline decoration-white/40 underline-offset-4"
              >
                看看局限 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 阅读路线 ---------- */}
      <section className="wrap py-16 sm:py-20">
        <SectionTitle
          index="03"
          title="按这个顺序读完，就懂了"
          desc="全站六页，对应「是什么 → 在做什么 → 案例 → 局限 → 我的方向」这条线。"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <NextLink href="/what" label="AIGC 是什么" hint="定义 · 与传统 AI 的区别" />
          <NextLink href="/trends" label="现在在做什么" hint="5 个方向 · 含 DAA 数据" />
          <NextLink href="/cases" label="相关项目案例" hint="模型 · 教育 · 学生作品 · 建站工具" />
          <NextLink href="/limits" label="现存局限" hint="5 条 · 附调研来源" />
          <NextLink href="/direction" label="我的方向" hint="A / B / C 三个候选" />
          <NextLink href="/trends#agent" label="直达：智能体 Agent" hint="2026 最热方向" />
        </div>
      </section>
    </>
  );
}
