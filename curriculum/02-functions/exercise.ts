/**
 * 演習 02: 関数の型
 */

// 1. 2つの数値を引数に取り、その和を返す関数 'sum' を作成してください。
// 引数と戻り値に型注釈を付けてください。


// 2. 文字列を受け取り、それを大文字にして返す関数 'toUpper' を作成してください。


// 3. オプション引数を使った関数
// 名前(name: string)と、挨拶(greeting: string, 省略可能)を受け取り、
// 挨拶が省略された場合は "Hi" を使う関数 'sayHello' を作成してください。


// 4. アロー関数の型
// 数値を受け取り、その数値が偶数なら true, 奇数なら false を返す

// --- 判定用コード（編集しないでください） ---
console.log("--- Validation Results ---");
try {
    // @ts-ignore
    console.log(`sum(10, 5) = ${sum(10, 5)} (Expected: 15)`);
    // @ts-ignore
    console.log(`toUpper("ts") = ${toUpper("ts")} (Expected: TS)`);
    // @ts-ignore
    console.log(`sayHello("Alice") = ${sayHello("Alice")} (Expected: Hi, Alice!)`);
    // @ts-ignore
    console.log(`isEven(4) = ${isEven(4)} (Expected: true)`);
    console.log("✅ 基本的な動作確認が完了しました。戻り値の型も確認してください。");
} catch (e) {
    console.log("❌ エラー: 関数が正しく実装されていないか、名前が間違っています。");
}
