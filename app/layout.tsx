import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AIGC 领域调研 · 我的方向：动漫动画生成器",
  description:
    "AIGC 领域调研：AIGC 是什么、当前研究方向、落地案例、现存局限，以及我选定的方向 —— AIGC 动漫角色 / 剧情动画生成器，含超详细的分类体系与要求规整模板。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="page-glow">
        <div className="relative z-10 flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
