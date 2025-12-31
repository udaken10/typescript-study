/**
 * Project: Calculator
 * 
 * 簡単な計算機を実装してみましょう。
 */

function calculate(a: number, b: number, op: string): number {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        default: return 0;
    }
}

console.log("Result:", calculate(10, 5, "+"));
