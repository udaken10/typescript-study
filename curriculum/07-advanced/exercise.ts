/**
 * 演習 07: 高度な型
 */

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// 1. Partial を使って、Userの一部のプロパティだけを更新するための型
// 'UpdateUserRequest' を定義してください。


// 2. Pick を使って、Userから 'id' と 'name' だけを持つ型
// 'UserSummary' を定義してください。


// 3. Omit を使って、Userから 'age' を除いた型
// 'PublicUser' を定義してください。


// 4. Optional Chaining と Nullish Coalescing
// 次の変数 'someData' が undefined の可能性があるとき、
// 'someData.value' があればその値を、なければ "Default" という文字列を
// 代入するコードを書いてください。
// (適当なオブジェクト型の変数を定義して試してください)
