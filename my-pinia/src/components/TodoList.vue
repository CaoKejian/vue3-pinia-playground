<template>
  <div>
    <todo-tab/>
    <todo-form/>
    <todos/>
  </div>
</template>
<script setup lang='js'>
import { ref } from 'vue'
import TodoTab from './TodoTab.vue'
import TodoForm from './TodoForm.vue'
import Todos from './Todos.vue'
</script>
<style lang='less' scoped></style>