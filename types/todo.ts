import { Todo, TodoStatus } from '~~/api/generated/types';
import { SelectItem } from '~~/types/select-item';

export const statusSelectItems: SelectItem[] = [
  {
    value: TodoStatus.New,
    name: 'NEW',
  },
  {
    value: TodoStatus.InProgress,
    name: 'IN_PROGRESS',
  },
  {
    value: TodoStatus.Complete,
    name: 'COMPLETE',
  },
];

export const defaultTodo = (): Todo => {
  return {
    id: "",
    title: "",
    description: "",
    status: TodoStatus.New,
    createdAt: new Date,
    updatedAt: new Date
  }
}
