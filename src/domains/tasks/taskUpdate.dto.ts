import {TaskDto} from "./task.dto";

export interface TaskUpdate extends TaskDto {
    id: string;
    completed: boolean;
}