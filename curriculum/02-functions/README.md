# 02. 関数の型定義

関数に型を付けることで、引数の渡し間違いや戻り値の勘違いを防ぎます。

## 基本的な構文

引数と戻り値に型を指定します。

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

アロー関数の場合：

```typescript
const multiply = (x: number, y: number): number => {
  return x * y;
};
```

## 戻り値がない関数 (void)

何も返さない関数の戻り値の型は `void` です。

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

## オプション引数とデフォルト引数

- `?` を付けると引数を省略可能になります。
- `=` を使うとデフォルト値を設定できます。

```typescript
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}
```

---
[演習問題へ進む](./exercise.ts)
