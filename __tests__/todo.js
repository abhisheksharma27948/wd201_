const todoList = require('../todo');
const {all, markAsComplete, add} = todoList();

describe("TodoList Test Suite", () => {
    const today = new Date();
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);  
    beforeAll( () => {
        add(
            {
                title : "I need to go to gym",
                completed : false,
                dueDate : new Date().toLocaleDateString("en-CA")
            }
        );
    })

    test("Should add new todo", () => {
        const todoItemCount = all.length;
        add(
            {
                title : "Test todo",
                completed : false,
                dueDate : new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(todoItemCount + 1);
    });

    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})