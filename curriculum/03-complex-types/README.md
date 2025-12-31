# 03. 複雑な型（配列・列挙型・連合型）

より実践的なデータの構造を表現するための型を学びます。

## 配列 (Array)

`型名[]` または `Array<型名>` で表します。

```typescript
let list: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];
```

## タプル (Tuple)

固定された要素数と特定の型を持つ配列です。

```typescript
let person: [string, number] = ["Alice", 30];
```

## 列挙型 (Enum)

関連する定数をまとめて定義できます。

```typescript
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
```

## 連合型 (Union Types)

複数の型のうち、いずれかであることを示します。非常に頻繁に使われます。

```typescript
let id: string | number;
id = 101;     // OK
id = "A101";  // OK
```

---
[演習問題へ進む](./exercise.ts)
