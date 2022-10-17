import { CreateTodoDto } from "~~/api/generated/types";

export const defaultCreateTodoDto = (): CreateTodoDto => {
  return {
    title: "",
    description: ""
  }
}
