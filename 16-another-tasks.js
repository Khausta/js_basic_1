'use strict'

const toDoList = {
    lastId: 2,
    tasks: [
        {
            task: 'Помыть посуду',
            id: 1,
            priority: 1, 
        },
        {
            task: 'Помыть пол',
            id: 2,
            priority: 1000, 
        }
    ],

    addTask(newTaskObj) {
        
        newTaskObj.id = ++this.lastId;
        this.tasks.push(newTaskObj);
        console.log(`Задача "${newTaskObj.title}" успешно добавлена \nid задачи ${newTaskObj.id}`)
    },

    removeTaskByID(id) {

        let res = this.tasks.find((task, index) => {
            if(task.id === id) {
                const removedTask = this.tasks.splice(index, 1);
                console.log(`Задача "${removedTask[0].title}" удалена`);
                return true;
            }
        }) 

        if (!res) {
            console.log(`Нет задачи с id ${id}`);
        }  
    },

    updateTask(id, updatedTask) {
       
        let res = this.tasks.find((task, index) => {
            if(task.id === id) {
                this.tasks[index] = {...this.tasks[index], ...updatedTask};
                return true;
            }
        }) 
       
        if (!res) {
            console.log(`Нет задачи с id ${id}`);
        }   
    },

    sortTasksByPriority() {
        this.tasks.sort((a, b) => {
            return b.priority - a.priority;
        })
        console.log(this.tasks);
    }
}

//обьект к которому должны быть применены мутоды объекта toDoList по заданию
const newTasks = {
    lastId: 1,
    tasks: [
        {
            id: 1,
            title: 'тест',
            description: 'описание',
            priority: 0
        },
    ],
    addTask(obj) {
        return toDoList.addTask.bind(this)(obj);
    },

    removeTaskByID(id) {
        return toDoList.removeTaskByID.bind(this)(id);
    },

    updateTaskById(id, obj) {
        return toDoList.updateTask.bind(this)(id, obj);
    },

    sortTasksByPriority() {
        return toDoList.sortTasksByPriority.bind(this)();
    }
};

//обьекты для проверки
const newTask1 = {
    title: 'Собрать яблоки',
    priority: 4,
    description: 'Собирать только спелые' 
};

const newTask2 = {
    title: 'Сделать вино',
    priority: 8,
    description: 'Подготовить все ингридиенты' 
};

const newTask3 = {
    priority: 8000,
};

const newTask4 = {
    reason: 'Очень много яблок в этом году'
};

//мои проверки
newTasks.addTask(newTask1);
newTasks.addTask(newTask2);
newTasks.sortTasksByPriority();
newTasks.removeTaskByID(2);
newTasks.addTask(newTask1);
newTasks.updateTaskById(4, newTask4);
newTasks.updateTaskById(4, newTask3);
console.log(newTasks.tasks);







