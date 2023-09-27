'use strict'

const toDoList = {

    tasks: [
        {
            'title': 'Помыть посуду',
            id: 1,
            priority: 1
        }
    ],

    addTask(newTaskObj) {
        //определение id
        const idsArr = this.tasks
        .map(task => task.id)
        .sort((a, b) => b - a);
        
        const taskObj = {
            id: ++idsArr[0],
            ...newTaskObj
        }
        //добавление задачи
        this.tasks.push(taskObj)
        console.log(`Задача "${taskObj.title}" успешно добавлена \nid задачи ${taskObj.id}`)
    },

    //отдельный метод для проверки наличия задачи по id
    checkId(id) {
        return this.tasks.find(el => {
            return el.id == id;  
        });    
    },

    removeTaskByID(id) {
        if (!this.checkId(id))  {
            console.log(`Задачи с id = ${id} нет в списке`);
            return
        } 
        this.tasks.map((task, index) => {
            if(task.id === id) {
                const removedTask = this.tasks.splice(index, 1);
                console.log(`Задача "${removedTask[0].title}" удалена`);
            }
        }) 
    },

    updateTask(id, updatedTask) {
        let oldTask = this.checkId(id);
      
        if (!oldTask) {
            console.log(`Нет задачи с id ${id}`);
            return;
        }

        for (const [key, value] of Object.entries(updatedTask)) {
            if (key === 'title') {
              oldTask.title = value;
              continue;
            }
            if (key === 'priority') {
                oldTask.priority = value;
                continue;
            }
            oldTask[`${key}`] = value;
        }
    },

    sortTasksByPriority() {
        this.tasks.sort((a, b) => {
            return b.priority - a.priority;
        });
        console.log(this.tasks);
    }
};

//объекты для добавления и обновления задач
const task1 = {
    'title': 'Медитация',
    priority: 8
};
const task2 = {
    title: 'Пыгнуть с парашютом',
    priority: 4
};
const task3 = {
    title: 'Решить головоломку',
    priority: 7,
    description: 'Головка на тему Лара Крофт'
};
const optionsToBeUpdated1 = {
    priority: 500,
};
const optionsToBeUpdated2 = {
    'title': 'Прочитать инструкцию',

};
const optionsToBeUpdated3 = {
    priority: 3500,
    'title': 'Починить фен',
    description: 'Найти мастера'
   
};

// проверки
toDoList.addTask(task1);
toDoList.addTask(task2);
toDoList.addTask(task3);
toDoList.updateTask(2, optionsToBeUpdated3);
console.log(toDoList.tasks);
toDoList.updateTask(1, optionsToBeUpdated1);
console.log(toDoList.tasks);
toDoList.updateTask(10, optionsToBeUpdated2);
console.log(toDoList.tasks);
toDoList.updateTask(2, optionsToBeUpdated2);
console.log(toDoList.tasks);
// toDoList.removeTaskByID(2);
// console.log(toDoList.tasks);
// toDoList.removeTaskByID(2);
// console.log(toDoList.tasks);
toDoList.sortTasksByPriority();
