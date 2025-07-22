import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'MediEye Blog',
  description:
    '眼科論文の要約を日本語・英語で提供するブログサイト。タグ・カテゴリー検索対応。'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        <main className="mx-auto max-w-4xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
} 