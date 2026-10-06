import Link from "next/link";
import {
  animBoundaries,
  animLinks,
  animPhases,
  animPipeline,
  animRisks,
  animRoutes,
  animTools,
  motionForms,
  myDirection,
  specGroups,
  styleForms,
  whyNotSite,
  type AnimForm,
} from "@/lib/content";
import { Chip, PageHero, SectionTitle } from "@/components/ui";

export const metadata = { title: "我的方向 · AIGC 动漫动画生成器" };

/* 动画表现形式卡 */
function FormCard({ f, accent }: { f: AnimForm; accent: string }) {
  return (
    <article className="card card-hover flex flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span
          className="grid h-9 shrink-0 place-items-center rounded-lg px-2.5 text-[12.5px] font-bold"
          style={{ background: `${accent}44`, color: "#4A4550" }}
        >
          {f.no}
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11.5px] text-slate-500">
          成本 {f.cost}
        </span>
      </div>
      <h3 className="mt-3.5 text-[16px] font-bold leading-7 text-ink-800">{f.name}</h3>
      <p className="mt-2.5 text-[13.5px] leading-7 text-slate-600">{f.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {f.traits.map((t) => (
          <Chip key={t} color={accent}>
            {t}
          </Chip>
        ))}
      </div>
      <p className="mt-4 border-t border-slate-100 pt-3.5 text-[12.5px] leading-6 text-slate-500">
        <span className="font-semibold text-slate-600">适合 · </span>
        {f.fit}
      </p>
    </article>
  );
}

