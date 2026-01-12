/**
 * 演習 02-2: アロー関数で自己紹介
 * 
 * 名前を受け取って、挨拶を返すアロー関数「greet」を作ってみましょう。
 */

// 正解例: const greet = (name: string): string => { ... }
const greet = (name: string): string => {
    return `こんにちは、${name}さん！`;
};

console.log(greet("ゆうと")); // "こんにちは、ゆうとさん！" と出ればOK
