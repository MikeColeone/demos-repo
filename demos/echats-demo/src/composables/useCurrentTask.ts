import { useTaskStore } from '../stores/task';
export const useCurrentTask = (id: number) => {
    const taskStore = useTaskStore();
    const task = taskStore.tasks.find((task: any) => task.id === id);
    return { task };
}