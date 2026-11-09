<template>
  <div class="form">

  
    <input
      v-model="todoText"
      type="text"
      placeholder="สิ่งที่ต้องทำ"
    />

  
    <select v-model="priority">
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>

  
    <button @click="addTodo">ADD</button>

  
    <button @click="resetForm">RESET</button>

  </div>
</template>

<script setup>
import { ref } from 'vue'


const todoText = ref('')


const priority = ref('Medium')


const emit = defineEmits(['add-todo'])


function addTodo() {


  if (todoText.value.trim() === '') {
    alert('กรุณากรอกสิ่งที่ต้องทำ')
    return
  }

 
  emit('add-todo', {
    text: todoText.value,
    priority: priority.value,
    completed: false
  })

 
  resetForm()
}


function resetForm() {
  todoText.value = ''
  priority.value = 'Medium'
}
</script>

<style scoped>
.form {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 8px 20px;
  margin-right: 5px;
  cursor: pointer;
}
</style>