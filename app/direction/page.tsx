import Link from "next/link";
import { directions } from "@/lib/content";
import { Chip, PageHero, SectionTitle } from "@/components/ui";

export const metadata = { title: "我的项目方向" };

const plan = [
  {
    step: "1",
    title: "内容先行",
    desc: "把这次调研整理成四个板块：AIGC 是什么 → 现在在做什么 → 案例 → 局限。文字先定稿，再交给排版。",
  },
  {
    step: "2",
    title: "定技术栈",
    desc: "Next.js（App Router）+ TypeScript + Tailwind CSS。用 TypeScript 让类型错误在编译期就暴露，Tailwind 直接写样式不折腾 CSS 文件。",
  },
  {
    step: "3",
    title: "做版式",
    desc: "顶部固定导航栏 + 卡片式布局。每个方向一张卡、每个案例一张卡，配颜色区分，长文分段避免大段文字墙。",
  },
  {
    step: "4",
    title: "补来源",
    desc: "把 IDC《DAA 研究报告》、商汤 WAIC 2026 发布等来源写清楚，让每个数字都能被追溯 —— 这也是对「知识幻觉」最直接的防御。",
  },
  {
    step: "5",
    title: "上传 GitHub",
    desc: "用 GitHub Desktop 把项目发布成仓库，通过 Commit + Push 管理版本，最后把仓库链接提交上去。",
  },
];

export default function DirectionPage() {
  return (
    <>
      <PageHero
        eyebrow="第五部分"
        title="我打算做什么"
        desc="调研之后，我列了三个候选方向。这一次先探索想法，不必锁定最终课题 —— 但我已经选定先从 C 开始动手。"
      />

      <div className="wrap py-16 sm:py-20">
        {/* 三个方向 */}
        <div className="grid gap-5 lg:grid-cols-3">
          {directions.map((d) => (
            <article
              key={d.key}
              className={`relative flex flex-col overflow-hidden rounded-2xl border p-7 ${
                d.chosen
                  ? "border-indigo-300 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 shadow-lift"
                  : "card"
              }`}
            >
              {d.chosen && (
                <span className="absolute right-5 top-5 rounded-full bg-indigo-600 px-3 py-1 text-[11.5px] font-bold text-white">
                  已选定 · 先做这个
                </span>
              )}
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl text-[15px] font-bold ${
                  d.chosen ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {d.key}
              </span>
              <h2 className="mt-4 pr-20 text-[17px] font-bold leading-7 text-ink-800">
                {d.title}
              </h2>
              <p className="mt-3 flex-1 text-[13.5px] leading-7 text-slate-600">{d.desc}</p>
              <div className="mt-5 rounded-xl bg-white/70 px-4 py-3">
                <span className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400">
                  为什么选它
                </span>
                <p className="mt-1 text-[13px] leading-7 text-slate-600">{d.why}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {d.tech.map((t) => (
                  <Chip key={t} color={d.chosen ? "#C7D2FE" : "#E2E8F0"}>
                    {t}
                  </Chip>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* 为什么选 C */}
        <section className="mt-16">
          <SectionTitle
            index="01"
            title="为什么最终从「方向 C」动手"
            desc="三个方向都不是坏方向，但作为第一次建站练习，C 的投入产出比最高。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "材料现成", d: "这次调研的结论本身就是内容主体，不需要再额外生产素材。" },
              { t: "结构清晰", d: "「是什么 → 在做什么 → 案例 → 局限 → 我的方向」天然就是一条页面主线。" },
              { t: "难度匹配", d: "侧重点在排版与信息组织，而不是模型调用与后端，适合作为第一次建站。" },
              { t: "可持续", d: "A 和 B 都可以在此基础上继续长出去，不会白做。" },
            ].map((x) => (
              <div key={x.t} className="card p-6">
                <b className="text-[14.5px] text-ink-800">{x.t}</b>
                <p className="mt-2 text-[13px] leading-7 text-slate-500">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 怎么做 */}
        <section className="mt-16">
          <SectionTitle index="02" title="这个网站是怎么做出来的" />
          <ol className="space-y-4">
            {plan.map((p) => (
              <li key={p.step} className="card flex gap-5 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-800 text-[14px] font-bold text-white">
                  {p.step}
                </span>
                <div>
                  <b className="text-[15px] text-ink-800">{p.title}</b>
                  <p className="mt-1.5 text-[13.5px] leading-7 text-slate-600">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 后续想接着做的 */}
        <section className="mt-16">
          <SectionTitle
            index="03"
            title="如果还有时间，想接着做的"
            desc="这次不锁定课题，但先把能延伸的路记下来。"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { t: "接入真实模型 API", d: "把调研内容里的「教材 → 知识图谱」做一个小 demo，验证方向 A。" },
              { t: "加一个反馈入口", d: "让同学能对每个概念提问，顺势验证方向 B 的可行性。" },
              { t: "补一份来源索引", d: "给每个数字、每条结论挂上原始出处链接，做成可核查的版本。" },
            ].map((x) => (
              <div key={x.t} className="card p-6">
                <b className="text-[14.5px] text-ink-800">{x.t}</b>
                <p className="mt-2 text-[13px] leading-7 text-slate-500">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            回到首页
          </Link>
          <Link
            href="/limits"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          >
            ← 回到「现存局限」
          </Link>
        </div>
      </div>
    </>
  );
}
