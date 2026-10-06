import Link from "next/link";
import { cases } from "@/lib/content";
import { Chip, PageHero } from "@/components/ui";

export const metadata = { title: "相关项目案例" };

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="第三部分"
        title="相关项目案例"
        desc="分五类看：我选定的动漫生成赛道、开源基础模型、教育领域实践、学生自己做出来的项目，以及能直接拿来用的建站与内容工具。"
      />

      <div className="wrap py-16 sm:py-20">
        <div className="space-y-14">
          {cases.map((g) => (
            <section key={g.group}>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-6 w-1.5 rounded-full"
                  style={{ background: g.accent }}
                />
                <h2 className="text-[20px] font-bold text-ink-800">{g.group}</h2>
                <span className="text-[12.5px] text-slate-400">
                  {g.items.length} 个
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((it) => (
                  <article key={it.name} className="card card-hover flex flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[16px] font-bold leading-7 text-ink-800">
                        {it.name}
                      </h3>
                    </div>
                    <div className="mt-1.5 text-[12px] text-slate-400">{it.org}</div>
                    <p className="mt-4 flex-1 text-[13.5px] leading-7 text-slate-600">
                      {it.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {it.tags.map((tg) => (
                        <Chip key={tg} color={g.accent}>
                          {tg}
                        </Chip>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50 to-cyan-50 px-7 py-7">
          <h3 className="text-[16.5px] font-bold text-ink-800">
            这些案例对我最大的提示
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "动漫生成这件事已经跑通",
                d: "即梦、可灵、Seko、纳米漫剧流水线这类工具，已经把「剧本 → 分镜 → 视频 → 配音 → 剪辑」串成流水线，说明技术上成立，而且已经有产业在做。",
              },
              {
                t: "但角色一致性仍是共同痛点",
                d: "工具再多，跨镜角色崩坏依然是所有人都在解的题 —— 这正好是我这个方向可以下手的缝隙。",
              },
              {
                t: "一站式平台适合先跑通一遍",
                d: "先用流水线型平台完整走一遍全流程，摸清每个环节在干什么，再回到单点工具打磨自己的风格和一致性。",
              },
              {
                t: "学生项目是可行的",
                d: "《生境方舟》和两个 16 岁高中生的项目说明：借助现成的 AI 工具 + 云端部署，高中生也能做出能用的东西。",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-xl bg-white/80 p-5">
                <b className="text-[14px] text-ink-800">{x.t}</b>
                <p className="mt-2 text-[13px] leading-7 text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/limits"
            className="rounded-xl bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            接着看：现存局限 →
          </Link>
          <Link
            href="/trends"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          >
            ← 回到「现在在做什么」
          </Link>
        </div>
      </div>
    </>
  );
}
