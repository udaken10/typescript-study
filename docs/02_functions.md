# 02. 関数（命令のセットを作ろう）

「関数」と聞くと数学を思い浮かべるかもしれませんが、プログラミングの関数は**「何かを入れると、決まった処理をして、結果を返してくれる装置」**のようなものです。

## 1. 関数の基本（入り口と出口）
関数を作るときは、以下の2つに型をつけます。
1. **引数（ひきすう）**: 装置に入れる「材料」の種類
2. **戻り値（もどりち）**: 装置から出てくる「結果」の種類

```typescript
// a と b という「数字の材料」を入れて、 「数字の結果」を出す関数
function tasuzan(a: number, b: number): number {
  return a + b;
}
```

## 2. アロー関数（イマドキの書き方）
最近のプログラミングでよく使われる、短く書ける方法です。`=>`（矢印）を使うのでアロー関数と呼びます。

```typescript
const kakezan = (x: number, y: number): number => {
  return x * y;
};
```

## 3. オプション引数（あってもなくてもいい材料）
引数の名前に `?` をつけると、「その材料は入れても入れなくてもいいよ」という意味になります。

```typescript
function sayHello(name: string, message?: string): string {
  if (message) {
    return `${name}さん、${message}`;
  } else {
    return `${name}さん、こんにちは！`;
  }
}

console.log(sayHello("ひろし")); // "ひろしさん、こんにちは！"
console.log(sayHello("はなこ", "お元気ですか？")); // "はなこさん、お元気ですか？"
```

## 4. デフォルト引数（入れなかった時の予備）
`=` を使うと、もし材料を入れなかった場合に使う「予備の値」を決めておけます。

```typescript
function bounasu(score: number, rate: number = 1.0): number {
  return score * rate;
}

console.log(bounasu(100)); // rateは1.0として計算される
```

---
[練習問題にチャレンジ！](../practice/02_functions/)
