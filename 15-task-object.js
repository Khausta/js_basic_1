'use strict'

const toDoList = {
    lastId: 1,
    tasks: [
        {
            'title': 'Помыть посуду',
            id: 1,
            priority: 1
        }
    ],

    addTask: function(task, priority) {
        //проверка на существоание задачи
        let isExisted = false;
        this.tasks.forEach(el => {
            if (el.title === task) {
                isExisted = true;
            }
        })
        //добавление задачи
        if (isExisted) {
            console.log(`Задача "${task}" уже существет`);
            return
        }
        
        this.tasks.push({
            'title': task,
            id: ++this.lastId,
            priority
        });
        console.log(`Задача "${task}" успешно добавлена \nid задачи ${this.lastId}`)
    },

    removeTaskByID: function(id) {
        let isExistedId = this.tasks.find(el => {
            console.log(el.id)
            return el.id == id;  
        });
        console.log(isExistedId)
        if (!isExistedId) {
            console.log(`Задачи с id = ${id} нет в списке`);
            console.log(id);
            return;
        }   

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
                        const oldTitle = task.title;
                        task[`${option}`] = value;
                        console.log(`Задача "${oldTitle}" переименована на "${task.title}"`);
                        break;
                    case 'priority': 
                        task[`${option}`] = value;
                        console.log(`Приоритет задачи "${task.title}" изменен`);
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

// toDoList.addTask()
toDoList.addTask('Помыть посуду', 4);
toDoList.addTask('Выучить стих', 2);
console.log(toDoList.tasks);
toDoList.addTask('Посадить цветок', 5);
console.log(toDoList.tasks);
// toDoList.removeTaskByID(2);
// console.log(toDoList.tasks);
// toDoList.removeTaskByID(2);
// // console.log(toDoList.tasks);
// toDoList.addTask('Полить цветок', 8);
// toDoList.addTask('Приготовить ужин', 6);
// console.log(toDoList.tasks);
// toDoList.updateTask(3, 'priority', 100);
// toDoList.updateTask(3, 'title', 'Покрасить стены');
// console.log(toDoList.tasks);
// toDoList.sortTasksByPriority();
// console.log(toDoList.tasks);