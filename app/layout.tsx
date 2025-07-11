import "@/app/styles/global.css";
import { inter } from "@/app/fonts/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} antialiased flex h-screen flex-col md:flex-row md:overflow-hidden`}
      >
        <div className="flex-grow bg-gray-200 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </body>
    </html>
  );
}

// inter.className：Interフォントを適用するクラス。
// antialiased：テキストを滑らかに表示するTailwind CSSのクラス。
//flex：Flexboxレイアウトを有効化。
// h-screen：高さを画面全体に設定。
// flex-col：モバイルでは縦並び。
// md:flex-row：md（768px以上）では横並び。
// md:overflow-hidden：md以上の画面幅でオーバーフローを隠す。
// flex-grow：残りのスペースを全て使う。
// p-6：パディング（内側余白）を16px（Tailwindの6）に。
// md:overflow-y-auto：md以上の画面幅で縦スクロールを有効化。
// md:p-12：md以上の画面幅でパディングを48px（Tailwindの12）に。
// {children}：このレイアウトの中に各ページの内容が入る部分。
