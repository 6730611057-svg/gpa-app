<template>
  <q-page class="q-pa-lg">

    <div class="text-h4 text-primary text-center q-mb-lg">
      GPA Calculator
    </div>

    <GPAForm
      @add-subject="addSubject"
    />

    <q-separator class="q-my-lg" />

    <SubjectList
      :subjects="subjects"
      @delete="deleteSubject"
    />

    <SummaryCard
      v-if="subjects.length > 0"
      :subjects="subjects"
    />

  </q-page>
</template>


<script setup>

import { ref } from 'vue'

import GPAForm from '../components/GPAForm.vue'
import SubjectList from '../components/SubjectList.vue'
import SummaryCard from '../components/SummaryCard.vue'


const subjects = ref([])


const addSubject = (subject) => {
  subjects.value.push(subject)
}


const deleteSubject = (id) => {

  subjects.value = subjects.value.filter(item => {
    return item.id !== id
  })

}

</script>