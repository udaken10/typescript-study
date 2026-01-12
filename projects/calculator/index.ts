/**
 * Project: TypeScript Calculator
 * 
 * ユニオン型と列挙型を活用した計算機の実装例です。
 */

type Operation = "+" | "-" | "*" | "/";

const calculate = (a: number, b: number, op: Operation): number => {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                console.error("Error: Division by zero");
                return NaN;
            }
            return a / b;
    }
};

const a = 10;
const b = 5;

console.log(`${a} + ${b} = ${calculate(a, b, "+")}`);
console.log(`${a} - ${b} = ${calculate(a, b, "-")}`);
console.log(`${a} * ${b} = ${calculate(a, b, "*")}`);
console.log(`${a} / ${b} = ${calculate(a, b, "/")}`);

// 実行方法: npx ts-node projects/calculator/index.ts
