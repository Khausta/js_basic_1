'use strict'

const toDoList = {
    tasks: [
        {
            task: 'Помыть посуду',
            id: 1,
            priority: 1, 
        },
        {
            task: 'Помыть пол',
            id: 2,
            priority: 1, 
        }
    ],

    addTask() {
        return function(task, priority) {
        
            //проверка на существование задачи
            let isExisted = false;
            this.tasks.forEach(el => {
                if (el.title === task) {
                    isExisted = true;
                }
            })
            
            if (isExisted) {
                console.log(`Задача "${task}" уже существет`);
                return
            }
            //добавление задачи
            const idsArr = this.tasks.map(task => {
                return task.id;
            })
            idsArr.sort((a, b) => b - a);
            const id = ++idsArr[0];
    
            this.tasks.push({
                'title': task,
                id,
                priority
            });
            console.log(`Задача "${task}" успешно добавлена \nid задачи ${id} `)
            
        }
    } ,

    removeTaskByID() {

        return function(id) {
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
        }   
    },

    updateTask() {
        return function(id, option, value) {
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
        }
    },

    sortTasksByPriority: function() {
        this.tasks.sort((a, b) => {
            return b.priority - a.priority;
        })
        console.log(this.tasks);
    }
}


const newTask = {
    tasks: [
        {
            id: 1,
            task: 'Важная задача',
            priority: 2,
            description: 'не заполнено',
        },
        {
            task: 'Помыть пол',
            id: 2,
            priority: 1, 
        }
    ]
};

const addTask = toDoList.addTask().bind(newTask);

addTask('Пройти тему scope', 10);
addTask('Пройти тему scope', 10);
addTask('Разобрать книги', 8);
console.log(newTask.tasks);

const removeTaskByID = toDoList.removeTaskByID().bind(newTask);
removeTaskByID(3);
console.log(newTask);

const updateTaskByTitle = toDoList.updateTask(id, 'title').bind(newTask);
updateTaskByTitle(1, 'Стать звездой');
console.log(newTask);




// console.log(toDoList.tasks);



