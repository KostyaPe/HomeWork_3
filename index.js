'use sctrict'

const toDoList = {
  addTask: function (task, description) {
    if (!this.tasks.find(el => el.task === task)) this.tasks.push({task, status: false, description});
  },

  removeTask: function (task) {
    this.tasks = this.tasks.filter(el => el.task !== task);
  },

  editTask: function (task, changes) {
    this.tasks = this.tasks.map(el => {
      if (el.task === task) {
        if (typeof changes === 'object') {
          for (const change in changes) {
            if (el.hasOwnProperty(change)) {
              el[change] = changes[change];
            }
          }
        }
      }
      
      return el;
    });
  },

  getInfo: function () {
    return {
      summary: this.tasks.length,
      done: this.tasks.filter(el => el.status).length,
      backlog: this.tasks.filter(el => !el.status).length,
    }
  },

  tasks: [
    {
      task: 'Learn JS',
      status: false,
      description: 'have to work hard, so i can find new job as soon as possible.',
    },

    {
      task: 'Drink beer',
      status: true,
      description: 'Need to drink beer after hard working day.',
    },

  ],
};
