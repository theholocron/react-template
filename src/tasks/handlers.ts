import { http, HttpResponse } from "msw";
import { Default as TaskListDefault } from "./task-list.story";

export const taskListHandler = http.get("/tasks", () => HttpResponse.json(TaskListDefault.args));
export const taskListErrorHandler = http.get("/tasks", () => HttpResponse.json([]));

export const handlers = [taskListHandler];
