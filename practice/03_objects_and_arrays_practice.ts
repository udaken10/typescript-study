/**
 * 練習 03: オブジェクトと配列
 */

// 1. 商品 (Product) の型を定義してください
// 必須: name (string), price (number)
// オプション: description (string)
type Product = {
    name: string;
    price: number;
    description?: string;
};

const apple: Product = {
    name: "Apple",
    price: 150
};

// 2. Productの配列を作成し、ループで名前を表示してください
const products: Product[] = [
    apple,
    { name: "Banana", price: 100, description: "Sweet fruit" }
];

products.forEach(p => console.log(p.name));

// 3. ID (number) と ステータス (string) を持つタプルを作成してください
const apiResponse: [number, string] = [200, "OK"];

console.log(apiResponse);

// 実行方法: npm run run:practice practice/03_objects_and_arrays_practice.ts
