/**
 * 練習 01: 基本的な型
 * 
 * 以下の変数に適切な型をつけて、正しく動作するようにしてください。
 */

// 1. 文字列、数値、真偽値の変数
let userName: string = "TypeScript Learner";
let progress: number = 0;
let isCompleted: boolean = false;

// 2. null と undefined
let maybeValue: string | null = null;
let emptyValue: undefined = undefined;

// 3. 型推論を利用した変数（型を書かずに推論させてください）
let autoInferred = "I am a string";

// 4. (応用) unknown 型の変数に文字列を代入し、typeof を使って安全に console.log してください
let secret: unknown = "My Secret Text";
if (typeof secret === "string") {
    console.log(secret.toUpperCase());
}

console.log({ userName, progress, isCompleted, maybeValue, emptyValue, autoInferred });

// 実行方法: npm run run:practice practice/01_basics_practice.ts
