import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTaskStore = defineStore('task', () => {
    const tasks = ref<{ id: number, name: string }[]>([]);

    const addTask = (taskName: string) => {
        // Logic to add a task
        if (!taskName) {
            return;
        }
        tasks.value.push({
            id: tasks.value.length + 1,
            name: `Task ${taskName}`,
        });
    };


    const deleteTask = (id: number) => {
        // Logic to delete a task
        tasks.value.splice(id, 1);
    };
    return { tasks, addTask, deleteTask };

});