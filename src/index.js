class TodoList {
    #todos;

    static isTodoExist(todos , name) {
        if (!todos.some(el => el.task === name)) {
            return;
        }

        throw new Error('Task is already exist.');
    }

    constructor() {
        this.#todos = [{task: 'drink', isDone: false}];
    }

    get todoList() {
        return this.#todos;
    }

    get info() {
        return this.#todos.reduce((prev, curr) => {
            const increaseByOne = 1;
            const noIncrease = 0;

            prev.done += curr.isDone ? increaseByOne : noIncrease;
            prev.remain += curr.isDone ? noIncrease : increaseByOne;

            return prev;
        }, {
            tasks: this.#todos.length,
            done: 0,
            remain: 0,
        });
    }

    set todoList(newState) {
        const isSave = confirm('Do you want save changes?');

        this.#todos = isSave ? newState : this.#todos;
    }

    addTodo(taskName) {
        TodoList.isTodoExist(this.#todos, taskName);

        this.todoList = [...this.#todos, {task: taskName, isDone: false}];
    }

    removeTodo(taskName) {
        this.todoList = this.#todos.filter(({ task }) => task !== taskName);
    }

    editTask(taskName, newTaskName) {
        TodoList.isTodoExist(this.#todos, newTaskName);

        this.todoList = this.#todos.map(todo => {
            todo.task = todo.task === taskName ? newTaskName : todo.task;

            return todo;
        });
    }

    editStatus(taskName, status) {
        this.todoList = this.#todos.map(todo => {
            if (todo.task === taskName) {
                todo.isDone = status;
            }

            return todo;
        });
    }
}

const list = new TodoList();

list.addTodo('walk');
list.addTodo('ride');
list.addTodo('sleep');
list.addTodo('sing');
list.removeTodo('sing');
list.editStatus('walk', true);
list.editStatus('sleep', true);
list.editTask('sleep', 'take a shower');