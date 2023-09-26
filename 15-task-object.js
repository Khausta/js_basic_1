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

    addTask: function(newTask) {
        //определение id
        const idsArr = this.tasks
        .map(task => task.id)
        .sort((a, b) => b - a);
        
        const taskObj = {
            id: ++idsArr[0],
            ...newTask
        }
        //добавление задачи
        this.tasks.push(taskObj)
        console.log(`Задача "${taskObj.title}" успешно добавлена \nid задачи ${taskObj.id}`)
        console.log(this.tasks);
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

const task1 = {
    'title': 'Медитация',
    priority: 8
}
const task2 = {
    title: 'Пыгнуть с парашютом',
    priority: 4
}


toDoList.addTask(task1);
toDoList.addTask(task2);
// проверки
// toDoList.addTask('Помыть посуду', 4);
// toDoList.addTask('Выучить стих', 2);
// toDoList.addTask('Посадить цветок', 5);
// toDoList.addTask('Посадить цветок', 5);
// toDoList.removeTaskByID(2);
// toDoList.removeTaskByID(2);
// toDoList.addTask('Полить цветок', 8);
// toDoList.addTask('Приготовить ужин', 6);
// toDoList.updateTask(3, 'priority', 100);
// toDoList.updateTask(3, 'title', 'Покрасить стены');
// toDoList.sortTasksByPriority();