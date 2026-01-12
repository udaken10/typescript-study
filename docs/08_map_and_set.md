# 08. Map と Set（便利なデータの集まり）

配列以外にも、データをまとめて管理する便利な道具があります。

## 1. Map（辞書のように引きたいとき）
「キー（鍵）」と「値」をペアにして保存します。出席番号から名前を引くようなイメージです。

```typescript
const students = new Map<number, string>();
students.set(1, "たろう");
students.set(2, "はなこ");

console.log(students.get(1)); // "たろう"
```

## 2. Set（重複を許さないリスト）
同じデータが2つ入らないリストです。例えば「今日出席した人の名前」を記録するとき、2回ボタンを押しても重複しないようにできます。

```typescript
const attendance = new Set<string>();
attendance.add("あおい");
attendance.add("あおい"); // 重複なので無視される

console.log(attendance.size); // 1
```

---
[練習問題にチャレンジ！](../practice/08_map_and_set/)
