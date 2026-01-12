/**
 * 練習 04: 高度な型
 */

// 1. Result 型を定義してください。
// これは string または number のいずれかを取ります。
type Result = string | number;

function printResult(res: Result) {
    console.log(`Result is: ${res}`);
}

printResult("SUCCESS");
printResult(100);

// 2. User と Roles のインターセクション型を作成し、変数に代入してください
type User = { name: string };
type Roles = { permissions: string[] };

type UserWithRoles = User & Roles;

const admin: UserWithRoles = {
    name: "AdminUser",
    permissions: ["read", "write", "delete"]
};

// 3. Enum を使って、曜日の定義を作成してください
enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const today: DayOfWeek = DayOfWeek.Friday;
console.log({ admin, today });

// 実行方法: npm run run:practice practice/04_complex_types_practice.ts
