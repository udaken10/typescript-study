/**
 * 演習 03-2: 好きな食べ物リスト
 * 
 * 配列を使って、好きな食べ物のリストを管理しましょう。
 */

// 1. favoriteFoods という文字列の配列を作って、好きな食べ物を3つ入れてください
const favoriteFoods: string[] = ["ラーメン", "寿司", "焼肉"];

// 2. 4つ目の食べ物を追加してください (hint: push を使います)
favoriteFoods.push("ハンバーグ");

// 3. ループを使って、一つずつ表示してください
favoriteFoods.forEach(food => {
    console.log(`私は ${food} が好きです！`);
});
