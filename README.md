# 🔰 高校生から始める TypeScript 入門

このプロジェクトは、プログラミング初心者や高校生でも楽しく TypeScript を学べるように作られた教材です。
[サバイバルTypeScript](https://typescriptbook.jp/) をベースに、もっと身近な例え話で解説しています。

## 🚀 学習の進め方

1. **[教科書 (docs)](./docs/) を読む**: 
   - 難しい言葉を抜きにして、イメージで学べる解説が書いてあります。
2. **[練習問題 (practice)](./practice/) を解く**:
   - 一つ一つの機能ごとに、小さなプログラムを書いて動かしてみましょう。
3. **[プロジェクト (projects)](./projects/) を見る**:
   - 習ったことを使って作られた、実際のアプリのコードをのぞいてみましょう。

## 📚 目次

| 章 | タイトル | 教科書 | 練習問題 |
| :--- | :--- | :--- | :--- |
| 01 | TypeScriptのキホン | [読む](./docs/01_basics.md) | [やってみる](./practice/01_basics/) |
| 02 | 関数（命令のセット） | [読む](./docs/02_functions.md) | [やってみる](./practice/02_functions/) |
| 03 | オブジェクトと配列 | [読む](./docs/03_objects_and_arrays.md) | [やってみる](./practice/03_objects_and_arrays/) |
| 04 | いろいろな型 | [読む](./docs/04_complex_types.md) | [やってみる](./practice/04_complex_types/) |
| 05 | クラス（たいやきの型） | [読む](./docs/05_classes_and_interfaces.md) | [やってみる](./practice/05_classes_and_interfaces/) |
| 06 | ジェネリクス | [読む](./docs/06_generics.md) | [やってみる](./practice/06_generics/) |
| 07 | 非同期（待ち時間） | [読む](./docs/07_asynchronous.md) | [やってみる](./practice/07_asynchronous/) |
| 08 | Map と Set | [読む](./docs/08_map_and_set.md) | [やってみる](./practice/08_map_and_set/) |
| 09 | ユーティリティ型 | [読む](./docs/09_utility_types.md) | [やってみる](./practice/09_utility_types/) |

## 💻 動かし方

VS Code のターミナルで以下のコマンドを打つと、書いたコードを実行できます。

```bash
# 例：変数についての練習問題を動かす場合
npx ts-node practice/01_basics/01_variables.ts
```

---
全ての内容は [GitHub](https://github.com/) で管理することを想定しています。
さあ、楽しくレベルアップしていきましょう！
```bash
npm run run:practice practice/01_basics_practice.ts
```

### プロジェクトの実行
```bash
npx ts-node projects/todo_list/index.ts
```

## 開発環境
- Dockerを使用して環境を構築することも可能です。
  - `docker-compose up -d`

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