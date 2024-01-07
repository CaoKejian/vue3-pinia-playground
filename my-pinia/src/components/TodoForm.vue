<template>
  <div>
    <input type="text" v-model="inputRef">
    <button @click="addTodo">增加Todo</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../store';
const inputRef = ref('')
const todoListStore = useTodoListStore()
const addTodo = () => {
  todoListStore.addTodo(inputRef.value)
}
</script>
<style lang='less' scoped></style>