export default function DirectionPage() {
  return (
    <>
      <PageHero
        eyebrow="第五部分 · 我打算做什么"
        title="我要在 AIGC 领域做一件事，而不是做一个网站"
        desc="这次调研的结论不是「我要去做个网站」—— 网站只是这份调研成果的载体。真正要回答的是：在这个领域里，我切进哪一条线、切多深、第一步交出什么。我的判断是：做 AIGC 动漫角色 / 剧情动画生成器。"
      />

      <div className="wrap py-16 sm:py-20">
        {/* ---------- 定位卡 ---------- */}
        <section className="overflow-hidden rounded-3xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-7 shadow-lift sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo-600 px-3.5 py-1.5 text-[11.5px] font-bold text-white">
              已选定方向
            </span>
            <span className="text-[12.5px] text-slate-400">{myDirection.en}</span>
          </div>
          <h2 className="mt-5 text-[26px] font-bold leading-snug text-ink-800 sm:text-[34px]">
            {myDirection.name}
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-8 text-slate-600">
            {myDirection.one}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {myDirection.meta.map((m) => (
              <div key={m.k} className="rounded-2xl bg-white/80 p-5">
                <div className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400">
                  {m.k}
                </div>
                <p className="mt-2 text-[13.5px] leading-7 text-slate-700">{m.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- 01 为什么不把「做网站」当方向 ---------- */}
        <section className="mt-16">
          <SectionTitle
            index="01"
            title="先把定位说清楚：网站是载体，不是方向"
            desc="任务三要交的是「调研 + 方向」。如果我最后交出来的结论是「我要做一个网站」，那等于把装东西的盒子当成了东西本身。"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {whyNotSite.map((w) => (
              <article key={w.no} className="card p-7">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-800 text-[13px] font-bold text-white">
                  {w.no}
                </span>
                <h3 className="mt-4 text-[16.5px] font-bold text-ink-800">{w.t}</h3>
                <p className="mt-3 text-[13.5px] leading-7 text-slate-600">{w.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- 02 方向从哪来 ---------- */}
        <section className="mt-16">
          <SectionTitle
            index="02"
            title="这个方向不是凭感觉挑的"
            desc="前面调研的五条主线，逐条都能落到这一个方向上 —— 它不是另起炉灶，而是把调研结果往一处收。"
          />
          <div className="card divide-y divide-slate-100 overflow-hidden p-0">
            {animLinks.map((l) => (
              <div
                key={l.from}
                className="grid gap-2 px-6 py-5 sm:grid-cols-[190px_1fr] sm:items-start sm:gap-6"
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  <b className="text-[13.5px] font-semibold text-ink-800">{l.from}</b>
                </div>
                <p className="text-[13.5px] leading-7 text-slate-600">{l.to}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- 03 超详细分类体系 ---------- */}
        <section className="mt-20">
          <SectionTitle
            index="03"
            title="超详细分类体系（一）：动画表现形式"
            desc="「动画」不是一个词，而是一堆可选的技术与风格组合。先把可能性穷举清楚，才知道自己要做哪一种。下面按两层拆：画面长什么样（视觉风格）、画面怎么动（运动生成方式）。"
          />

          <h3 className="mb-5 flex items-center gap-3 text-[18px] font-bold text-ink-800">
            <span className="h-5 w-1.5 rounded-full bg-pink-300" />
            3.1 视觉风格 —— 画面长什么样
            <span className="text-[12.5px] font-normal text-slate-400">
              {styleForms.length} 种
            </span>
          </h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {styleForms.map((f) => (
              <FormCard key={f.no} f={f} accent="#F19CBB" />
            ))}
          </div>

          <h3 className="mb-5 mt-12 flex items-center gap-3 text-[18px] font-bold text-ink-800">
            <span className="h-5 w-1.5 rounded-full bg-sky-300" />
            3.2 运动生成方式 —— 画面怎么动
            <span className="text-[12.5px] font-normal text-slate-400">
              {motionForms.length} 种
            </span>
          </h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {motionForms.map((f) => (
              <FormCard key={f.no} f={f} accent="#8FC7E6" />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/80 bg-amber-50/70 px-6 py-5">
            <p className="text-[13.5px] leading-7 text-amber-900">
              <b>怎么用这两张表：</b>
              视觉风格决定「一眼看上去像不像动画」，运动方式决定「它能不能动得好看」。
              两者自由组合 —— 比如「Q 版 + 动态漫画」是最省成本的启动组合，
              「日式赛璐璐 + 逐镜图生视频」是最主流也是我最想先跑通的组合。
            </p>
          </div>
        </section>

        {/* ---------- 04 生成技术路线 ---------- */}
        <section className="mt-20">
          <SectionTitle
            index="04"
            title="超详细分类体系（二）：生成技术路线"
            desc="同一个画面效果，可以用完全不同的技术路径做出来。代价、可控性、适用场景各不相同 —— 这也是最容易走弯路的地方，先把账算清楚。"
          />
          <div className="space-y-5">
            {animRoutes.map((r) => (
              <article key={r.no} className="card overflow-hidden p-0">
                <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 px-6 py-5">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[13px] font-bold"
                    style={{ background: `${r.accent}55`, color: "#4A4550" }}
                  >
                    {r.no}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[17px] font-bold text-ink-800">{r.name}</h3>
                    <div className="text-[12px] text-slate-400">{r.en}</div>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11.5px] font-medium text-slate-500">
                    {r.level}
                  </span>
                </div>

                <div className="px-6 py-5">
                  <p className="text-[13.5px] leading-7 text-slate-600">{r.desc}</p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div className="rounded-xl bg-emerald-50/60 p-5">
                      <div className="text-[12px] font-bold text-emerald-800">
                        优势
                      </div>
                      <ul className="mt-2.5 space-y-2">
                        {r.pros.map((p) => (
                          <li
                            key={p}
                            className="flex gap-2.5 text-[13px] leading-7 text-emerald-900/85"
                          >
                            <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-rose-50/60 p-5">
                      <div className="text-[12px] font-bold text-rose-800">代价</div>
                      <ul className="mt-2.5 space-y-2">
                        {r.cons.map((c) => (
                          <li
                            key={c}
                            className="flex gap-2.5 text-[13px] leading-7 text-rose-900/85"
                          >
                            <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 px-5 py-4">
                      <div className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400">
                        代表工具
                      </div>
                      <p className="mt-1.5 text-[13px] leading-7 text-slate-600">
                        {r.tools}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-50 px-5 py-4">
                      <div className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400">
                        适合用在哪
                      </div>
                      <p className="mt-1.5 text-[13px] leading-7 text-slate-600">
                        {r.fit}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- 05 要求规整模板 ---------- */}
        <section className="mt-20">
          <SectionTitle
            index="05"
            title="超详细分类体系（三）：要求规整模板"
            desc="这是整个方向里我认为最关键的一块。AI 生成的通病是「你说得越模糊，它跑得越偏」—— 可控性不足的根源往往不在模型，而在需求没写清楚。所以把「想要什么」拆成 9 组、共 49 个字段，动手前必须填完。"
          />

          <div className="mb-8 flex flex-wrap gap-2">
            {specGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition hover:-translate-y-0.5"
                style={{
                  background: `${g.accent}22`,
                  borderColor: `${g.accent}99`,
                  color: "#4A4550",
                }}
              >
                {g.name}
              </a>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {specGroups.map((g) => (
              <article
                key={g.id}
                id={g.id}
                className="card scroll-mt-24 overflow-hidden p-0"
              >
                <div
                  className="flex items-center gap-3 px-6 py-4"
                  style={{ background: `${g.accent}30` }}
                >
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[12.5px] font-bold"
                    style={{ background: g.accent, color: "#4A4550" }}
                  >
                    {g.name.slice(0, 1)}
                  </span>
                  <h3 className="flex-1 text-[15.5px] font-bold text-ink-800">
                    {g.name}
                  </h3>
                  <span className="text-[11.5px] text-slate-500">
                    {g.fields.length} 项
                  </span>
                </div>
                <dl className="divide-y divide-slate-100">
                  {g.fields.map((f) => (
                    <div key={f.k} className="px-6 py-3.5">
                      <dt className="text-[12.5px] font-semibold text-slate-600">
                        {f.k}
                      </dt>
                      <dd className="mt-1.5 rounded-lg bg-slate-50 px-3 py-2 text-[12.5px] leading-6 text-slate-500">
                        <span className="text-slate-400">示例 · </span>
                        {f.eg}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50 to-cyan-50 px-6 py-6">
            <h4 className="text-[15.5px] font-bold text-ink-800">
              为什么这张表能解决问题
            </h4>
            <p className="mt-3 text-[13.5px] leading-8 text-slate-600">
              调研里点出的「可控性不足」—— 每次生成的图谱结构差异大 —— 本质上是因为需求停留在脑子里，
              没有变成可复用的指令。这张表把它变成三样东西：
              <b className="text-ink-800">一次填完的约束</b>（生成前就说清要什么）、
              <b className="text-ink-800">一份可复现的参数</b>（模型、seed、提示词模板全部留档）、
              <b className="text-ink-800">一把验收的尺子</b>（I 组的质检项直接对应交付标准）。
              同一份表跑两次，结果应当稳定。
            </p>
          </div>
        </section>

        {/* ---------- 06 完整流程 ---------- */}
        <section className="mt-20">
          <SectionTitle
            index="06"
            title="从想法到成片：完整流程"
            desc="九步。注意第 4 步「动态分镜预览」—— 先用几乎零成本的方式把节奏定下来，再决定哪几镜值得花算力精做，这是控制成本的关键。"
          />
          <ol className="space-y-3">
            {animPipeline.map((p) => (
              <li key={p.no} className="card flex items-start gap-5 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink-800 text-[13px] font-bold text-white">
                  {p.no}
                </span>
                <div>
                  <b className="text-[14.5px] text-ink-800">{p.name}</b>
                  <p className="mt-1 text-[13px] leading-7 text-slate-600">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- 07 工具选型 ---------- */}
        <section className="mt-20">
          <SectionTitle
            index="07"
            title="每个环节对应什么工具"
            desc="按流程环节排，不按工具名气排。同一环节给了多个候选，是因为不同题材、不同预算适合的不一样。"
          />
          <div className="card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50 text-[12px] uppercase tracking-wider text-slate-400">
                    <th className="px-6 py-3.5 font-semibold">环节</th>
                    <th className="px-6 py-3.5 font-semibold">候选工具</th>
                    <th className="px-6 py-3.5 font-semibold">备注</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {animTools.map((t) => (
                    <tr key={t.stage} className="align-top hover:bg-slate-50/60">
                      <td className="px-6 py-4 text-[13.5px] font-semibold text-ink-800">
                        {t.stage}
                      </td>
                      <td className="px-6 py-4 text-[13px] leading-7 text-slate-600">
                        {t.tools}
                      </td>
                      <td className="px-6 py-4 text-[12.5px] leading-6 text-slate-500">
                        {t.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-[12.5px] leading-7 text-slate-400">
            说明：以上为 2026 年 10 月的调研快照。这个领域的工具版本迭代极快（图片、视频模型往往几个月就换一代），
            动手前建议再到各平台官网确认当前能力与价格 —— 这也是对「知识幻觉」最直接的防御。
          </p>
        </section>

        {/* ---------- 08 分阶段 ---------- */}
        <section className="mt-20">
          <SectionTitle
            index="08"
            title="分三个阶段推进"
            desc="不追求一步到位。每个阶段只解决一件事，并且都写清楚验收标准 —— 做没做到，一眼能看出来。"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {animPhases.map((p, i) => (
              <article
                key={p.no}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-7 ${
                  i === 0
                    ? "border-indigo-300 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 shadow-lift"
                    : "card"
                }`}
              >
                {i === 0 && (
                  <span className="absolute right-5 top-5 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-bold text-white">
                    下一步
                  </span>
                )}
                <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400">
                  {p.no}
                </span>
                <h3 className="mt-2 pr-16 text-[17px] font-bold leading-7 text-ink-800">
                  {p.name}
                </h3>
                <p className="mt-3 text-[13.5px] leading-7 text-slate-600">{p.goal}</p>

                <div className="mt-5">
                  <div className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400">
                    要做的事
                  </div>
                  <ul className="mt-2.5 space-y-1.5">
                    {p.todo.map((t) => (
                      <li
                        key={t}
                        className="flex gap-2.5 text-[12.5px] leading-6 text-slate-600"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex-1 rounded-xl bg-white/70 px-4 py-3.5">
                  <div className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400">
                    交付物
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-6 text-slate-600">
                    {p.deliver}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-200/70 bg-emerald-50/60 px-4 py-3.5">
                  <div className="text-[11.5px] font-semibold uppercase tracking-wider text-emerald-700">
                    验收标准
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-6 text-emerald-900/85">
                    {p.check}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- 09 风险与边界 ---------- */}
        <section className="mt-20">
          <SectionTitle
            index="09"
            title="已知的风险，和我不打算做的事"
            desc="前面调研列了 5 条局限，这个方向几乎每条都会撞上。提前写清楚应对，比事后补救便宜得多。"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {animRisks.map((x) => (
              <article key={x.r} className="card p-6">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                  <h3 className="text-[15px] font-bold text-ink-800">{x.r}</h3>
                </div>
                <p className="mt-2.5 text-[13px] leading-7 text-slate-500">{x.d}</p>
                <div className="mt-4 rounded-xl bg-emerald-50/60 px-4 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                    应对
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-6 text-emerald-900/85">
                    {x.fix}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-7 py-7">
            <h3 className="text-[16.5px] font-bold text-ink-800">边界：这些我不做</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {animBoundaries.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3.5"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span className="text-[13px] leading-7 text-slate-600">{b}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] leading-8 text-slate-500">
              把这四条写下来，是因为「能做什么」容易越界成「随便做什么」。
              AI 让生成成本降到几乎为零，判断该不该生成的责任反而变重了 —— 这部分必须由人承担。
            </p>
          </div>
        </section>

        {/* ---------- 底部导航 ---------- */}
        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            href="/limits"
            className="rounded-xl bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            ← 回到「现存局限」
          </Link>
          <Link
            href="/cases"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          >
            看看同赛道的案例
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          >
            回到首页
          </Link>
        </div>
      </div>
    </>
  );
}
