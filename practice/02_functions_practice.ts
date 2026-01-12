/**
 * 練習 02: 関数
 */

// 1. 2つの数値を引数に取り、その差を返す関数 subtract を作成してください
function subtract(a: number, b: number): number {
    return a - b;
}

// 2. 引数 name (string) と、オプション引数 age (number) を取り、文字列を返す関数 formatUser を作成してください
function formatUser(name: string, age?: number): string {
    return age ? `${name} (${age})` : name;
}

// 3. 数値の配列を受け取り、その最大値を返す関数 findMax をアロー関数で作成してください
const findMax = (numbers: number[]): number => {
    return Math.max(...numbers);
};

console.log(subtract(10, 3));
console.log(formatUser("Alice", 25));
console.log(formatUser("Bob"));
console.log(findMax([1, 5, 2, 8, 3]));

// 実行方法: npm run run:practice practice/02_functions_practice.ts
