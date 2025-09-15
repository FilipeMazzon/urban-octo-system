import {Request, Response} from 'express';
import {TaskDto} from "./task.dto";
import * as TaskService from "./task.service";

export const createTask = (req: Request, res: Response) => {
    const dto : TaskDto = req.body;
//     validate dto
    try {
        const task = TaskService.createTask(dto);

        res.status(201).send(task)
    }catch (error) {
        res.status(500).send(error);
    }
}

export const getTasks = (req: Request, res: Response) => {
    try {
        const tasks = TaskService.getTasks();
        res.status(200).send(tasks)
    }catch (error) {
        res.status(500).send(error);
    }
}

export const getTaskById = (req: Request, res: Response) => {
    try {
        const taskId = req.params.id;
        const tasks = TaskService.getTaskById(taskId);
        res.status(200).send(tasks)
    }catch (error) {
        if(error.status) {
            res.status(error.status).send(error);
        } else {
            res.status(500).send(error);
        }
    }
}


export const updateTask = (req: Request, res: Response) => {
    const taskId = req.params.id;
    try {
        const task =
    }catch (error) {
        res.status(500).send(error);
    }
}
