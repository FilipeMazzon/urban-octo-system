import {TaskDto} from "./task.dto";
import TaskRepository from "./task.repository";
import {Task} from "./task.interface";
import {AppError} from "../../infrastructure/error.interface";

export const createTask = (taskDto: TaskDto): Task => {
    try {
        return TaskRepository.createTask(taskDto);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getTasks = (): Task[] => {
    return TaskRepository.getTasks();
}

export const getTaskById = (taskId): Task =>{
    const task =  TaskRepository.getTaskById(taskId);
    if(!task) {
        throw new AppError("Task not found");
    }
    return task;
}