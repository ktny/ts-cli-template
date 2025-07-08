# TypeScript CLI Template

TypeScriptでCLIツールを開発するためのモダンなテンプレートリポジトリです。React Inkを使用したインタラクティブなCLIアプリケーションを簡単に構築できます。

## 特徴

- 🚀 **TypeScript** - 型安全な開発環境
- ⚛️ **React Ink** - Reactコンポーネントベースのターミナルレンダリング
- 📦 **すぐに公開可能** - npm publishの設定済み
- 🧪 **テスト環境** - Jestによるテスト環境構築済み
- 🎨 **リッチなUI** - スピナー、プログレスバー、テーブルなどのコンポーネント
- 🔧 **開発ツール** - ESLint、Prettier設定済み

## 必要な環境

- Node.js（最新の安定版を推奨）
- npm 9.0.0以上
- [mise](https://mise.jdx.dev/)（Node.jsバージョン管理）

## クイックスタート

### テンプレートの使用

1. このリポジトリをテンプレートとして新しいリポジトリを作成

```bash
# GitHub上で "Use this template" ボタンをクリック
# または以下のコマンドでクローン
git clone https://github.com/ktny/ts-cli-template.git my-cli-tool
cd my-cli-tool
```

2. miseでNode.jsをセットアップ

```bash
# miseのインストール（未インストールの場合）
curl https://mise.run | sh

# Node.jsの最新版をインストール
mise use node@latest
```

3. 依存関係のインストール

```bash
npm install
```

4. 開発サーバーの起動

```bash
npm run dev
```

### CLIツールの実行

```bash
# 開発時
npm run dev

# ビルド後
npm run build
npm start

# グローバルインストール後
my-cli-tool
```

## プロジェクト構成

```
ts-cli-template/
├── src/
│   ├── cli.tsx          # CLIエントリーポイント（React Ink）
│   ├── commands/        # コマンド実装
│   ├── components/      # React Inkコンポーネント
│   ├── lib/            # ユーティリティ関数
│   ├── types/          # TypeScript型定義
│   └── index.ts        # メインエクスポート
├── tests/              # テストファイル
├── bin/                # 実行可能ファイル
├── dist/               # ビルド出力
├── examples/           # 使用例
└── .mise.toml          # Node.jsバージョン設定
```

## 開発

### 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# TypeScriptビルド
npm run build

# テスト実行
npm test

# リント実行
npm run lint

# フォーマット実行
npm run format

# 型チェック
npm run typecheck
```

### 新しいコマンドの追加

1. `src/commands/`に新しいコマンドファイルを作成
2. コマンドロジックを実装
3. `src/commands/index.ts`でエクスポート

### コンポーネントの追加

1. `src/components/`に新しいコンポーネントを作成
2. React Inkのフックを使用してインタラクティブな機能を実装
3. `src/components/index.ts`でエクスポート

## npmパッケージとして公開

1. `package.json`の情報を更新
   - name: パッケージ名
   - version: バージョン
   - description: 説明
   - author: 作成者情報

2. ビルドとテスト

```bash
npm run build
npm test
```

3. npmに公開

```bash
npm login
npm publish
```

## 主な依存関係

- **react** & **react-ink** - UIレンダリング
- **commander** - コマンドライン引数パース
- **chalk** - ターミナル出力の色付け
- **ora** - ローディングスピナー
- **inquirer** - 対話式プロンプト

## ライセンス

MIT

## 貢献

イシューやプルリクエストは歓迎します！

## 作成者

[あなたの名前]

---

このテンプレートを使用して素晴らしいCLIツールを作成してください！ 🚀
