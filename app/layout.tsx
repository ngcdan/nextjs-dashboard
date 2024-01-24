import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Le Ngoc Dan',
    default: 'Le Ngoc Dan',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col h-screen">
          {/* Header */}
          <header className="flex flex-0 bg-stone-100 h-16">
            <div className='limit w-full'>
              <div className="flex items-center justify-start px-2 font-bold text-stone-500 text-sm font-mono">
                <a className="font-bold text-stone-700" href="/">nqcdan.rocks</a>
                <span className="text-stone-500 inline-block animate-blink">▮</span>
              </div>
            </div>
          </header>

          {/* Main */}
          <main className='flex flex-col flex-1 limit w-full no-list my-10 overflow-y-auto'>
            {children}
          </main>

          {/* Footer */}
          <footer className="flex flex-0  bg-stone-100 h-16">
            <div className="limit w-full">
              <div className="flex justify-between px-2 font-bold text-stone-500 text-sm font-mono">
                <p><a rel="me" href="https://masto.ai/@linuss1908@gmail.com">🐘 @dan</a></p>
                <div className="flex-1"></div>
                <div className="font-normal"><a href="/rss.xml">📮 RSS</a></div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
