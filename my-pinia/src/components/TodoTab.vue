<template>
  <div>
    <a href="javaScript:;" 
      @click="setFilter('all')"
      :class="{ active: todoListStore.filter === 'all' }"
    >All</a>
    <a href="javaScript:;" 
      @click="setFilter('finished')"
      :class="{ active: todoListStore.filter === 'finished' }"
    >Finished</a>
    <a href="javaScript:;" 
      @click="setFilter('unfinished')"
      :class="{ active: todoListStore.filter === 'unfinished' }"
    >unFinished</a>
  </div>
</template>
<script setup>
import { useTodoListStore } from '../store'

const todoListStore = useTodoListStore()
const setFilter = (filter) => {
  todoListStore.$patch({ filter })
}
</script>
<style lang='css' scoped>
.active{
  text-decoration: none;
  color: #000;
}
a{
  margin-right: 16px;
}
</style>