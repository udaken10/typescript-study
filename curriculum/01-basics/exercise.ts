/**
 * 演習 01: 基本的な型定義
 *
 * 以下の変数に適切な型注釈を付け、値を代入してください。
 */

// 1. 文字列型の変数 'userName' を宣言し、自分の名前を代入してください。


// 2. 数値型の変数 'userAge' を宣言し、年齢を代入してください。


// 3. 真偽値型の変数 'isStudent' を宣言し、true または false を代入してください。


/**
 * 4. 型推論の確認
 * 以下のコードのコメントを外すとエラーになります。なぜエラーになるか考えてみてください。
 */
// let city = "Tokyo";
// city = 100; // この行でエラーが発生します



/**
 * 5. any型（非推奨）
 * どうしても型が決まらない場合に使用する 'any' 型を使ってみましょう。
 * どんな値でも代入できる変数 'flexibleValue' を any型で定義してください。
 */

// --- 判定用コード（編集しないでください） ---
console.log("--- Validation Results ---");
try {
    // @ts-ignore
    console.log(`userName: ${userName} (${typeof userName})`);
    // @ts-ignore
    console.log(`userAge: ${userAge} (${typeof userAge})`);
    // @ts-ignore
    console.log(`isStudent: ${isStudent} (${typeof isStudent})`);
    console.log("✅ すべての変数に値が代入されています。");
} catch (e) {
    console.log("❌ エラー: 変数が未定義か、値が代入されていません。");
}
