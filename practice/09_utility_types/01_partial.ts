/**
 * 演習 09-1: プロフィールの書き換え
 * 
 * Partial を使って、一部のデータだけを更新できるようにします。
 */

type Profile = {
    nickname: string;
    introduction: string;
};

// 1. Partial<Profile> を使って、introduction だけを持つオブジェクトを作成してください
const updateData: Partial<Profile> = {
    introduction: "よろしくお願いします！"
};

console.log(updateData);
