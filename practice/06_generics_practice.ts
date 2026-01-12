/**
 * 練習 06: ジェネリクス
 */

// 1. 配列の最初の要素を返すジェネリック関数 getFirstElement を作成してください
function getFirstElement<T>(elements: T[]): T | undefined {
    return elements.length > 0 ? elements[0] : undefined;
}

const numArr = [10, 20, 30];
const strArr = ["A", "B", "C"];

console.log(getFirstElement(numArr));
console.log(getFirstElement(strArr));

// 2. キーと値のペアを保持するジェネリッククラス StorageNode を作成してください
class StorageNode<K, V> {
    constructor(public key: K, public value: V) {}
}

const node = new StorageNode<string, number>("age", 25);
console.log(node.key, node.value);

// 実行方法: npm run run:practice practice/06_generics_practice.ts
