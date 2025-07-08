# CLAUDE.md

このプロジェクトはTypeScriptでCLIツールを作成するためのテンプレートリポジトリです。

## プロジェクトの概要

- **目的**: TypeScriptでCLIツールを素早く開発開始できるテンプレートの提供
- **主要技術**: TypeScript, React Ink, Commander.js
- **特徴**: インタラクティブなUI、npmパッケージ公開対応、モダンな開発環境
- **Node.jsバージョン管理**: miseを使用（最新の安定版を推奨）

## 開発ガイドライン

### コード規約

- TypeScriptの厳格な型チェックを使用
- React Inkコンポーネントは関数コンポーネントで実装
- エラーハンドリングは適切に行う
- 非同期処理はasync/awaitを使用

### ディレクトリ構成

- `src/commands/`: CLIコマンドの実装
- `src/components/`: React Inkコンポーネント
- `src/lib/`: 共通ユーティリティ
- `src/types/`: TypeScript型定義
- `tests/`: テストファイル（コンポーネント、コマンド、ユーティリティごと）

### テスト方針

- すべての新機能にはテストを追加
- React Inkコンポーネントはink-testing-libraryを使用
- コマンドは統合テストを実施
- カバレッジ80%以上を目標

### Git コミット規約

以下のプレフィックスを使用：

- `feat:` 新機能
- `fix:` バグ修正
- `docs:` ドキュメント更新
- `style:` コードフォーマット
- `refactor:` リファクタリング
- `test:` テスト追加・修正
- `chore:` ビルドプロセスや補助ツールの変更

### リリースプロセス

1. featureブランチで開発
2. mainブランチへPR作成
3. レビュー後マージ
4. GitHub Actionsで自動テスト実行
5. バージョンタグ付けでnpm公開

## よく使うコマンド

```bash
# Node.jsバージョン確認・設定
mise list          # インストール済みバージョン一覧
mise use node@latest  # 最新版を使用
mise current       # 現在のバージョン確認

# 開発
npm run dev

# ビルド
npm run build

# テスト
npm test
npm run test:watch

# リント・フォーマット
npm run lint
npm run format

# 型チェック
npm run typecheck

# すべてのチェック実行
npm run check-all
```

## トラブルシューティング

### Node.jsバージョンの問題

- `mise doctor`でmiseの状態を確認
- `.mise.toml`が正しく設定されているか確認
- `mise install node@latest`で最新版をインストール

### React Inkコンポーネントが表示されない

- `render`関数でコンポーネントを正しくレンダリングしているか確認
- 非同期処理の場合は`waitUntilExit`を使用

### TypeScriptエラー

- `tsconfig.json`の設定を確認
- 必要な型定義（@types/\*）がインストールされているか確認

### npm公開エラー

- `npm login`でログインしているか確認
- パッケージ名が既に使用されていないか確認
- `files`フィールドで公開ファイルが正しく指定されているか確認

## 参考リンク

- [mise Documentation](https://mise.jdx.dev/)
- [React Ink Documentation](https://github.com/vadimdemedes/ink)
- [Commander.js Guide](https://github.com/tj/commander.js)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [npm Publishing Guide](https://docs.npmjs.com/cli/v7/commands/npm-publish)
