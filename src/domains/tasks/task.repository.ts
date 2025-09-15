import {TaskDto} from "./task.dto";
import {Task} from "./task.interface";
import {v4 as uuidv4} from 'uuid';
import {TaskUpdate} from "./taskUpdate.dto";

class TaskRepository {
    tasks: Task[] = [];

    createTask(tasks: TaskDto): Task {
        const newTask: Task = {
            id: uuidv4(),
            ...tasks,
            completed: false
        }

        this.tasks.push(newTask);
        return newTask;
    }

    getTasks() {
        return this.tasks;
    }

    getTaskById(taskId: string): Task | null {
        return this.tasks.find((task)=> task.id === taskId)
    }

    updateTask(taskDto: TaskUpdate) {
        this.tasks = this.tasks.map((task) => {
            if(task.id === taskDto.id) {
                return {
                    id: task.id,
                    ...taskDto
                }
            }
            return task;
        })
    }

    deleteTask(taskId: string) {
        this.tasks = this.tasks.filter((task)=> task.id !== taskId)
    }
}


export default new TaskRepository();