# 09. ユーティリティ型（型をもっと便利に加工する）

もともとある型を、ちょっと加工して使いやすくする「便利ツール（ユーティリティ）」が用意されています。

## 1. Partial（「全部あってもなくてもいいよ」にする）
すべての項目をオプション（`?` つき）に変えます。

```typescript
type User = { name: string; age: number };

// どちらか片方だけでもOKになる
const partialUser: Partial<User> = { name: "たろう" };
```

## 2. Readonly（「読み取り専用」にする）
すべての項目を書き換え禁止にします。

```typescript
const secret: Readonly<User> = { name: "ひみつ", age: 0 };
// secret.name = "ばれた"; // エラー！書き換えられない
```

## 3. Pick（「これだけ頂戴」と選ぶ）
特定の項目だけを抜き出した新しい型を作ります。

```typescript
// name だけを持つ型に加工
type UserNameOnly = Pick<User, "name">;
```

---
[練習問題にチャレンジ！](../practice/09_utility_types/)
