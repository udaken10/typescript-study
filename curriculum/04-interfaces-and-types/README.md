# 04. インターフェースと型エイリアス

オブジェクトの形状に名前を付けて再利用する方法を学びます。

## インターフェース (Interface)

オブジェクトの「設計図」のようなものです。

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // オプションプロパティ
}

const user: User = { id: 1, name: "Alice" };
```

## 型エイリアス (Type Alias)

任意の型に新しい名前（エイリアス）を付けます。

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;
```

### Interface vs Type

- **Interface**: 主にオブジェクトの形状を定義するのに使われます。拡張（extends）が容易です。
- **Type**: オプションやUnion型など、より柔軟な定義が可能です。

初心者のうちは、オブジェクトの定義には `interface` を使うのが一般的です。

---
[演習問題へ進む](./exercise.ts)
