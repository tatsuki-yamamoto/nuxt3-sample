import { TodoStatus } from "../todo";

export interface CreateTodoDto {
  title: string;
  description: string;
  status: TodoStatus;
}

export const defaultCreateTodoDto = (): CreateTodoDto => {
  return {
    title: "",
    description: "",
    status: TodoStatus.NEW,
  }
}
