# TypeScript 学習カリキュラム

このプロジェクトは、TypeScriptの基本から応用までを段階的に学習するための教材です。
各ディレクトリには「教科書（README.md）」と「演習問題（exercise.ts）」が含まれています。

## Dockerでの学習環境

このプロジェクトにはDocker環境が用意されています。

1.  **コンテナの起動**:  
    `docker-compose up -d`
2.  **コンテナ内に入る**:  
    `docker-compose exec app bash`
3.  **演習の実行** (コンテナ内):  
    `npm run run:ex curriculum/01-basics/exercise.ts`

## Gitでの進捗保存

学習の各ステップを完了するたびに、Gitに保存することを推奨します。

1.  **演習問題を解く**
2.  **変更を保存（コミット）**:  
    コンテナ内で以下のコマンドを実行します：  
    `npm run save -- "Step 01: Basics completed"`  
    (※メッセージは適宜変更してください)

これにより、自分の学習履歴をGitに残すことができます。

## カリキュラム目次

各項目の「教科書」で学び、「演習」でコードを書いてみましょう。

| 章 | タイトル | 教科書 (Textbook) | 演習 (Exercise) |
| :--- | :--- | :--- | :--- |
| 01 | TypeScriptの基本 | [開く](./01-basics/README.md) | [編集](./01-basics/exercise.ts) |
| 02 | 関数の型定義 | [開く](./02-functions/README.md) | [編集](./02-functions/exercise.ts) |
| 03 | 複雑な型 | [開く](./03-complex-types/README.md) | [編集](./03-complex-types/exercise.ts) |
| 04 | インターフェース | [開く](./04-interfaces-and-types/README.md) | [編集](./04-interfaces-and-types/exercise.ts) |
| 05 | クラスとアクセス修飾子 | [開く](./05-classes/README.md) | [編集](./05-classes/exercise.ts) |
| 06 | ジェネリクス | [開く](./06-generics/README.md) | [編集](./06-generics/exercise.ts) |
| 07 | 高度な型 | [開く](./07-advanced/README.md) | [編集](./07-advanced/exercise.ts) |

## 学習の進め方

1.  各ディレクトリの `README.md` を読み、概念を理解します。
2.  `exercise.ts` を開き、コメントの指示に従ってコードを記述します。
3.  コンパイルエラーが消え、期待通りの動作になればクリアです。
