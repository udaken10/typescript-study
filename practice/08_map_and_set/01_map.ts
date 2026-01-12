/**
 * 演習 08-1: 出席簿を作ろう
 * 
 * Map を使って、出席番号（数字）と名前（文字列）を管理します。
 */

const classRoom = new Map<number, string>();

classRoom.set(10, "けんた");
classRoom.set(25, "みゆ");

// 1. 番号 10 の人の名前を表示してください
console.log(`出席番号10番は ${classRoom.get(10)} です。`);
