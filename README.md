# 🚀 Prompt Navigator v2.0

> 中級プログラマーがAI（ChatGPT、Claude等）に指示を出す際に役立つ「キーワード（指示ワード）」を10カテゴリ×各20個（計200個）に大幅拡充し、効果順配置でサクサク＆エモいUIで閲覧・コピーできるWebアプリ

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/yamasakidaisuke/ai-prompt-playbook)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ v2.0 新機能

- 🎯 **キーワード大幅拡充**: 35個 → **200個**（約5.7倍に拡充）
- 📈 **効果順配置**: 中級プログラマーの実務効率を最大化する優先順位
- ⚡ **実務重視**: 頻繁に使用される・学習効果が高い・問題解決力が高い順に配置
- 💻 **最重要キーワード**: 「ステップバイステップ」「パフォーマンス最適化」など最優先配置

## ✨ 特徴

- 🎯 **10カテゴリ × 各20キーワードの高速ブラウジング／コピー**
- 🎨 **アニメーションで学習意欲を高めるUX**
- ⚡ **30秒以内に目的の指示ワードへ到達できる導線**
- 📱 **レスポンシブ対応（320px以上）**
- 📋 **ワンクリックでキーワードをクリップボードにコピー**
- 🌐 **モダンなSPA（Single Page Application）**

## 🎥 デモ

[🔗 Live Demo](https://yamasakidaisuke.github.io/ai-prompt-playbook/) 

## 📊 カテゴリ一覧

| カテゴリ | 説明 | キーワード数 | 最重要キーワード |
|---------|------|-------------|-----------------|
| 📝 出力フォーマット指定 | 出力形式を明確に指定 | **20個** | ステップバイステップ |
| 💻 コード関連 | コードの品質向上とベストプラクティス | **20個** | パフォーマンス最適化 |
| 🛡️ エラー処理・例外 | 堅牢なエラー処理の実装 | **20個** | エラーハンドリング |
| 📊 解析・要約・手順化 | 情報の整理と構造化 | **20個** | ステップバイステップ |
| 🎨 スタイル・トーン指定 | 文体と表現方法の調整 | **20個** | 初心者向け |
| ⚙️ 制約・条件付与 | 出力の範囲と条件を限定 | **20個** | 文字数制限 |
| 📚 例示・参考情報要求 | 具体例とサンプルコードの提供 | **20個** | サンプルコード |
| ⚖️ 比較・選定 | 技術選択の判断材料を提供 | **20個** | メリット・デメリット |
| 🔧 テスト・デバッグ | コード品質とデバッグ支援 | **20個** | ユニットテスト作成 |
| 📖 根拠・引用 | 信頼性の高い情報源の提示 | **20個** | 根拠を示して |

**総キーワード数: 200個**（全カテゴリ効果順配置済み）

## 🚀 開発完了状況

### ✅ 完了項目

- [x] **Webアプリケーション構築完了**
- [x] **キーワード大幅拡充**: 35個 → 200個（+1,200行、-45行）
- [x] **効果順配置**: 中級プログラマー向け実務重視の優先順位付け
- [x] **GitHub Pages自動デプロイ**: https://yamasakidaisuke.github.io/ai-prompt-playbook/
- [x] **React Router basename修正**: GitHub Pages用設定完了
- [x] **モバイル対応**: レスポンシブデザイン実装済み
- [x] **コピー機能**: ワンクリックでクリップボードコピー
- [x] **検索機能**: キーワード検索とフィルタリング
- [x] **アニメーション**: Framer Motion による UX 向上

### 📈 成果物

- **ライブサイト**: [Prompt Navigator v2.0](https://yamasakidaisuke.github.io/ai-prompt-playbook/)
- **リポジトリ**: [GitHub](https://github.com/yamasakidaisuke/ai-prompt-playbook)
- **技術スタック**: React + TypeScript + Vite + Tailwind CSS

### 🎯 効果順配置の基準

1. **頻繁に使用される順序**（実務での使用頻度）
2. **学習効果が高い順序**（スキル向上への寄与度）
3. **問題解決力が高い順序**（課題解決への効果）
4. **中級プログラマー特化**（実務即効性重視）

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

## 📝 開発履歴

### v2.0.0 (2024-12-19)
- 🎯 キーワード大幅拡充: 35個 → 200個
- 📈 効果順配置で中級プログラマー向け最適化
- 💻 「ステップバイステップ」「パフォーマンス最適化」など最重要キーワード優先配置
- 🔧 React Router basename修正でGitHub Pages対応
- 🚀 GitHub Pages自動デプロイ完了

### v0.9.0 (初期リリース)
- 🎨 基本UI/UX実装
- 📱 レスポンシブ対応
- 📋 クリップボードコピー機能
- 🔍 検索・フィルタリング機能

---

💡 **AIプロンプト作成がより効率的になることを願っています！** 