<script setup lang="ts">
import { computed } from 'vue'
import { useExample13Store } from './example13Store'

const props = defineProps<{ role: string }>()
const store = useExample13Store()
const showC = computed(() => props.role === store.roleS.value)
</script>
<template>
  <slot v-if="showC"></slot>
</template>
