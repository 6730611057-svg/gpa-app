<template>
  <div class="container">

    <h2>Todo List with Priority</h2>

    <TodoForm @add-todo="addTodo" />


    <div class="filter">

      <button @click="filter = 'all'">
        ทั้งหมด
      </button>

      <button @click="filter = 'unfinished'">
        ยังไม่เสร็จ
      </button>

      <button @click="filter = 'finished'">
        เสร็จแล้ว
      </button>

    </div>


    <TodoList
      :todos="filteredTodos"
      @toggle-todo="toggleTodo"
    />

  </div>
</template>


<script setup>

import { ref, computed } from 'vue'

// Import Component
import TodoForm from '../components/TodoForm.vue'


const todos = ref([])

const filter = ref('all')


function addTodo(todo) {

  todos.value.push(todo)

}

function toggleTodo(index) {

  todos.value[index].completed =
    !todos.value[index].completed

}


const filteredTodos = computed(() => {


  if (filter.value === 'finished') {

    return todos.value.filter(todo => {
      return todo.completed === true
    })

  }


  if (filter.value === 'unfinished') {

    return todos.value.filter(todo => {
      return todo.completed === false
    })

  }


  return todos.value

})

</script>


<style scoped>

.container {
  width: 600px;
  margin: 50px auto;
  padding: 20px;
}

h2 {
  color: #2196f3;
  margin-bottom: 20px;
}

.filter {
  display: flex;
  margin: 15px 0;
}

.filter button {
  flex: 1;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: white;
}

.filter button:hover {
  background-color: #eeeeee;
}

</style>