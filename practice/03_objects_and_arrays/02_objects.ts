/**
 * 演習 03-1: プレイヤーのプロフィール
 * 
 * ゲームのプレイヤー情報をオブジェクトで作ってみましょう。
 */

type Player = {
    nickname: string;
    level: number;
    hasItem: boolean;
};

// 1. nickname: "勇者たろう", level: 10, hasItem: true のプレイヤーを作ってください
const hero: Player = {
    nickname: "勇者たろう",
    level: 10,
    hasItem: true
};

console.log(`${hero.nickname}のレベルは ${hero.level} です。`);
