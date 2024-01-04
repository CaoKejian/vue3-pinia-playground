import { defineStore } from 'pinia'

export default defineStore('todoList', {
  state: () => ({
    todos: [],
    filter: 'all',
    nextId: 0
  }),
  actions: {
    addTodo (text) {
      this.todos.push({
        id: this.nextId++,
        isFinished: false,
        text
      })
    },
    toggleTodo (id) {
      this.todos = this.todos.map(todo => {
        if (todo.id === id) {
          todo.isFinished = !isFinished 
        }
        return todo
      })
    },
    removeTodo (id) {
      this.todos = this.todos.filter( todo => todo.id !== id )
    },
    
  },
  getters: {
    finishedTodos (state) {
      return state.todos.filter( todo => todo.isFinished )
    },
    unfinishedTodos (state) {
      return state.todos.filter( todo => !todo.isFinished )
    },
    filteredTodos (state) {
      switch (this.filter) {
        case 'finished':
          return this.finishedTodos
        case 'unfinished':
          return this.unfinishedTodos
        default:
          return this.todos
      }
    }
  }
})