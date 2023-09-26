'use strict'

const toDoList = {

    tasks: [
        {
            'title': 'Помыть посуду',
            id: 1,
            priority: 1
        }
    ],

    addTask: function(newTaskObj) {
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

    removeTaskByID: function(id) {
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

    updateTask: function(id, updatedTask) {
        const oldTask = this.checkId(id);
        if (!oldTask) {
            console.log(`Нет задачи с id ${id}`);
            return;
        }
        for (const [key, value] of Object.entries(updatedTask)) {
            if (key === 'title') {
              oldTask.title = value;
            }
            if (key === 'priority') {
                oldTask.priority = value;
            }
        }

    },

    sortTasksByPriority: function() {
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
const optionsToBeUpdated1 = {
    priority: 500,
};
const optionsToBeUpdated2 = {
    'title': 'Прочитать инструкцию',
};
const optionsToBeUpdated3 = {
    priority: 3500,
    'title': 'Починить фен'
};

// проверки
toDoList.addTask(task1);
toDoList.addTask(task2);
toDoList.updateTask(2, optionsToBeUpdated3);
console.log(toDoList.tasks);
toDoList.updateTask(1, optionsToBeUpdated1);
console.log(toDoList.tasks);
toDoList.updateTask(10, optionsToBeUpdated2);
console.log(toDoList.tasks);
toDoList.removeTaskByID(2);
console.log(toDoList.tasks);
toDoList.removeTaskByID(2);
console.log(toDoList.tasks);
toDoList.sortTasksByPriority();
