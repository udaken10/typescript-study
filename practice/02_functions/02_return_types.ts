/**
 * 演習 02-3: 判定マシン
 * 
 * 入力された数字によって、結果（文字列）を返す関数を作ってみましょう。
 */

// 正解例: function checkScore(score: number): string { ... }
function checkScore(score: number): string {
    if (score >= 80) {
        return "大変よくできました！";
    } else if (score >= 60) {
        return "合格です。";
    } else {
        return "次は頑張りましょう。";
    }
}

console.log(checkScore(85));
console.log(checkScore(45));
