<template>
    <div>
        <h1>Task</h1>
        <!-- {{ $route.params.id }} -->
        {{task?.id}}
        {{ task?.name }}
    </div>
</template>
<script setup lang="ts">
// import { useRoute } from 'vue-router';

// import { useTaskStore } from '../../stores/task';
// const taskStore = useTaskStore();

// const route = useRoute();
// const id = route.params.id;

// const task = taskStore.tasks.find(task => task.id === id);


import { useRoute } from 'vue-router';

import { useCurrentTask } from '../../composables/useCurrentTask';

const route = useRoute();
const id = Number(route.params.id);

const {task} = useCurrentTask(id);


console.log('Task ID:', id, 'Task Details:', task);






</script>