/**
 * Project: Todo List Manager
 * 
 * TypeScriptのクラス、インターフェース、ジェネリクスを活用したTODO管理システムです。
 */

interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
}

class TodoManager {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string): void {
        const newTodo: TodoItem = {
            id: this.nextId++,
            task,
            completed: false
        };
        this.todos.push(newTodo);
        console.log(`Added: "${task}"`);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Completed: "${todo.task}"`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    listTodos(): void {
        console.log("\n--- My TODO List ---");
        if (this.todos.length === 0) {
            console.log("No todos yet.");
        }
        this.todos.forEach(t => {
            console.log(`${t.id}: [${t.completed ? "x" : " "}] ${t.task}`);
        });
        console.log("--------------------\n");
    }
}

// プログラムの実行
const manager = new TodoManager();

manager.addTodo("TypeScriptの基本を学ぶ");
manager.addTodo("演習問題を解く");
manager.listTodos();

manager.completeTodo(1);
manager.listTodos();

// 実行方法: npx ts-node projects/todo_list/index.ts
