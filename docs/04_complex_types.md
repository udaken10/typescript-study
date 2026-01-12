# 04. いろいろな型（選び放題、混ぜ放題）

TypeScriptには、もっと自由な型の作り方があります。

## 1. ユニオン型（「または」の型）
「A または B」という選び方ができるのが**ユニオン型**です。`|`（たてぼう）を使います。

```typescript
let status: "晴れ" | "雨" | "くもり";
status = "晴れ"; // OK
// status = "雪"; // エラー！リストにないから。

let score: number | string;
score = 100; // OK
score = "欠席"; // OK
```

## 2. インターセクション型（「合体」の型）
2つの型を合体させて、両方の特徴を持つ新しい型を作ります。`&`（アンド）を使います。

```typescript
type Brave = { power: number };
type Mage = { magic: number };

// 勇者と魔法使いの力を合わせ持つ「魔法戦士」
type MagicWarrior = Brave & Mage;

const hero: MagicWarrior = {
  power: 100,
  magic: 80
};
```

## 3. 列挙型（Enum：わかりやすい名前をつける）
プログラムで使う数字や文字に、わかりやすい「名前」をつけることができます。

```typescript
enum GameCharacter {
  Warrior,
  Wizard,
  Priest
}

let myJob = GameCharacter.Warrior;
```
※ 最近は、1で紹介した「ユニオン型」の方がよく使われることも多いです。

## 4. インターフェース（モノの形を決める）
`type` と似ていますが、主に「オブジェクトの形」を定義するのによく使われます。

```typescript
interface Point {
  x: number;
  y: number;
}
```

---
[練習問題にチャレンジ！](../practice/04_complex_types/)
