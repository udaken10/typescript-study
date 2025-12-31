# TypeScript Study Workspace

TypeScriptを体系的に学ぶためのワークスペースです。

## ディレクトリ構成

- **[docs/](./docs/)**: Markdown形式の教科書。
- **[practice/](./practice/)**: 教科書の内容を試せる練習スクリプト。
- **[projects/](./projects/)**: 実際に動く小さなアプリ。

## 使い方

1. Dockerコンテナの起動:
   ```bash
   docker-compose up -d
   ```
2. コンテナ内での実行:
   ```bash
   docker-compose exec app npm run verify
   ```

各ディレクトリのファイルを開いて学習を始めてください。