<template>
  <div>
    

    <div
      v-for="(todo, index) in todos"
      :key="index"
      :class="getPriorityClass(todo.priority)"
      class="todo-item"
    >

      <input
        type="checkbox"
        :checked="todo.completed"
        @change="toggleTodo(index)"
      />

      <span :class="{ done: todo.completed }">
        {{ todo.text }}
      </span>

      <span class="priority">
        {{ todo.priority }}
      </span>

    </div>

    <p v-if="todos.length === 0">
      ยังไม่มีรายการ
    </p>

  </div>
</template>

<script setup>

defineProps({
  todos: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['toggle-todo'])


function toggleTodo(index) {
  emit('toggle-todo', index)
}

function getPriorityClass(priority) {

  if (priority === 'High') {
    return 'priority-high'
  }

  if (priority === 'Medium') {
    return 'priority-medium'
  }

  if (priority === 'Low') {
    return 'priority-low'
  }

  return ''
}
</script>

<style scoped>

.todo-item {
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 5px;
}


.priority-high {
  background-color: #ffcccc;
}


.priority-medium {
  background-color: #fff0b3;
}


.priority-low {
  background-color: #ccffcc;
}

.todo-item input {
  margin-right: 10px;
}

.todo-item span {
  margin-right: 15px;
}

.priority {
  margin-left: auto;
  font-weight: bold;
}

.done {
  text-decoration: line-through;
}

</style>