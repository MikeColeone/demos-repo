<template>
    <div>
        <h1>Tasks</h1>
        <div>
            <input type="text" ref="inputRef"/>
            <button @click="addTask()">add</button>
        </div>

        <div v-for="task in taskStore.tasks" :key="task.id">
            <router-link :to="`/task/${task.id}`">{{ task.name }}</router-link>
            <button @click="taskStore.deleteTask(task.id)">del</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const inputRef = ref<HTMLInputElement | null>(null);
import {useTaskStore} from '../../stores/task'

const taskStore = useTaskStore();

const addTask = () => {
    // Logic to add a task
    const taskName = inputRef.value?.value || '';
    if (!taskName) {
        return;
    }
    inputRef.value!.value = ''; // Clear the input field
    taskStore.addTask(taskName);
};

</script>

<style scoped>
</style>