# 🚀 Prompt Navigator

> 中級プログラマーがAI（ChatGPT、Claude等）に指示を出す際に役立つ「キーワード（指示ワード）」を10カテゴリに整理し、サクサク＆エモいUIで閲覧・コピーできるWebアプリ

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/your-username/prompt-navigator)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 特徴

- 🎯 **10カテゴリ × nキーワードの高速ブラウジング／コピー**
- 🎨 **アニメーションで学習意欲を高めるUX**
- ⚡ **30秒以内に目的の指示ワードへ到達できる導線**
- 📱 **レスポンシブ対応（320px以上）**
- 📋 **ワンクリックでキーワードをクリップボードにコピー**
- 🌐 **モダンなSPA（Single Page Application）**

## 🎥 デモ

[🔗 Live Demo](https://your-username.github.io/prompt-navigator) 

## 📊 カテゴリ一覧

| カテゴリ | 説明 | キーワード数 |
|---------|------|-------------|
| 📝 出力フォーマット指定 | 出力形式を明確に指定 | 5個 |
| 💻 コード関連 | コードの品質向上とベストプラクティス | 4個 |
| 🛡️ エラー処理・例外 | 堅牢なエラー処理の実装 | 4個 |
| 📊 解析・要約・手順化 | 情報の整理と構造化 | 4個 |
| 🎨 スタイル・トーン指定 | 文体と表現方法の調整 | 4個 |
| ⚙️ 制約・条件付与 | 出力の範囲と条件を限定 | 3個 |
| 📚 例示・参考情報要求 | 具体例とサンプルコードの提供 | 3個 |
| ⚖️ 比較・選定 | 技術選択の判断材料を提供 | 3個 |
| 🔧 テスト・デバッグ | コード品質とデバッグ支援 | 3個 |
| 📖 根拠・引用 | 信頼性の高い情報源の提示 | 2個 |

## 🛠 技術スタック

- **Frontend**: React 18.3 + TypeScript 5.2
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 11.5
- **Router**: React Router 6.26
- **Icons**: Lucide React 0.441
- **Testing**: Vitest 2.0 + Testing Library 16.0
- **Linting**: ESLint 8.57 + Prettier 3.3

## 📦 セットアップ

### 前提条件

- Node.js 18.0以上
- npm 9.0以上

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/your-username/prompt-navigator.git
cd prompt-navigator

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーが `http://localhost:3000` で起動します。

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## 🧪 テスト

```bash
# テスト実行
npm run test

# テストウォッチモード
npm run test:ui

# カバレッジ計測
npm run test:coverage
```

## 📝 開発

```bash
# Lint チェック
npm run lint

# Lint 自動修正
npm run lint:fix

# Storybook 起動
npm run storybook
```

## 🏗 プロジェクト構造

```
src/
├── components/           # 再利用可能なコンポーネント
│   ├── CategoryCard.tsx
│   ├── KeywordCard.tsx
│   ├── Header.tsx
│   └── __tests__/       # コンポーネントテスト
├── pages/               # ページコンポーネント
│   ├── HomePage.tsx
│   ├── KeywordListPage.tsx
│   └── KeywordDetailPage.tsx
├── data/                # データファイル
│   ├── prompts.ts
│   └── __tests__/      # データテスト
├── test/               # テスト設定
│   └── setup.ts
├── App.tsx             # メインアプリ
├── main.tsx           # エントリーポイント
└── index.css          # グローバルスタイル
```

## 🌐 デプロイ

### GitHub Pages

```bash
# ビルド
npm run build

# GitHub Pagesにデプロイ（GitHub Actionsを使用）
```

### Vercel / Netlify

1. リポジトリを接続
2. ビルドコマンド: `npm run build`
3. 出力ディレクトリ: `dist`

## 🔒 セキュリティ

- 📋 クライアントサイドのみで動作（サーバーサイドの機密情報なし）
- 🔐 外部APIへの接続なし
- 🛡️ XSSプロテクション（React標準）
- 📝 TypeScriptによる型安全性

## 🤝 貢献

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📋 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

## 🎯 受入基準

- ✅ npm run build がエラーなく完了する
- ✅ 主要3画面でLighthouseパフォーマンス80点以上
- ✅ Storybookに全コンポーネントが表示できる
- ✅ Chrome / Edge / Safari(iOS)でカテゴリ→詳細→コピーが動作する
- ✅ テストカバレッジ80%以上

## 👥 作成者

**ダイスケ** - v0.9

## 🙏 謝辞

- [React](https://reactjs.org/) - ユーザーインターフェース構築のため
- [Vite](https://vitejs.dev/) - 高速なビルドツール
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSSフレームワーク
- [Framer Motion](https://www.framer.com/motion/) - 美しいアニメーション
- [Lucide](https://lucide.dev/) - 美しいアイコンセット

---

💡 **AIプロンプト作成がより効率的になることを願っています！** 