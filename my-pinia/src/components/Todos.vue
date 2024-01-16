<template>
  <div>
    <div 
      v-for="item of todoListStore.filteredTodos"
      :key="item.id"
    >
      <input type="checkbox" 
        @click="todoListStore.toggleTodo(item.id)"
        :checked="item.isfinished">
      <span :class="{ finished: item.isfinished }">{{ item.text }}</span>
      <button @click="todoListStore.removeTodo(item.id)">删除</button>
    </div>
  </div>
</template>
<script setup>
import { useTodoListStore } from '../store';
const todoListStore = useTodoListStore()
</script>
<style lang='css' scoped>
.finished {
  text-decoration: line-through;
}
</style>