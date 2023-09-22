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

    addTask(task, priority) {
        
            //проверка на существование задачи
            let isExisted = false;
            this.tasks.forEach(el => {
                if (el.task === task) {
                    console.log(el.task);
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
                task: task,
                id,
                priority
            });
            console.log(`Задача "${task}" успешно добавлена \nid задачи ${id} `)
            
        
    } ,

    removeTaskByID(id) {

       
            let isExistedId = this.tasks.find(el => {
                console.log(el.id)
                return el.id == id;  
            });

            if (!isExistedId) {
                console.log(`Задачи с id = ${id} нет в списке`);
                console.log(id);
                return;
            }   
        
            this.tasks.map((task, index) => {
                if(task.id === id) {
                    const removedTask = this.tasks.splice(index, 1);
                    console.log(`Задача "${removedTask[0].task}" удалена`);
                }
            })
          
    },

    updateTask(option, id, value) {
       
      
            this.tasks.map(task => {
                if (task.id === id) {
                    switch(option) {
                        case 'title':
                            const oldTitle = task.task;
                            task.task = value;
                            console.log(`Задача "${oldTitle}" переименована на "${task.task}"`);
                            break;
                        case 'priority': 
                            task[`${option}`] = value;
                            console.log(`Приоритет задачи "${task.task}" изменен`);
                            break;
                        default:
                            console.log('Введите правильные значения');
                    }
                }
            })
          
        
    },

    sortTasksByPriority() {
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

//проверки
toDoList.addTask('Собрать яблоки', 4);
toDoList.addTask('Собрать яблоки', 4);
console.log(toDoList.tasks);

const addTask = toDoList.addTask.bind(newTask);
addTask('Собрать груши', 4);
console.log(newTask.tasks);

toDoList.removeTaskByID(2);
toDoList.removeTaskByID(2);

const removeTaskByID = toDoList.removeTaskByID.bind(newTask);
removeTaskByID(1);
console.log(newTask.tasks);

toDoList.updateTask('title', 1, 'Стать космонавтом');
console.log(toDoList.tasks);

const updateTaskTitleByID = toDoList.updateTask.bind(newTask, 'title');
updateTaskTitleByID(2, 'Забраться на Эверест');
console.log(newTask.tasks);

toDoList.updateTask('priority', 1, 300);
console.log(toDoList.tasks);

const updateTaskPriorityByID = toDoList.updateTask.bind(newTask, 'priority');
updateTaskPriorityByID(2, 200);
console.log(newTask.tasks);

toDoList.sortTasksByPriority();

const sortTasksByPriority = toDoList.sortTasksByPriority.bind(newTask);
sortTasksByPriority();






