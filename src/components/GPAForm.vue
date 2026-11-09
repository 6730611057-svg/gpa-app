<template>

  <div class="row q-col-gutter-sm">

    <div class="col-12 col-md-3">

      <q-input
        v-model="name"
        label="ชื่อวิชา"
        filled
      />

    </div>


    <div class="col-12 col-md-2">

      <q-input
        v-model.number="credit"
        type="number"
        label="หน่วยกิต"
        filled
      />

    </div>


    <div class="col-12 col-md-3">

      <q-input
        v-model.number="score"
        type="number"
        min="0"
        max="100"
        label="คะแนน (0-100)"
        filled
      />

    </div>


    <div class="col-12 col-md-2">

      <q-input
        :model-value="grade"
        label="เกรดที่ได้"
        filled
        readonly
      />

    </div>


    <div class="col-12 col-md-2">

      <q-btn
        color="primary"
        label="+ เพิ่มวิชา"
        class="full-width"
        @click="addSubject"
      />

    </div>

  </div>

</template>


<script setup>

import { ref, computed } from 'vue'


const emit = defineEmits(['add-subject'])


const name = ref('')
const credit = ref(0)
const score = ref('')


const getGrade = (score) => {

  if (score >= 80) return 'A'
  if (score >= 75) return 'B+'
  if (score >= 70) return 'B'
  if (score >= 65) return 'C+'
  if (score >= 60) return 'C'
  if (score >= 55) return 'D+'
  if (score >= 50) return 'D'

  return 'E'

}


const getPoint = (grade) => {

  if (grade === 'A') return 4
  if (grade === 'B+') return 3.5
  if (grade === 'B') return 3
  if (grade === 'C+') return 2.5
  if (grade === 'C') return 2
  if (grade === 'D+') return 1.5
  if (grade === 'D') return 1

  return 0

}


const grade = computed(() => {

  if (score.value === '') {
    return ''
  }

  return getGrade(Number(score.value))

})


const addSubject = () => {

  if (
    name.value === '' ||
    credit.value <= 0 ||
    score.value === ''
  ) {
    return
  }


  const newSubject = {

    id: Date.now(),

    name: name.value,

    credit: Number(credit.value),

    score: Number(score.value),

    grade: getGrade(Number(score.value)),

    point: getPoint(getGrade(Number(score.value)))

  }


  emit('add-subject', newSubject)


  name.value = ''
  credit.value = 0
  score.value = ''

}

</script>