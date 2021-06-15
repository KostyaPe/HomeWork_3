class List {
    _list = [];

    static isTodoExist(todos , name) {
        if (!todos.some(el => el.task === name)) {
            return;
        }

        throw new Error('Task is already exist.');
    }

    addTodo(taskName) {
        List.isTodoExist(this._list, taskName);

        this.list = [...this._list, {task: taskName, isDone: false}];
    }

    removeTodo(taskName) {
        this.list = this._list.filter(({ task }) => task !== taskName);
    }

    editTask(taskName, newTaskName) {
        List.isTodoExist(this._list, newTaskName);

        this.list = this._list.map(todo => {
            todo.task = todo.task === taskName ? newTaskName : todo.task;

            return todo;
        });
    }

    get list() {
        return this._list;
    }

    set list(newState) {
        const isSave = confirm('Do you want save changes?');

        this._list = isSave ? newState : this._list;
    }
}

class TodoList extends List {
    get info() {
        return this._list.reduce((prev, curr) => {
            const increaseByOne = 1;
            const noIncrease = 0;

            prev.done += curr.isDone ? increaseByOne : noIncrease;
            prev.remain += curr.isDone ? noIncrease : increaseByOne;

            return prev;
        }, {
            tasks: this._list.length,
            done: 0,
            remain: 0,
        });
    }

    editStatus(taskName, status) {
        this.list = this._list.map(todo => {
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

const secondList = new TodoList();

secondList.addTodo('task1');
secondList.addTodo('task2');
secondList.addTodo('task3');