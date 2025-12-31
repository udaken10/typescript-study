/**
 * Project: Todo List
 * 
 * Todoリストのデータ構造と配列操作を練習します。
 */

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const todos: Todo[] = [
    { id: 1, task: "Learn TypeScript", completed: false },
    { id: 2, task: "Master Interfaces", completed: false }
];

console.log("Your Todos:", todos);
