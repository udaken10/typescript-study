# 07. 高度な型と便利機能

TypeScriptをより使いこなすための機能を学びます。

## 特殊な記法

- **Optional Chaining (`?.`)**: オブジェクトが `null` や `undefined` の場合にエラーにならず `undefined` を返します。
- **Nullish Coalescing (`??`)**: `null` または `undefined` のときだけデフォルト値を使います。

```typescript
const userZip = user.address?.zipCode ?? "000-0000";
```

## ユーティリティ型

既存の型から新しい型を生成する便利な機能です。

- `Partial<T>`: すべてのプロパティをオプション（省略可能）にする
- `Readonly<T>`: すべてのプロパティを読み取り専用にする
- `Pick<T, K>`: 指定したプロパティのみを抽出する
- `Omit<T, K>`: 指定したプロパティを除外する

```typescript
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type UpdateTaskDto = Partial<Task>; // { id?, title?, completed? }
```

---
[演習問題へ進む](./exercise.ts)
