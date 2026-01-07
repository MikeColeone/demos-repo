<template>
    <div>
        <h1>Tasks</h1>
        <div>
            <input type="text" ref="inputRef"/>
            <button @click="addTask">add</button>
        </div>

        <div v-for="task in tasks" :key="task.id">
            {{ task.name }}
            <button @click="deleteTask(task.id)">del</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const inputRef = ref<HTMLInputElement | null>(null);
const tasks = ref<{id: number, name:string}[]>([]);


const addTask = () => {
    // Logic to add a task
    const taskName = inputRef.value?.value || '';
    if (!taskName) {
        return;
    }
    inputRef.value!.value = ''; // Clear the input field
    tasks.value.push({
        id: tasks.value.length + 1,
        name: `Task ${taskName}`,
    });
};


const  deleteTask = (id: number) => {
    // Logic to delete a task
    tasks.value.splice(id, 1);
};
</script>

<style scoped>
</style>