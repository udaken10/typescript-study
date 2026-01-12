# 05. クラス（たいやきの型を作ろう）

プログラミングの「クラス」は、よく**「たいやきの型（金型）」**に例えられます。型があれば、同じ形をした「たいやき（実体）」をたくさん作れますよね。

## 1. クラスの基本
「データ」と「命令（メソッド）」をセットにして、自分だけの型を作ります。

```typescript
class Robot {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    console.log(`ピピ！ 私は ${this.name} です。`);
  }
}

const myRobot = new Robot("ドラえもん");
myRobot.sayHi();
```

## 2. 秘密にしたいデータ（private）
「外から勝手に書き換えられたくない情報」は `private` を使って守ることができます。

```typescript
class BankAccount {
  private balance: number = 0; // 外からは見えない

  deposit(amount: number) {
    this.balance += amount;
  }

  showBalance() {
    console.log(`残高は ${this.balance}円 です。`);
  }
}
```

## 3. インターフェースの活用（機能を約束する）
「このクラスは、必ずこの命令を持っていなきゃダメだよ！」という約束をさせるのがインターフェースです。

```typescript
interface Flyer {
  fly(): void; // 「飛ぶ」という命令を持つことを約束
}

class Bird implements Flyer {
  fly() {
    console.log("パタパタ飛びます");
  }
}
```

---
[練習問題にチャレンジ！](../practice/05_classes_and_interfaces/)
