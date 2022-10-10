import { SelectItem } from '~~/types/select-item';

export enum TodoStatus {
  NEW,
  IN_PROGRESS,
  COMPLETE,
}

export const statusSelectItems: SelectItem[] = [
  {
    value: TodoStatus.NEW,
    name: 'NEW',
  },
  {
    value: TodoStatus.IN_PROGRESS,
    name: 'IN_PROGRESS',
  },
  {
    value: TodoStatus.COMPLETE,
    name: 'COMPLETE',
  },
];

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt: Date;
}

export const defaultTodo = (): Todo => {
  return {
    id: "",
    title: "",
    description: "",
    status: TodoStatus.NEW,
    createdAt: new Date,
    updatedAt: new Date
  }
}
