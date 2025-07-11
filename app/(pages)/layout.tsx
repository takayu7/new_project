import '@/app/styles/global.css';
import { inter } from '@/app/fonts/fonts';
import SideNav from '@/app/layout/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased flex h-screen flex-col md:flex-row md:overflow-hidden`}>
        <div className="flex h-screen flex-col space-x-5 md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow rounded-md my-3 bg-white p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}