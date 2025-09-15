import * as Express from 'express';
import {createTask, getTaskById, getTasks,} from "./domains/tasks/task.controller";
import * as bodyParser from "body-parser";


const app = Express()


app.use(Express.json());
app.use(bodyParser.json());
// respond with "hello world" when a GET request is made to the homepage
app.post('/api/v1/tasks', createTask);
app.get('/api/v1/tasks', getTasks);
app.get('/api/v1/tasks/:id', getTaskById);
app.put('/api/v1/tasks/:id', )