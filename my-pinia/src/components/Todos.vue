<template>
  <div>
    <div>
      <!-- <input type="checkbox" :checked="item.isfinished">
      <span>item.text</span>
      <button @click="todoListStore.removeTodo(item.id)">删除</button> -->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../store';
const todoListStore = useTodoListStore()
</script>
<style lang='less' scoped></style>