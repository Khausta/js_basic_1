'use strict'

const toDoList = {
    lastId: 1,
    tasks: [
        {
            'title': 'Помыть посуду',
            id: 1,
            priority: 1
        },
    ],

    addTask: function(task, priority) {
        const isExistedTask = this.tasks.find(el => {
            return el.title === `${task}`; 
        })

        if(!isExistedTask) {
            const newTask = {
                'title': task,
                id: ++this.lastId,
                priority
            };
            this.tasks.push(newTask);
            console.log(`Задача "${task}" успешно добавлена \nid задачи ${newTask.id}`)
        } else {
            console.log(`Задача "${task}" уже существет`);
        }
    },

    removeTaskByID: function(id) {
        this.tasks.map((task, index) => {
            if(task.id === id) {
                const removedTask = this.tasks.splice(index, 1);
                console.log(`Задача "${removedTask[0].title}" удалена`);
            }
        })
    },

    updateTask: function(id, option, value) {
        this.tasks.map(task => {
            if (task.id === id) {
                switch(option) {
                    case 'title':
                        task[`${option}`] = value;
                        console.log('Задача переименована');
                        break;
                    case 'priority': 
                        task[`${option}`] = value;
                        console.log('Приоритет задачи изменен');
                        break;
                    default:
                        console.log('Введите правильные значения');
                }
            }
        })
    },

    sortTasksByPriority: function() {
        this.tasks.sort((a, b) => {
            return b.priority - a.priority;
        })
        console.log(this.tasks);
    }
}

toDoList.addTask('Помыть посуду', 4);
toDoList.addTask('Выучить стих', 2);
toDoList.addTask('Посадить цветок', 5);

console.log(toDoList.tasks);

toDoList.removeTaskByID(2);

console.log(toDoList.tasks);
toDoList.addTask('Полить цветок', 8);
toDoList.addTask('Приготовить ужин', 6);

toDoList.updateTask(3, 'priority', 100);
toDoList.updateTask(3, 'title', 'Покрасить стены');
console.log(toDoList.tasks)

toDoList.sortTasksByPriority();
console.log(toDoList.tasks);