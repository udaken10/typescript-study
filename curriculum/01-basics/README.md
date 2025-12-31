# 01. TypeScriptの基本

TypeScriptの最も基本的な概念である「型」と「変数」について学びます。

## なぜTypeScriptを使うのか？

JavaScriptは「動的型付け言語」であり、変数の型が実行時に決まります。一方、TypeScriptは「静的型付け」を導入し、コードを書いている最中にエラーを見つけることができます。

## 基本的な型（プリミティブ型）

- `string`: 文字列
- `number`: 数値（整数・浮動小数点両方）
- `boolean`: 真偽値（true / false）
- `null` / `undefined`: 値がないことを示す

## 変数宣言と型注釈

変数の後ろに `: 型名` を書くことで、型を明示（型注釈）できます。

```typescript
let message: string = "Hello TS";
let count: number = 42;
let isDone: boolean = false;
```

## 型推論

TypeScriptは、代入された値から自動的に型を推論してくれます。多くの場合、明示的に書かなくても安全です。

```typescript
let name = "Alice"; // string型と推論される
// name = 123; // エラー: 数値は代入できない
```

---
[演習問題へ進む](./exercise.ts)
