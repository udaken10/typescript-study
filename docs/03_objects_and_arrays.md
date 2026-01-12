# 03. オブジェクトと配列（データをまとめよう）

たくさんのデータを扱うとき、バラバラな変数にするよりも、1つにまとめたほうが管理しやすくなります。

## 1. 配列（リストを作ろう）
同じ種類のデータを並べたものが**配列（はいれつ）**です。
`型名[]` のように書きます。

```typescript
let scores: number[] = [80, 90, 75]; // 数字のリスト
let names: string[] = ["さくら", "つばさ", "あおい"]; // 文字のリスト
```

## 2. オブジェクト（プロフィール帳を作ろう）
「名前」「年齢」「趣味」のように、違う種類のデータを1つのまとまり（モノ）にしたものが**オブジェクト**です。

```typescript
type Student = {
  name: string;
  grade: number;
  isClubMember: boolean;
};

const taro: Student = {
  name: "たろう",
  grade: 2,
  isClubMember: true
};
```

## 3. タプル（決まった順序のペア）
「(x座標, y座標)」や「(名前, 出席番号)」のように、中身の順番と数が決まっている特殊な配列を**タプル**と呼びます。

```typescript
let position: [number, number] = [10, 20];
let studentInfo: [string, number] = ["はなこ", 15];
```

## 4. 読み取り専用（readonly）
「後から中身を変えてほしくない！」というときは `readonly` を使います。

```typescript
type Config = {
  readonly appId: string;
};

const myApp: Config = { appId: "ABC-123" };
// myApp.appId = "XYZ"; // エラー！後から変えられない。
```

---
[練習問題にチャレンジ！](../practice/03_objects_and_arrays/)
