# 06. ジェネリクス (Generics)

型を引数のように扱うことで、再利用性の高いコードを書くことができます。

## なぜジェネリクスが必要か？

例えば、どんな型の引数でもそのまま返す関数を作りたい場合、`any` を使うと型情報が失われますが、ジェネリクスを使うと型を保持できます。

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString"); // 戻り値は string
let output2 = identity<number>(100);        // 戻り値は number
```

## インターフェースでのジェネリクス

```typescript
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 123 };
```

---
[演習問題へ進む](./exercise.ts)
