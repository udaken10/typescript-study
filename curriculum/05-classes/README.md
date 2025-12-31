# 05. クラスとアクセス修飾子

オブジェクト指向プログラミングの基本であるクラスを学びます。

## クラスの定義

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}
```

## アクセス修飾子

- `public`: どこからでもアクセス可能（デフォルト）
- `private`: そのクラス内からのみアクセス可能
- `protected`: そのクラスと継承したサブクラスからアクセス可能

```typescript
class Person {
  private age: number;
  constructor(age: number) { this.age = age; }
}
```

## インターフェースの活用 (implements)

クラスに特定のメソッドの実装を強制できます。

```typescript
interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  draw() { console.log("Drawing a circle"); }
}
```

---
[演習問題へ進む](./exercise.ts)
