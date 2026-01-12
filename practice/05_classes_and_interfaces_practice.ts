/**
 * 練習 05: クラスとインターフェース
 */

// 1. shape インターフェースを定義してください。
// メソッド: getArea(): number
interface Shape {
    getArea(): number;
}

// 2. Shape を実装する Rectangle クラスを作成してください。
// コンストラクタで width と height を受け取ります。
class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
}

// 3. Shape を実装する Circle クラスを作成してください。
// コンストラクタで radius を受け取ります。
class Circle implements Shape {
    constructor(private radius: number) {}

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const rect = new Rectangle(10, 5);
const circle = new Circle(7);

console.log(`Rectangle area: ${rect.getArea()}`);
console.log(`Circle area: ${circle.getArea()}`);

// 実行方法: npm run run:practice practice/05_classes_and_interfaces_practice.ts
