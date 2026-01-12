/**
 * 演習 05-1: ロボットを動かそう
 * 
 * クラスを使って、自分だけのロボットを作ってみましょう。
 */

class MyRobot {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // walk というメソッド（命令）を作ってください。
    // 実行すると「(ロボットの名前)は歩いています。」と表示するようにします。
    walk() {
        console.log(`${this.name}は歩いています。`);
    }
}

const robo1 = new MyRobot("メカまる");
robo1.walk();
