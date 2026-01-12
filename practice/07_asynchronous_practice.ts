/**
 * 練習 07: 非同期処理
 */

// 1. 指定された時間（ミリ秒）待機する delay 関数を作成してください
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 2. delay を使って、"Start" -> 1秒待機 -> "End" と表示する非同期関数 run を作成してください
async function run() {
    console.log("Start");
    await delay(1000);
    console.log("End");
}

run();

// 実行方法: npm run run:practice practice/07_asynchronous_practice.ts
