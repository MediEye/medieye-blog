# MediEye Blog

## 概要

眼科論文の要約を日本語・英語で掲載するブログサイト。Next.js (App Router) + Prisma + PostgreSQL + Tailwind CSS 構成。

## セットアップ

```bash
# 依存パッケージをインストール
pnpm install # または npm / yarn

# 環境変数を設定
cp .env.example .env.local
# DATABASE_URL を編集してください

# Prisma マイグレーション
npx prisma migrate dev --name init

# 開発サーバー起動
npm run dev
```

ブラウザで http://localhost:3000 を開くとトップページが表示されます。

## デプロイ

Vercel プロジェクトに GitHub を連携し、以下の環境変数を設定してください。

- `DATABASE_URL`

## ライセンス

MIT
