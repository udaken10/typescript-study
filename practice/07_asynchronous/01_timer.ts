/**
 * 演習 07-1: 3秒待つタイマー
 * 
 * async と await を使って、時間を待つ処理を書いてみましょう。
 */

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function startTimer() {
    console.log("タイマーを開始します...");

    // 1. await を使って、ここで 3000ミリ秒（3秒）待ってください
    await wait(3000);

    console.log("3秒経ちました！ピピピピ！");
}

startTimer();
